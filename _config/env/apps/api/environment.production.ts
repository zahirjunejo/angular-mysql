// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const path = require("path");
export const environment = {
  production: true,
  API_KEY: "!@#$%^&*()_ProPOCDot#@!#com)(*&^%^$@",
  port :"4444",
  token_expiresin: "7200s",

  /*Configurations used for TypeORM */
  db_host: "localhost",
  database: "iot_prod",
  db_username: "iot_prod",
  db_password: "8xZQ632R4xa2A8g",
  encrypt:true,
  synchronize: false,
  migrationsRun: false,
  logging: false,
  
};
