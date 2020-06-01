let env = {
    style: {
        watch:["./src/scss/**/*.scss"],
        src: ["./src/scss/**/*.scss"],
        path: './public/',
    },
    template:{
        watch:["./src/views/**/*.pug"],
        src: ['./src/views/**/*.pug','!./src/views/**/_*.pug'],
        path: './public/',
    }
}

exports.env = env;