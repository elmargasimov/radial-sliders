module.exports = function (grunt) {

    // Unified Watch Object
    var watchFiles = {
        clientJs: ['www/scripts/**/{,*/}*.js'],
        clientTests: ['www/scripts/modules/**/tests/*.js'],
        clientSass: ['www/stylesheets/sass/{,*/}*.{scss,sass}']
    };

    grunt.initConfig({
        watch: {
            sass: {
                options: {
                    livereload: false
                },
                files: watchFiles.clientSass,
                tasks: ['sass:dist']
            }
        },
        sass: {
            dist: {
                files: {
                    'www/stylesheets/application.css': 'www/stylesheets/sass/application.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-steroids");
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("dev", [
        "watch"
    ]);

    grunt.registerTask("default", [
        "steroids-make-fresh",
        "sass:dist"
    ]);
};
