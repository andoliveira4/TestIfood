import {Routes} from '@angular/router';
import { AlterarComponent } from './alterar/alterar.component';
import { CriarComponent } from './criar/criar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { HomeComponent } from './home/home.component';
import { ProdutosDetalheComponent } from './listar/produtos-detalhe/produtos-detalhe.component';
import { ProdutosListComponent } from './listar/produtos-list/produtos-list.component';



export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'listar', component: ProdutosListComponent },
    {path:  'alterar/:id', component: ProdutosDetalheComponent},
    { path: 'criar', component: CriarComponent },
    { path: 'excluir/:id', component: ExcluirComponent},
    { path: 'alterar/:id', component: AlterarComponent},
  ];

