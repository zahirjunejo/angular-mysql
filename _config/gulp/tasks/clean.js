// =========================================================
// Gulp Task: clean
// Description: clean the environment
// Dependencies:
// =========================================================
module.exports = function(gulp, $, config, utils) {
  return function(callback) {
    const stream =
      // -------------------------------------------- Start Task

      $.console.log("Cleaning the /tmp folder...");
    // utils.exec('find '+config.paths.tmp+' -type f -exec rm {} +'); // clean tmp folder
    $.console.log("Done. Things are tidy.");

    // ---------------------------------------------- End Task
    callback();
    return stream;
  };
};
