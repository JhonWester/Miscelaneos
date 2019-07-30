import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es mi etiqueta
    </p>

    <button *ngIf="tamano < 50" class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button *ngIf="tamano >= 5" class="btn btn-danger" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano: number = 17;
  constructor() { }

  ngOnInit() {
  }

}
