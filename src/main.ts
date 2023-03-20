import App from './App.svelte';
import { initialLanguage } from './core/lang';
import './styles/app.scss';

initialLanguage();

const app = new App({
    target: document.getElementById('app'),
});

export default app;
