import { Component } from '@angular/core';
import { AlarmaComponent } from './alarma/alarma.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  hActual: number;
  mActual: number;
  sActual: number;

  constructor() {
    this.localTime();
    setInterval(() => this.tick(), 1000)
  }
  
  localTime(): void{
    var d = new Date();
    this.hActual = d.getHours();
    this.mActual = d.getMinutes();
    this.sActual = d.getSeconds();
  }
  private tick(): void{
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
