import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alarma',
    templateUrl: './alarma.component.html'
})
export class AlarmaComponent {
    // Se declaran las horas, minutos y segundos a calcular
    horas: number = 0; minutos: number = 0; segundos: number = 0;
    // Se declaran las horas, minutos y segundos actuales
    hActual: number = 0; mActual: number = 0; sActual: number = 0;
    button: string='Comenzar';
    constructor() {
        this.resetTimer();
        this.localTime();
        setInterval(() => this.tick(), 1000)
    }

    localTime(): void{
        var d = new Date();
        this.hActual = d.getHours();
        this.mActual = d.getMinutes();
        this.sActual = d.getSeconds();
    }
    
    private resetTimer (): void{
        // ResetTimer sirve para reiniciar el marcador según figuren los valores abajo
        this.horas = 23;
        this.minutos = 59;
        this.segundos = 59;
    }

    private tick(): void{
        // Resta el tiempo, NO TOCAR.
        if (--this.segundos < 0){
            this.segundos = 59;
            if (--this.minutos < 0){
                this.minutos = 59;
                if (--this.horas < 0){
                    this.horas = 23;
                }
            }
        }
        // Suma el tiempo, NO TOCAR.
        if (++this.sActual > 59){
            this.sActual = 0;
            if (++this.mActual > 59){
                this.mActual = 0;
                if (++this.hActual > 23){
                    this.hActual = 0;
                }
            }
        }
    }
}