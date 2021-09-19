import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggle: boolean = true;
  title: string = 'Angular app';

  cards: Card[] = [
    {
      title: 'My favourite title CARD-1!',
      text: 'some special text for my card',
    },
    {
      title: 'My favourite title CARD-2!',
      text: 'some special text for my card',
    },
    {
      title: 'My favourite title CARD-3!',
      text: 'some special text for my card',
    },
    {
      title: 'My favourite title CARD-3!',
      text: 'some special text for my card',
    },
    {
      title: 'My favourite title CARD-3!',
      text: 'some special text for my card',
    },
  ];

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
