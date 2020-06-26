'use strict';

// =========================================================
// Project: LOOP APPS
// NOTE: Using Gulp 4
// npm install --save-dev gulp-load-plugins gulp@latest
// =========================================================
import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
export const $ = plugins()
import * as babel from '@babel/core'

import mysqlImport from 'mysql-import'
import mkdirp from 'mkdirp'
import chalk from 'chalk'
import fs from 'fs'
import os from 'os'
import del from 'del'
import cp from 'child_process'
import console from 'better-console'
import isWsl from 'is-wsl'

// USE GULP-PLUMBER FOR ERRORS

// =========================================================
// configuration and helpers
// =========================================================
//import config from './_config/gulp/config.local';
import config from './_config/gulp/config';

const utils = {
  exec: exec,
}

// make it clean and simple for most use cases
export function exec(statement) {
  $.cp.execSync(statement, {
    stdio: [0, 1, 2]
  });
}

// =========================================================
// load plugins from package.json into array of objects
// =========================================================
$.mysqlImport = mysqlImport;
$.mkdirp = mkdirp;
$.chalk = chalk;
$.fs = fs;
$.os = os;
$.del = del;
$.cp = cp;
$.console = console;
$.isWsl = isWsl;
$.isWin = ($.os.platform() === 'win32') ? true : false;
$.isMac = ($.os.platform() === 'darwin') ? true : false;
$.isLinux = ($.os.platform() === 'linux') ? true : false;
$.apiWorkingFolderExists = ($.fs.existsSync(config.paths.apiWorkingFolder)) ? true : false;
$.portalWorkingFolderExists = ($.fs.existsSync(config.paths.portalWorkingFolder)) ? true : false;
$.replacedConfigForwindows = false;
// console.log($);

// magical function to get tasks from gulp/tasks
function getTask(task, group = null) {
  if (group) {
    return require(config.paths.env + 'gulp/tasks/' + group + '/' + task)(gulp, $, config, utils);
  } else {
    return require(config.paths.env + 'gulp/tasks/' + task)(gulp, $, config, utils);
  }
}

// =========================================================
// now lets get down to business
// =========================================================

// =========================================================
// ............
// =========================================================

// general utility
gulp.task('init', getTask('init'));
gulp.task('clean', getTask('clean'));
gulp.task('osSetup', getTask('osSetup'));

// deploy scripts
gulp.task('updateAllDeps', getTask('updateAllDeps'));

gulp.task('deployLocalAPI', getTask('deployLocal', 'deploy/apps/api'));
gulp.task('deployLocalPortal', getTask('deployLocal', 'deploy/apps/portal'));


gulp.task('deployStagingAPI', getTask('deployStag', 'deploy/apps/api'));
gulp.task('deployStagingPortal', getTask('deployStag', 'deploy/apps/portal'));


gulp.task('deployProductionAPI', getTask('deployProd', 'deploy/apps/api'));
gulp.task('deployProductionPortal', getTask('deployProd', 'deploy/apps/portal'));


gulp.task('deployLocal', gulp.series(
  'updateAllDeps',
  gulp.parallel('deployLocalAPI'), 'deployLocalPortal', 
  function (done) {
    $.console.log($.chalk.white.bgBlackBright.bold(' Local env has been deployed! '));
    done();
  }
));

gulp.task('deployStaging', gulp.series(
  'updateAllDeps',
  gulp.parallel('deployStagingAPI'), 'deployStagingPortal', 
  function (done) {
    $.console.log($.chalk.white.bgBlackBright.bold(' Staging env has been deployed! '));
    done();
  }
));

gulp.task('deployProd', gulp.series(
  'updateAllDeps',
  gulp.parallel('deployProductionAPI'), 'deployProductionPortal', 
  function (done) {
    $.console.log($.chalk.white.bgBlackBright.bold(' Prod env has been deployed! '));
    done();
  }
));

// mac
// gulp.task('macUpdate', getTask('macUpdate', 'mac'));
// gulp.task('macSetup', getTask('macSetup', 'mac'));

// =========================================================
// default
// =========================================================

gulp.task('default', gulp.series(
  gulp.parallel('init'),
  'clean', 'osSetup', 'updateAllDeps',
  function (done) {
    $.console.log(('                         '));
    $.console.log($.chalk.black.bgBlackBright.bold('                         '));
    $.console.log($.chalk.white.bgBlackBright.bold(' Ready to rock and roll! '));
    $.console.log($.chalk.black.bgBlackBright.bold('                         '));
    $.console.log(('                         '));
    done();
  }
));