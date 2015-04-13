# chotto

> Checks for the existence of files and halts the Grunt build if they don't exist.

## Getting Started
This plugin requires Grunt `~0.4.5`

### Installation
```shell
npm i chotto -SD
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("chotto");
```

## The "chotto" task

### Overview
In your project's Gruntfile, add a section named `chotto` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  chotto: {
    your_target: {
      // A target-specific file path array will go here.
    },
  },
});
```

### Usage Examples

Pass an array of file paths into chotto's *filePaths* property.

```js
grunt.initConfig({
  chotto: {
    your_target: {
      filePaths: ["some-file.js", "some-other-file.html"]
    },
  },
});
```

Then run the Grunt task, at which point *chotto* will warn you if there are missing files before halting the build:

```shell
grunt chotto:your_target
```