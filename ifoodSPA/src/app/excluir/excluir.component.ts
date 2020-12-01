import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../_services/produtos.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  constructor(protected produtosService: ProdutosService, protected route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.Excluir();
  }

  Excluir() {

    this.produtosService.RemoveProduto(this.route.snapshot.params['id']).subscribe( (retorno: boolean) => {
      if(retorno) {
        this.router.navigate(['/listar']);
      } else {
        alert('Houve um problema durante a exclusão!')
      }
    }, error => {
      alert('Houve um problema na gravacao do produto');
      console.log(error);
    });

  }

}
