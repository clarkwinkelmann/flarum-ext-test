import {extend} from 'flarum/extend';
import app from 'flarum/app';

app.initializers.add('clarkwinkelmann-test', () => {
    console.log('forum');
});
