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
  }

