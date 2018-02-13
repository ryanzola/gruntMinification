# gruntMinification

### Install the Grunt CLI
```
npm i -g grunt-cli
```

This will put the grunt command in your system path, allowing it to be run from any directory.

**Note** that installing grunt-cli does not install the Grunt task runner! The job of the Grunt CLI is simple: run the version of Grunt which has been installed next to a `Gruntfile`. This allows multiple versions of Grunt to be installed on the same machine simultaneously.

### Prepare a New Grunt Project
A typical setup will involve adding two files to your project: `package.json` and the `Gruntfile.js`.

#### package.json
The `package.json` file belongs in the root directory of your project, next to the `Gruntfile`, and should be committed with your project source. Running npm install in the same folder as a `package.json` file will install the correct version of each dependency listed therein.

There are a few ways to create a `package.json` file for your project:

Most **grunt-init** templates will automatically create a project-specific package.json file.
The npm init command will create a basic package.json file.
Start with the example below, and expand as needed, following this specification.
``` javascript
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "^1.0.2",
    "grunt-contrib-cssmin": "^2.2.1",
    "grunt-contrib-htmlmin": "^2.4.0",
    "grunt-contrib-uglify": "^3.3.0"
  }
}
```

### Gruntfile.js
The `Gruntfile.js` file is a valid JavaScript file that belongs in the root directory of your project, next to the `package.json` file, and should be committed with your project source.

A `Gruntfile` is comprised of the following parts:

* The "wrapper" function
* Project and task configuration
* Loading Grunt plugins and tasks
* Custom tasks

#### An Example Gruntfile
In the following Gruntfile, project metadata is imported into the Grunt config from the project's package.json file and the grunt-contrib-uglify plugin's uglify task is configured to minify a source file and generate a banner comment dynamically using that metadata. When grunt is run on the command line, the uglify task will be run by default.
``` javascript
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```

### Run all tasks with the `grunt` command

### Project Dependencies
#### [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

Run this task with the `grunt htmlmin` command.

**Example Config**
``` javascript
grunt.initConfig({
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'src/index.html',     // 'destination': 'source'
        'dist/contact.html': 'src/contact.html'
      }
    },
    dev: {                                       // Another target
      files: {
        'dist/index.html': 'src/index.html',
        'dist/contact.html': 'src/contact.html'
      }
    }
  }
});

grunt.registerTask('default', ['htmlmin']);
```

**[HTML Minifier Options Quick Reference](https://github.com/kangax/html-minifier#options-quick-reference)**

#### [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)

Run this task with the `grunt cssmin` command.

**Example Config**
**Combine two files into one output file**
``` javascript
cssmin: {
  options: {
    mergeIntoShorthands: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'output.css': ['foo.css', 'bar.css']
    }
  }
}
```

**Minify all contents of a release directory and add a .min.css extension**
``` javascript
cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'release/css',
      src: ['*.css', '!*.min.css'],
      dest: 'release/css',
      ext: '.min.css'
    }]
  }
}
```

#### [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)

Run this task with the `grunt uglify` command.

**Example Config**
**Basic Compression**
``` javascript
grunt.initConfig({
  uglify: {
    my_target: {
      files: {
        'dest/output.min.js': ['src/input1.js', 'src/input2.js']
      }
    }
  }
});
```

**No mangling**

Specify `mangle: false` to prevent changes to your variable and function names.
``` javascript
grunt.initConfig({
  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'dest/output.min.js': ['src/input.js']
      }
    }
  }
});
```

# V minified. V speed.