import storage from './storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeTogglerRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

setStartingTheme();
themeTogglerRef.addEventListener('change', onThemeTogglerChange);

function onThemeTogglerChange() {
	bodyRef.classList.toggle('light-theme');
	bodyRef.classList.toggle('dark-theme');

	storage.save('theme', bodyRef.classList.contains(Theme.LIGHT) ? Theme.LIGHT : Theme.DARK)
};

function setStartingTheme() {
	const currentTheme = storage.load('theme');

  if (currentTheme === Theme.DARK) {
	  bodyRef.classList.add(Theme.DARK);
		themeTogglerRef.checked = true;		
		return;
	};
	bodyRef.classList.add(Theme.LIGHT);
};
