import { Component, EventEmitter,Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    
    <div class="tarjeta">
<div class="titulo">Jugadores</div>
<div class="cuerpo">
<ul class="contenedor-botones">
      @for (jugadores of jugadores; track jugadores.id){
        <button class="boton" (click)="fav(jugadores.nombre)" 
        (click)="fav1(jugadores.level)" 
        (click)="fav2(jugadores.victorias)"
        (click)="imagenUser(jugadores.imagen)"
        >{{jugadores.nombre}}</button><img src="" alt="">
       <br>
      }
    </ul>
</div>
</div>
  `,
  styles: `
  @charset "utf-8";
 
`
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  @Output() addFavoriteEvent1 = new EventEmitter<string>();
  @Output() addFavoriteEvent2 = new EventEmitter<string>();
  @Output() addFavoriteEventImagen = new EventEmitter<string>();
  
  fav(jugadoresName:string){
    this.addFavoriteEvent.emit(jugadoresName);
  }
  fav1(levelJuego:string){
    this.addFavoriteEvent1.emit(levelJuego);
  }
  fav2(victoriasJuego:string){
    this.addFavoriteEvent2.emit(victoriasJuego);
  }
  imagenUser(imagenUser:string){
    this.addFavoriteEventImagen.emit(imagenUser)
  }
  jugadores = [ 
    {
      id:1,
      nombre:'JoeyTA',
      level:'158',
      victorias:'93',
      imagen: 'https://scontent.faqp6-1.fna.fbcdn.net/v/t39.30808-1/314751456_3257680764485754_6305938989372311451_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFtLYg-C8xoXJz-R9L0HsT1MSrcjlsCEW8xKtyOWwIRb2EEYTmERveaeoC2rMD9sU-ilkPVGZxF_IsMWX8EZvbK&_nc_ohc=zumfEc7ABvAAb43Lj0C&_nc_ht=scontent.faqp6-1.fna&oh=00_AfCcxbX8Ha0FD4H4tT4KVGlZiUSqBiSRfnMckIb6IJf90Q&oe=661F2AD6'
    },
    {
      id:2,
      nombre:'Ndreezy',
      level:'174',
      victorias:'120',
      imagen:'https://scontent.faqp6-1.fna.fbcdn.net/v/t39.30808-1/292754178_580065410340831_1325834541739214459_n.jpg?stp=c64.0.200.200a_dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF3xX4BZoOumHn8tZeB5uJLT_HfMPSUgnJP8d8w9JSCcnq1EjPA2PYl_mNHWBRi5EMo9DNTmaxTwZpQJZtE9oF4&_nc_ohc=xwrMC_jelCIAb4pfhRs&_nc_ht=scontent.faqp6-1.fna&oh=00_AfA5qR7w8NsKrAYIfHUAxlzPBaX9FAjf1gffUwJjn8DWqA&oe=661F4CD0'
      

    },
    {
      id:3,
      nombre:'Revolt935',
      level:'91',
      victorias:'45',
      imagen:'https://scontent.faqp6-1.fna.fbcdn.net/v/t1.6435-9/96094912_2713543162200889_5297512550940803072_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG8ZCp4FblaP6pjYrwifaMKFGS4C_u4BO0UZLgL-7gE7XjkRp7mgp8GW4rhzYsB1AOn5uTgVRDoKvzAZMKEeuQM&_nc_ohc=pyoLrkrNXQQAb7OWCjk&_nc_ht=scontent.faqp6-1.fna&oh=00_AfCPPb9OyptUz-RieNHVfZ8uXm3DL--CR1-btsL3SOaHBA&oe=6640D226'

    },
    {
      id:4,
      nombre:'Gwhelyn',
      level:'107',
      victorias:'63',
      imagen:'https://scontent.faqp6-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFj_wWq6NDnXLjMlGuK6Z5gso2H55p0AlGyjYfnmnQCUY_MWpkg5YpzBvODcPRw4Y_7sjOq0hRJem8B5FdqJe3y&_nc_ohc=W68-22KSoz0Ab5Cy9HA&_nc_ht=scontent.faqp6-1.fna&oh=00_AfCpR5RHQ0SOpJ7cm3G_jAq9uxlhPZG2zXMA2t-mxstw8w&oe=6640D878'

    },
    {
      id:5,
      nombre:'Ali_lm',
      level:'204',
      victorias:'25',
      imagen:'https://scontent.faqp6-1.fna.fbcdn.net/v/t1.6435-1/70598748_2401320533525561_2338028935784169472_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGe5DA8oLqptYeOdBDkokP1PeF1W8TRLaY94XVbxNEtpn3r1E_rfh2yb6XfZP5ARzXhU34i0GLcLiWL3UJ7wNfW&_nc_ohc=hZZrgqF67FYAb7UyxDx&_nc_ht=scontent.faqp6-1.fna&oh=00_AfDHvauSQsMrStXBKmFHQ3n7Z6laGKUnXtHKuSjXqU-tsA&oe=6640DACE'
    }
    ,
    {
      id:6,
      nombre:'CarHachi',
      level:'68',
      victorias:'1',
      imagen:'https://scontent.faqp6-1.fna.fbcdn.net/v/t39.30808-1/367377861_3544039935865741_3471833865997547334_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEiZqPcV1zfz3250sHXoCyld1VH_7Gdc5d3VUf_sZ1zlyctymIU6_e9i75efzInxZ7Inccsn6Z2T9ts3qcDg2_w&_nc_ohc=60B7w4XxtxMAb4mWztW&_nc_ht=scontent.faqp6-1.fna&oh=00_AfCTQR3JVNc4voBaVSkXJKormOwF2QF9IslnsxUdh5D8DQ&oe=661F71C1'
    }
    ,
    {
      id:7,
      nombre:'Aka_paaris',
      level:'2000',
      victorias:'1000',
      imagen:'https://scontent.faqp6-1.fna.fbcdn.net/v/t39.30808-1/245355838_3294211144147282_3629900300683492486_n.jpg?stp=c0.0.720.720a_dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF-zRH7IUZMj3uV-APi6wACWgkgJqD2X0laCSAmoPZfSSKNIfV2f0lNx7hYT9ubLUN_iC4bW0lBidM3ErubJg70&_nc_ohc=ghyv8zljCAgAb7dGEvw&_nc_ht=scontent.faqp6-1.fna&oh=00_AfDf1GtkdMmp483KSl9HiOQP9WXFcTL4Js0rIGT069zpzA&oe=661F7011'
    }
    ,
    {
      id:8,
      nombre:'Michel',
      level:'140',
      victorias:'3',
      imagen:'https://scontent.faqp6-1.fna.fbcdn.net/v/t1.18169-9/18275248_1227751587350623_8942116716893821001_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHx0aEkUJe77Bq4LaJLh5M5O9t7tTbuaNY723u1Nu5o1uqaXxk2ZCoB56f2TyqhQZ_HQnZjq-gLZwwIGsHCdjJb&_nc_ohc=00UEweH5l0wAb5dI1wp&_nc_ht=scontent.faqp6-1.fna&oh=00_AfCxWI6KhGj4dG-lm6K8mMdvB7ODHZitjoLZ8mQJsC1kNQ&oe=66416397'
    }
  ]
}
