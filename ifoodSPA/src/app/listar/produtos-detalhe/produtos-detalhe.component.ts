import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/_models/produto';
import { ProdutosService } from 'src/app/_services/produtos.service';

@Component({
  selector: 'app-produtos-detalhe',
  templateUrl: './produtos-detalhe.component.html',
  styleUrls: ['./produtos-detalhe.component.scss']
})
export class ProdutosDetalheComponent implements OnInit {
  produto: any = {};

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.CarregaProduto();
  }

  CarregaProduto() {
    this.produtosService.CarregaProduto(+this.route.snapshot.params['id']).subscribe((produto: Produto) => {
      this.produto = produto;
      console.log(produto);
    }, error =>
    {
      alert('Houve um problema no carregamento do produto');
      console.log(error);
    });
  }

  AlteraProduto() {

    
    this.produtosService.AlteraProduto(this.produto).subscribe((obj: any) => {
      
      console.log(obj);
    }, error =>
    {
      alert('Houve um problema no carregamento do produto');
      console.log(error);
    });
    
  }

}
