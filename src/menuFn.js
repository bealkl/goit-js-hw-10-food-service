const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const storageItemName = "goit-js-hw-10-food-service-theme";

import menu from './menu.json';
import ListItemsTamplate from './menu.hbs';

export default function MenuFn(selector) {
  selector.insertAdjacentHTML('beforeend', ListItemsTamplate(menu));
  const switcher = document.querySelector('input.js-switch-input');
  console.log(switcher);
  valueFromLocalStorage(switcher);
  switcher.addEventListener('change', themeChangeFn);
}

function valueFromLocalStorage(switcher) {
  const savedLocalStorageTheme = localStorage.getItem(storageItemName);

  if (savedLocalStorageTheme) {
    body.classList.add(savedLocalStorageTheme);
    if (savedLocalStorageTheme === Theme.DARK) switcher.checked = true;
    else switcher.checked = false;
  }
}

function themeChangeFn(e) {
  if (body.hasAttribute("class")) body.removeAttribute("class");
  if (e.target.checked) {
    switchAndSaveTheme(Theme.DARK);
  } else {
    switchAndSaveTheme(Theme.LIGHT);
  }
}

function switchAndSaveTheme(setValue) {
  body.classList.add(setValue);
  localStorage.setItem(storageItemName, setValue);
}
