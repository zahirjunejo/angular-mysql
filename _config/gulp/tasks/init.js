// =========================================================
// Gulp Task: init
// Description: initialize the repo
// Dependencies:
// =========================================================
module.exports = function(gulp, $, config, utils) {
  return function(callback) {
    const stream =
      // -------------------------------------------- Start Task

      // prepare filesystem directories
      $.mkdirp(config.paths.git, function(err) {
        if (err) console.error(err);
        else console.log("Made git folder.");
      });
    $.mkdirp(config.paths.tmp, function(err) {
      if (err) console.error(err);
      else console.log("Made tmp folder.");
    });

    $.fs.writeFile(
      config.paths.tmp + "file.tmp",
      "Nothing to see here.",
      function(err) {
        if (err) {
          return $.console.log(err);
        } else {
          $.console.log("The file was saved!");
        }
      }
    );

    $.console.log("Run yarn...");
    utils.exec("yarn");
    $.console.log("Done.");

    $.console.log("Run npm...");
    utils.exec("npm install");
    $.console.log("Done.");

    // ---------------------------------------------- End Task
    callback();
    return stream;
  };
};
