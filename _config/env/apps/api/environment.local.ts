// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const path = require("path");
export const environment = {
  production: false,
  API_KEY: "!@#$%^&*()_POCDot#@!#com)(*&^%^$@",
  port :"3333",
  token_expiresin: "7200s",

  /*Configurations used for TypeORM */
  db_host: "localhost",
  database: "iot",
  db_username: "root",
  db_password: "mysql123",
  encrypt:false,
  synchronize: false,
  migrationsRun: false,
  logging: false,
 
};
