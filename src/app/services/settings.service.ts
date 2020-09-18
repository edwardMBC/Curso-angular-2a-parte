import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linktheme = document.querySelector('#theme');

  constructor() { 
    var url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linktheme.setAttribute('href', url);

  }
  changetheme(theme:string) {
    const url = `./assets/css/colors/${ theme }.css`;

    this.linktheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();

  }
  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');

    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeurl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linktheme.getAttribute('href');

      if (btnThemeurl === currentTheme) {
        elem.classList.add('working');
      } else {
        
      }
    })
  }
}
