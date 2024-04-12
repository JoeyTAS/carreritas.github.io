import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule,GamesComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  username =  'JoeyTAS';
  isLogin = false;
  favJugador = '';
  favLevel = '';
  favVictorias = 0;
  imagenUrl = ''

  getFavorite(jugadoresName:string){
    this.favJugador = jugadoresName;
  }
  getLevel(levelJuego:string){
    this.favLevel = levelJuego;
  }
  getVictorias(victoriasJuego:string){
    this.favVictorias = parseInt(victoriasJuego);
  }

  getImgen(imagenUser:string){
    this.imagenUrl = imagenUser;

  }
  greet(){

    alert("Hola")
  }

}
