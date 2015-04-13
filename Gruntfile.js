/*
 * chotto
 * https://github.com/munkychop/chotto
 *
 * Copyright (c) 2015 Ivan Hayes
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

    grunt.initConfig({

        chotto: {
            pass: {
                filePaths : ["tests/a.js", "tests/b.js"]
            },

            fail: {
                filePaths : ["tests/a.js", "tests/xyz.js"]
            }
        }
    });

    grunt.loadTasks("tasks");
};
