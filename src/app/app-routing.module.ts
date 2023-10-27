import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LivrosComponent} from "./livros/livros.component";
import {DetalhesComponent} from "./detalhes/detalhes.component";
import {AutoresComponent} from "./autores/autores.component";
import {VendasComponent} from "./vendas/vendas.component";
import {FavoritosComponent} from "./favoritos/favoritos.component";

const routes: Routes = [
  {path: "", redirectTo: "/livros", pathMatch: "full"},
  {path: "livros", component: LivrosComponent},
  {path: "detalhes/:id_livro", component: DetalhesComponent},
  {path: "autores", component: AutoresComponent},
  {path: "vendas", component: VendasComponent},
  {path: "favoritos", component: FavoritosComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
