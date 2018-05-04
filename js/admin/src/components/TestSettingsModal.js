import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';

const settingsPrefix = 'clarkwinkelmann-test.';
const translationPrefix = 'clarkwinkelmann-test.admin.settings.';

export default class TermsSettingsModal extends SettingsModal {
    title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    form() {
        return [
            m('.Form-group', [
                m('label', app.translator.trans(translationPrefix + 'field.somefield')),
                m('input.FormControl', {
                    type: 'text',
                    bidi: this.setting(settingsPrefix + 'somefield'),
                }),
            ]),
        ];
    }
}
