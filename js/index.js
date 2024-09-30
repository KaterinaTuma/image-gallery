import { App } from './app/index.js';

const $root = document.querySelector('#root');

const currentTheme = localStorage.getItem('currentTheme') ?? 'dark';
localStorage.setItem('currentTheme', currentTheme);

if ($root) {
  $root.classList.add(currentTheme);
  $root.innerHTML = App();
};
