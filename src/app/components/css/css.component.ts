import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>

    <p>Parrafo en el mismo componente</p>
  `,
  styles: [`
    p {
      color: red;
      font-size: 20px;
    }
    
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
