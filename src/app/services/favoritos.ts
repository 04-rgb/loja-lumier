import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  })
  export class Favoritos {

    favoritos: any[] = [];

    constructor() {

      const salvos = 
      locaStorage.getItem('favoritos');

      if (salvos) {
        this.favoritos = 
        JSON.parse(salvos); 
      }
    }

    adicionar(produto:any) {
      this.favoritos.push(produtos);

      this.salvar();
    }
    verificar(id:number): boolean {

      for (let produtos of this.favoritos) {
        if (produto.id === id) {

          return true;
        }
      }
      return false; 
    }

    private salvar() {
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    }
  }

