import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AlarmaComponent } from './alarma/alarma.component';
import { CronoComponent } from './cronometro/crono.component';
import { TempoComponent } from './temporizador/tempo.component';

@NgModule({
  declarations: [
    AppComponent,
    AlarmaComponent,
    CronoComponent,
    TempoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'alarma', component: AlarmaComponent },
      { path: 'cronometro', component: CronoComponent },
      { path: 'temporizador', component: TempoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
