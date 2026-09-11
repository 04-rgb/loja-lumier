import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  })
  export class Favoritos {

    favoritos: string[] = [];

    constructor() {
      const favoritosSalvos = localStorage.getItem('favoritos');

      if (favoritosSalvos) {
        this.favoritos = JSON.parse (favoritosSalvos);
      }
    }
    adicionar(nomeProduto: string): void {

      if (! this.favoritos.includes(nomeProduto)) {
       
        this.favoritos.push(nomeProduto); 
        localStorage.setItem('favoritos', JSON.stringify(this.favoritos) 
      );

      }
    }

    remover(nomeProduto: string): void {
      this.favoritos = this.favoritos.filter(
        (produto => produto !=== nomeProduto  );

        localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
      )
    }

    limpar(): void {
      this.favoritos = [];

      localStorage.removeItem('favoritos')
    }

            }

