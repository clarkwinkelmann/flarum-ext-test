'use strict';

System.register('clarkwinkelmann/test/main', ['flarum/extend', 'flarum/app'], function (_export, _context) {
    "use strict";

    var extend, app;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }],
        execute: function () {

            app.initializers.add('clarkwinkelmann-test', function () {
                console.log('forum');
            });
        }
    };
});