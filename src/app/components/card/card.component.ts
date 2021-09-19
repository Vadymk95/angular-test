import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() card!: Card;

  textColor: string = 'yellow';

  ngOnInit(): void {}
  title: string = 'My Card';
  text: string = 'My sample text';

  changeTitle() {
    this.title = 'New changed title';
  }

  inputHandler(value: string) {
    this.title = value;
  }
}
