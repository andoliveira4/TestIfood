import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CriarComponent } from './criar/criar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { ProdutosListComponent } from './listar/produtos-list/produtos-list.component';
import { ProdutosDetalheComponent } from './listar/produtos-detalhe/produtos-detalhe.component';
import { ProdutosCardComponent } from './listar/produtos-card/produtos-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CriarComponent,
    AlterarComponent,
    ExcluirComponent,
    ProdutosListComponent,
    ProdutosDetalheComponent,
    ProdutosCardComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
