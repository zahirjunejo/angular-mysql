// =========================================================
// Gulp Task: osSetup
// Description: ____________________
// Dependencies:
// =========================================================
module.exports = function(gulp, $, config, utils) {
  return function(callback) {
    const stream =
      // -------------------------------------------- Start Task

      $.ifElse(
        $.isWsl === true,
        function() {
          // if stream
          // assume we're on WSL on Windows 10
          $.console.log("We're on WSL (Win10).");
        },
        function() {
          $.ifElse(
            $.isWin === true,
            function() {
              // else stream
              // assume that we're on a Windows

              $.console.log(
                "We must be on a Windows 10 directly and not in WSL."
              );
            },
            function() {
              // else

              $.ifElse(
                $.isMac === true,
                function() {
                  // else stream
                  // assume that we're on a Mac

                  $.console.log("We must be on a Mac.");
                },
                function() {
                  // else
                  // else stream
                  // assume that we're on Ubuntu 1804

                  $.ifElse(
                    $.isLin === true && $.isWsl === true,
                    function() {
                      // NOT YET WORKING. NEEDS TESTING.
                      // else stream
                      // assume that we're on a Mac

                      $.console.log(
                        "We must be on a Linux. Like... Ubuntu 18.04."
                      );
                    },
                    function() {}
                  );
                }
              );
            }
          );
        }
      );

    // ---------------------------------------------- End Task
    callback();
    return stream;
  };
};
