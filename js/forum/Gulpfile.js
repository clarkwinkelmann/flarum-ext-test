const gulp = require('flarum-gulp');

gulp({
    modules: {
        'clarkwinkelmann/test': [
            'src/**/*.js',
        ],
    },
});
