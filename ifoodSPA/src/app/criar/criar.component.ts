import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../_services/produtos.service';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent implements OnInit {
  produto: any = {};

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {}

  CriaProduto() {
    this.produtosService.CriaProduto(this.produto).subscribe((retorno: boolean) => {
      console.log(retorno);
      if (retorno) {
        this.router.navigate(['/listar']);
      } else {
        alert('Houve um problema na gravacao do produto');
      }
    }, error => {
      alert('Houve um problema na gravacao do produto');
      console.log(error);
    });
  }
}