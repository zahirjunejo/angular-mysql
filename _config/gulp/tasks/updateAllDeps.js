// =========================================================
// Gulp Task: updateAllDeps
// Description:
// Dependencies:
// =========================================================
module.exports = function(gulp, $, config, utils) {
  return function(callback) {
    const stream =
      // -------------------------------------------- Start Task

      $.console.log("Update root dependencies...");
    utils.exec("yarn install");

    $.console.log("Update NRWL dependencies...");
    utils.exec("cd nrwl && yarn install");
   

    // ---------------------------------------------- End Task
    callback();
    return stream;
  };
};
