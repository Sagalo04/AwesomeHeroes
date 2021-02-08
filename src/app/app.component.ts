import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'awesome-heroes';

  superman = {
    src: 'super.jpg',
    name: 'Superman',
  };

  thor = {
    src: 'thor.jpg',
    name: 'Thor',
  };

  batman = {
    src: 'batman.jpg',
    name: 'Batman',
  };

  spiderman = {
    src: 'spiderman.jpg',
    name: 'Spiderman',
  };

  heroes = [this.superman, this.thor, this.batman, this.spiderman];
}
