'use strict';

System.register('clarkwinkelmann/test/components/TestSettingsModal', ['flarum/app', 'flarum/components/SettingsModal'], function (_export, _context) {
    "use strict";

    var app, SettingsModal, settingsPrefix, translationPrefix, TermsSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsSettingsModal) {
            SettingsModal = _flarumComponentsSettingsModal.default;
        }],
        execute: function () {
            settingsPrefix = 'clarkwinkelmann-test.';
            translationPrefix = 'clarkwinkelmann-test.admin.settings.';

            TermsSettingsModal = function (_SettingsModal) {
                babelHelpers.inherits(TermsSettingsModal, _SettingsModal);

                function TermsSettingsModal() {
                    babelHelpers.classCallCheck(this, TermsSettingsModal);
                    return babelHelpers.possibleConstructorReturn(this, (TermsSettingsModal.__proto__ || Object.getPrototypeOf(TermsSettingsModal)).apply(this, arguments));
                }

                babelHelpers.createClass(TermsSettingsModal, [{
                    key: 'title',
                    value: function title() {
                        return app.translator.trans(translationPrefix + 'title');
                    }
                }, {
                    key: 'form',
                    value: function form() {
                        return [m('.Form-group', [m('label', app.translator.trans(translationPrefix + 'field.somefield')), m('input.FormControl', {
                            type: 'text',
                            bidi: this.setting(settingsPrefix + 'somefield')
                        })])];
                    }
                }]);
                return TermsSettingsModal;
            }(SettingsModal);

            _export('default', TermsSettingsModal);
        }
    };
});;
'use strict';

System.register('clarkwinkelmann/test/main', ['flarum/app', 'clarkwinkelmann/test/components/TestSettingsModal'], function (_export, _context) {
    "use strict";

    var app, TestSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_clarkwinkelmannTestComponentsTestSettingsModal) {
            TestSettingsModal = _clarkwinkelmannTestComponentsTestSettingsModal.default;
        }],
        execute: function () {

            app.initializers.add('clarkwinkelmann-test', function (app) {
                app.extensionSettings['clarkwinkelmann-test'] = function () {
                    return app.modal.show(new TestSettingsModal());
                };
            });
        }
    };
});