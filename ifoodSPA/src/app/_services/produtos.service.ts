import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../_models/produto';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  apiCoreUrl = environment.apiCoreUrl;
  resultado: Produto[];

  constructor(private http: HttpClient) { }

  ListaProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiCoreUrl + 'listaprodutos');
  }

  CriaProduto(produto: Produto): Observable<boolean> {
    return this.http.post<boolean>(this.apiCoreUrl + 'criaproduto', produto);
  }

  CarregaProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.apiCoreUrl + 'consultaproduto?id=' + id);
  }

  AlteraProduto(produto: Produto): Observable<boolean> {
    return this.http.post<boolean>(this.apiCoreUrl + 'alteraproduto', produto);
  }

  RemoveProduto(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.apiCoreUrl + 'removeproduto?id=' + id);
  }
}


