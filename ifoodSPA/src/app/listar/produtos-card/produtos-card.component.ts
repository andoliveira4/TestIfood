import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/_models/produto';

@Component({
  selector: 'app-produtos-card',
  templateUrl: './produtos-card.component.html',
  styleUrls: ['./produtos-card.component.scss']
})
export class ProdutosCardComponent implements OnInit {
  @Input() produto: Produto;

  constructor() {

    
   }

  ngOnInit() {
    console.log(this.produto);
  }

}
