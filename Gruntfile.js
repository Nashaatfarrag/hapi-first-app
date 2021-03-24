const sass = require('node-sass');


module.exports = function (grunt) {
    // require('load-grunt-tasks')(grunt);


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                esversion: 6, // this option to ignore const error with js hint 
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
            },
            all: ['Gruntfile.js']
        },
        watch: {
            // options: {
            //     livereload: true
            // },
            sass: {
                files: '**/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                }
            },
            js: {
                files: ['**/*.js', '**/*.hbs'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
        },
        // uglify: {
        //     options: {
        //         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //     },
        //     build: {
        //         src: 'src/<%= pkg.name %>.js',
        //         dest: 'build/<%= pkg.name %>.min.js'
        //     }
        // },

        // shell: {
        //     connect: {
        //         command: 'node index.js'
        //     }
        // },
        nodemon: {
            dev: {
                script: 'index.js'
            },
            env: {
                PORT: '8181'
            },
            // cwd: __dirname,
            // ignore: ['node_modules/**'],
            // ext: 'js,coffee',
            // watch: ['server'],
            // delay: 1000,
            // legacyWatch: true
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'public/css/main.css': 'public/css/scss/styles.scss'
                }
            }

        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');

    // Default task(s).
    grunt.registerTask('default', ['sass', "jshint", "watch"]);
    // grunt.registerTask('dev', ["watch"]);

};