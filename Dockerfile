FROM ubuntu:18.04
LABEL maintainer="Asher Syed <asher.syed@snyder.tech>"

# Generate locale C.UTF-8 for general locale data
ENV LANG en_US.UTF-8

RUN apt update
RUN apt upgrade -y

# common packages
RUN apt-get install -y apt-utils
RUN apt-get install -y software-properties-common
RUN apt-get install -y tmux curl wget zip unzip locales

# RUN update-locale LANG=en_US.UTF-8
RUN locale-gen --purge en_US.UTF-8
RUN dpkg-reconfigure --frontend noninteractive locales

RUN apt-get install -y zsh git nano wget curl make vim net-tools
 
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# build tools
RUN apt-get install -y build-essential

# libsass-dev, sassc
RUN apt install -y libsass-dev
RUN apt install -y sassc

# webserver
RUN apt install -y nginx

# HTTPS: create Diffie-Hellman keys for nginx, (4096 will take lot of time)
RUN openssl dhparam -dsaparam -out /etc/nginx/dhparam.pem 2048

# take backup of default nginx config
RUN cd /etc/nginx && tar -czvf nginx_$(date +'%F_%H-%M-%S').tar.gz nginx.conf sites-available/ sites-enabled/ && cd -

# database client
RUN apt-get install -y mariadb-client

# nodejs
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt install -y nodejs

# yarn
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

# nodejs frameworks
RUN npm install -g pm2
RUN npm install -g gulp-cli
RUN npm install -g @angular/cli
RUN npm install -g @nestjs/cli
RUN npm install -g @angular-devkit/build-angular
RUN npm install -g @angular/compiler
RUN npm install -g @angular/compiler-cli
RUN npm install -g typescript

# php
RUN add-apt-repository -y ppa:ondrej/php
RUN apt-get update

# needed by php installation

# RUN echo "America/New_York" | tee /etc/timezone
# RUN export DEBIAN_FRONTEND=noninteractive && apt-get install -y tzdata
# RUN dpkg-reconfigure --frontend noninteractive tzdata

RUN export DEBIAN_FRONTEND=noninteractive \
    && ln -fs /usr/share/zoneinfo/America/New_York /etc/localtime \
    && apt-get install -y tzdata \
    && dpkg-reconfigure --frontend noninteractive tzdata

RUN apt-get install -y php7.0 php7.0-cli php7.0-common php7.0-curl php7.0-json php7.0-opcache php7.0-mysql php7.0-mbstring php7.0-zip php7.0-fpm php7.0-xml
RUN apt-get install -y php7.1 php7.1-cli php7.1-common php7.1-curl php7.1-json php7.1-opcache php7.1-mysql php7.1-mbstring php7.1-zip php7.1-fpm php7.1-xml
RUN apt-get install -y php7.2 php7.2-cli php7.2-common php7.2-curl php7.2-json php7.2-opcache php7.2-mysql php7.2-mbstring php7.2-zip php7.2-fpm php7.2-xml
RUN apt-get install -y php7.3 php7.3-cli php7.3-common php7.3-curl php7.3-json php7.3-opcache php7.3-mysql php7.3-mbstring php7.3-zip php7.3-fpm php7.3-xml

# change php-fpm user to current user
# php_fpm=("7.2" "7.3")
# for version in ${php_fpm[@]}; do
# 	echo $version 
# 	sed -i -e "s|\<user = www-data\>|user = $USER|g" /etc/php/$version/fpm/pool.d/www.conf
# 	sed -i -e "s|\<group = www-data\>|group = $USER|g" /etc/php/$version/fpm/pool.d/www.conf
# 	sed -i -e "s|\<listen.owner = www-data\>|listen.owner = $USER|g" /etc/php/$version/fpm/pool.d/www.conf
# 	sed -i -e "s|\<listen.group = www-data\>|listen.group = $USER|g" /etc/php/$version/fpm/pool.d/www.conf
# done

# composer
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

# sql server client - sqlcmd
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN curl https://packages.microsoft.com/config/ubuntu/18.04/prod.list | tee /etc/apt/sources.list.d/msprod.list
RUN apt-get update && ACCEPT_EULA=y DEBIAN_FRONTEND=noninteractive apt-get install -y mssql-tools unixodbc-dev

# dotnet core sdk 
RUN wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
RUN DEBIAN_FRONTEND=noninteractive  dpkg -i packages-microsoft-prod.deb

RUN add-apt-repository universe
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y apt-transport-https
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y dotnet-sdk-3.0

# certbot
RUN apt-get update
RUN add-apt-repository -y universe
RUN add-apt-repository -y ppa:certbot/certbot
RUN apt-get update
RUN apt-get install -y certbot python-certbot-nginx
RUN mkdir /var/www/_letsencrypt

# create web folders
RUN mkdir -p /var/www/staging
RUN mkdir -p /var/www/production

# set permissions for web folders
# RUN chown -R $USER:$USER /var/www/staging
# RUN chown -R $USER:$USER /var/www/production

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80 443

STOPSIGNAL SIGTERM

# ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]