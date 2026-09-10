import { Component } from '@angular/core';
import { Carrinho } from '../../services/carrinho';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.css']
})
export class ProdutosComponent {
  quantidadeCarrinho: number = 0;

  adicionarAoCarrinho(nomeProduto: string) {
    this.quantidadeCarrinho++;
    alert(`${nomeProduto} foi adicionado ao carrinho!`);
  }
};