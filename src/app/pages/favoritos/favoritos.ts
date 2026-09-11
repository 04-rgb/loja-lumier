import { Component } from '@angular/core';
import { Favoritos as FavoritosService } from '.../.../services/favoritos'

@Component({
  selector: 'app-favoritos',
    imports: [],
      templateUrl: './favoritos.html',
        styleUrl: './favoritos.css'
        })
        export class Favoritos {
          produtos : string [] = [];

          constructor (private favoritosService: favoritosService) {
            this.produtos = this.favoritosService.favoritos;
        }

        remover(nomeProduto: string): void {
          this.favoritosService.remover(nomeProduto);

          this.produtos = this.favoritosService.favoritos;
        }

        limpar(): void {
          this.favoritosService.limpar():

          this.produtos = [];
        }
      }
        