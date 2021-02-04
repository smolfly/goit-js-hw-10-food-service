
// У вас дублируется код, чтобы избавиться от дублирования кода выносите его в функции 

// Вот эти строки нужно вынести в функцию 
// refs.themeSwitchToggle.removeAttribute('checked');
// refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
// localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));

// // а так же эти 

// refs.themeSwitchToggle.setAttribute('checked', 'true');
// refs.body.classList.add(Theme.DARK);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};


refs.body.classList.add(Theme.LIGHT);
const savedTheme = localStorage.getItem('theme');

if (savedTheme === JSON.stringify(Theme.DARK)) {
 toDarkTheme();
} else {
  toLigthTheme();
}

function toSwitchTheme() {
  if (refs.themeSwitchToggle.getAttribute('checked')) {
    toLigthTheme();
  
 
  } else {
    toDarkTheme();
  
  }
}


function toLigthTheme() {
  refs.themeSwitchToggle.removeAttribute('checked');
  refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
  
  function toDarkTheme() {
  refs.themeSwitchToggle.setAttribute('checked', 'true');
  refs.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  }

refs.themeSwitchToggle.addEventListener('change', toSwitchTheme);




