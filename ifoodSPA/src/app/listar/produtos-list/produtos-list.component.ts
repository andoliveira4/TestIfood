import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/_models/produto';
import { ProdutosService } from 'src/app/_services/produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent implements OnInit {
  produtos: Produto[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.CarregaProdutos();
  }

  CarregaProdutos() {
    this.produtosService.ListaProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
      }, error => {
      //console.log(error);
    });
  }

}
