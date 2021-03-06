// =========================================================
// Gulp Task: deployproductionBackend
// Description:
// Dependencies:
// =========================================================
module.exports = function (gulp, $, config, utils) {
  return function (callback) {
    const stream =
      // -------------------------------------------- Start Task
      $.console.log("== PRODUCTION ==");
    $.console.log("Deploy the API environment...");

    $.ifElse(
      $.apiWorkingFolderExists === false,
      function () {

        $.console.log("creating directory(s) for environment");
        utils.exec(
          // make sure the folder exists because of .gitignore
          "mkdir -p " + config.paths.apiWorkingFolder
        );
      },
      function () {
        // else
      }
    );


    utils.exec(
      "cat " + config.paths.apiEnvironmentFilePath + "environment.production.ts > " + config.paths.apiWorkingFolder + "environment.ts"
    );
    utils.exec(
      "cat " + config.paths.apiEnvironmentFilePath + "environment.production.ts > " + config.paths.apiWorkingFolder + "environment.prod.ts"
    );

    $.console.log('Build the api...');
    utils.exec('cd nrwl && ng build --project=api --prod');


    // ---------------------------------------------- End Task
    callback();
    return stream;
  };
};
