import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alarma',
    templateUrl: './alarma.component.html'
})
export class AlarmaComponent {
    horas: number;
    minutos: number = 24;
    segundos: number = 59;

    constructor() {
        this.horas = 3;
        this.minutos = 24;
        this.segundos = 59;
    }

    ngOnInit (){
    }
    
}