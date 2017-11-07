module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: ["scripts/*.js"],
                tasks: ["eslint","browserify"],
                options: {
                    spawn: false,
                },
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "build",
                    src: "bundle.js",
                    dest: "build",
                    ext: ".min.js"
                }]
            },
        },
        browserify: {
            dist: {
                files: {
                    "build/bundle.js": "scripts/*.js"
                }
            }},
        eslint: {
            src: ["scripts/*js"]
        }
    })
    
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-uglify")
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("gruntify-eslint")
    grunt.loadNpmTasks("grunt-browserify")
       
        
        
        
    
    // Default task(s).
    grunt.registerTask("default", ["eslint", "browserify", "watch"])
    
}