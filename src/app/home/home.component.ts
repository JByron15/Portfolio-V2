import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'darktoggle';

  darkmode = false;
  constructor() {
    this.detectColorScheme();
  }

  detectColorScheme() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.darkmode = true;

      document.documentElement.setAttribute(
        'data-theme',
        this.darkmode ? 'dark' : 'light'
      );
    }
  }

  toggleTheme() {
    this.darkmode = !this.darkmode;
    document.documentElement.setAttribute(
      'data-theme',
      this.darkmode ? 'dark' : 'light'
    );
  }
}
