import { Component } from '@angular/core';
import { Carrinho } from '../../services/carrinho';
import { Favoritos } from '../../services/favoritos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.css']
})
export class ProdutosComponent {
  quantidadeCarrinho: number = 0;

  constructor (private favoritos: Favoritos) {}

  adicionarAoCarrinho(nomeProduto: string) {
    this.quantidadeCarrinho++;
    alert(`${nomeProduto} foi adicionado ao carrinho!`);
  }

  adicionarAosFavoritos(nomeProduto: string) {
    this.favoritos.adicionar(nomeProduto);
    alert(`${nomeProduto} foi adicionado aos favoritos!`)
  }
};