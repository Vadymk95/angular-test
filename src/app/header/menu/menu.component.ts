import { Component, Input, OnInit } from '@angular/core';
interface MyObj {
  name: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {

  @Input() user: MyObj | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
