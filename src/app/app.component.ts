import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule}  from "@angular/common";
import { UsuariosComponent } from './usuarios/usuarios.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,UsuariosComponent],
  templateUrl: './app.component.html',
  //template: '<h1>Hola como estas, {{name.toUpperCase()}}?</h1> <app-usuarios/>',
  //styleUrl: './app.component.css'
  styles: '',
})
export class AppComponent {
  title = 'carreras-gtav-tas';
  name = 'Joel'
}
