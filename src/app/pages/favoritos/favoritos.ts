import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
    imports: [],
      templateUrl: './favoritos.html',
        styleUrl: './favoritos.css'
        })
        export class Favoritos {
          produtos : string [] = [];

          constructor (private favoritos: favoritos) {
            this.produtos = this.favoritos.favoritos;
        }
      }
        