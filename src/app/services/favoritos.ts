import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  })
  export class Favoritos {

    favoritos: string[] = [];

      adicionar(nomeProduto: string) {
          this.favoritos.push(nomeProduto);
            }

            }

