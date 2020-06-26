// =========================================================
// Gulp Task: deployStagingFrontend
// Description:
// Dependencies:
// =========================================================
module.exports = function(gulp, $, config, utils) {
  return function(callback) {
    const stream =
      // -------------------------------------------- Start Task

      $.console.log("== STAGING ==");
    $.console.log("Deploy portal...");

    $.ifElse(
      $.appWorkingFolderExists === false,
      function () {

        $.console.log("creating directory(s) for environment");
        utils.exec(
          // make sure the folder exists because of .gitignore
          "mkdir -p " + config.paths.portalWorkingFolder
        );
      },
      function () {
        // else
      }
    );


    utils.exec(
      "cat " + config.paths.frontEndPath + "portal" + config.paths.slash + "environment.staging.ts > " + config.paths.portalWorkingFolder + "environment.ts"
    );
    utils.exec(
      "cat " + config.paths.frontEndPath + "portal" + config.paths.slash + "environment.staging.ts > " + config.paths.portalWorkingFolder + "environment.prod.ts"
    );

    $.console.log('Build the portal...');
    utils.exec('cd nrwl && ng build --project=portal --prod --aot --verbose');

    // ---------------------------------------------- End Task
    callback();
    return stream;
  };
};
