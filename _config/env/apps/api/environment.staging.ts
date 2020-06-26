// this file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// the list of file replacements can be found in `angular.json`.

const path = require("path");
export const environment = {
  production: true,
  API_KEY: "!@#$%^&*()_StagePOCDot#@!#com)(*&^%^$@",
  port :"3333",
  token_expiresin: "7200s",

  /*Configurations used for TypeORM */
  // db_host: "localhost",
  db_host: "127.0.0.1",
  database: "iot_stage",
  db_username: "iot_stage",
  db_password: "60a1470bo3Ew8GK",
  // encrypt:true,
  encrypt: false,
  synchronize: false,
  migrationsRun: false,
  logging: false,
  
 };
