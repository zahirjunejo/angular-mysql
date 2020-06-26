

// =========================================================
// =========================================================
// ------------------------------------------ Anything Else

// =========================================================
// =========================================================
// ------------------------------------------ Export Configs
module.exports = {
  production: false, // use to programmatically operate on
  // gulp tasks based on environment

  // -------------------------------------------- paths

  paths: {
    root: "./",
    env: "./_config/",
    configDrupalLocal: './_config/drupal/local/',
    configDrupalStaging:    './_config/drupal/staging/',
    configDrupalProduction: './_config/drupal/production/',
    apiEnvironmentFilePath: './_config/env/apps/api/',
    frontEndPath: './_config/env/apps/',
    apiWorkingFolder: './nrwl/apps/api/src/environments/',  
    portalWorkingFolder: './nrwl/apps/portal/src/environments/',	
    slash: '/', //to use in deploy*****.js files .. for creating a dynamic behaviour for windows and linux env.
    git: "./.git/",
    tmp: "./tmp/",
    base: "./",  
  }
};
