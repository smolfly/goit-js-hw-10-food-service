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
    refs.themeSwitchToggle.setAttribute('checked', 'true');
    refs.body.classList.add(Theme.DARK);
  } else {
    refs.themeSwitchToggle.removeAttribute('checked');
    refs.body.classList.add(Theme.LIGHT);
  }
  
  function toSwitchTheme() {
    if (refs.themeSwitchToggle.getAttribute('checked')) {
      refs.themeSwitchToggle.removeAttribute('checked');
      refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
      localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
    } else {
      refs.themeSwitchToggle.getAttribute('checked', 'true');
      refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
      localStorage.setItem('theme', JSON.stringify(Theme.DARK));
    }
  }
  
  refs.themeSwitchToggle.addEventListener('change', toSwitchTheme);


