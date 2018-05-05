import app from 'flarum/app';
import TestSettingsModal from 'clarkwinkelmann/test/components/TestSettingsModal';

app.initializers.add('clarkwinkelmann-test', app => {
    app.extensionSettings['clarkwinkelmann-test'] = () => app.modal.show(new TestSettingsModal());
});
