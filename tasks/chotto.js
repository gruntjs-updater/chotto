/*
 * chotto
 * https://github.com/munkychop/chotto
 *
 * Copyright (c) 2015 Ivan Hayes
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  grunt.registerMultiTask("chotto", "Checks for the existence of files and halts the Grunt build if they don't exist.", function() {
    
    var filePaths = this.data.filePaths;
    var numFailedFiles = 0;

    if (Array.isArray(filePaths)) {

      filePaths.forEach(function(path) {

        if (!grunt.file.exists(path))
        {
          grunt.log.warn("Source file: '" + path + "' not found.");
          numFailedFiles++;
        }
      });

      if (numFailedFiles > 0) grunt.fail.warn("Please add the missing files.");
    }
  });
};