#!/bin/bash

set -x;

echo "launching containers..."
docker-compose up -d

echo "waiting 10 seconds..."
timeout 10

echo "deploying database..."
echo RESTORE DATABASE [poc_apps_stag] FROM DISK = N'/var/opt/mssql/data/poc_apps_stag.bak' WITH FILE = 1, NOUNLOAD, REPLACE, NORECOVERY, STATS = 5, MOVE 'Ghost' TO N'/var/opt/mssql/data/poc_apps_stag.mdf', MOVE 'Ghost_log' TO N'/var/opt/mssql/data/poc_apps_stag_log.ldf'; > database/restore_database.sql 
docker exec -it poc-apps_db_1 bash -c "/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'qvBisw5TQLSfjgq' -d master -i /var/opt/mssql/data/restore_database.sql"

echo "building application within webserver container..."
docker exec -it poc-apps_web_1 bash -c "set -x; cd /var/www/staging/poc-apps && yarn install && npm install -g gulp gulp-cli && gulp init && gulp deployStaging"
timeout 5
echo "project is compiled within webserver container..."

echo "launching browser..."
chrome http://poc.local
chrome http://app.poc.local

set +x;
