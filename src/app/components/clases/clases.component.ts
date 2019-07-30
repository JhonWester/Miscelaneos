import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  template: `
  <div [ngClass]="alerta" role="alert">
    A simple warning alert—check it out!
  </div>

  <button class="btn btn-info" (click)="alerta='alert alert-info'">Info</button>
  <button class="btn btn-success" (click)="alerta='alert alert-success'">Success</button>
  <br>
  <br>
  <h3 [ngClass]="{ 'text-danger': propiedades.danger, 'text-info': !propiedades.danger}">Hola mundo</h3>
  <button (click)="propiedades.danger = !propiedades.danger" [ngClass]="{'btn-danger': propiedades.danger, 'btn-info': !propiedades.danger}">
    Cambiar
  </button>
  <br>
  <br>
  <h3>Proceso Asincrono</h3>
  <button type="button" class="btn btn-primary" (click)="ejecutar()" [disabled]="loading">
    <i [ngClass]="{'fa-refresh fa-spin': loading, 'fa-save': !loading}" class="fa"></i>
    <span *ngIf="!loading">Guardar Cambios</span>
    <span *ngIf="loading">Espere por favor</span>
  </button>
  <p *ngIf="bandera">Se han guardado los Cambios</p>
  `,
  styles: []
})
export class ClasesComponent implements OnInit {
  
  alerta : string = "alert alert-danger";
  propiedades: object = {
    danger: false
  };
  loading= false;
  bandera:boolean;

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading = true;
    this.bandera = false;
    setTimeout(()=> {
      this.loading = false;
      this.bandera = true
    },3000);
  }

}
