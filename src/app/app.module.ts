import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LivroComponent} from './livro/livro.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {LivrosComponent} from './livros/livros.component';
import {NavegacaoComponent} from './navegacao/navegacao.component';
import {DetalhesComponent} from './detalhes/detalhes.component';
import {AutoresComponent} from './autores/autores.component';
import {VendasComponent} from './vendas/vendas.component';
import {FavoritosComponent} from './favoritos/favoritos.component';
import {AppRoutingModule} from './app-routing.module';

import pt from '@angular/common/locales/pt';
import {registerLocaleData} from "@angular/common";
import {MultiplyerPipe} from './pipes/multiplyer.pipe';
import {CapMoreThan4Pipe} from './pipes/cap-more-than4.pipe';
import {HttpClientModule} from "@angular/common/http";

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    CabecalhoComponent,
    LivrosComponent,
    NavegacaoComponent,
    DetalhesComponent,
    AutoresComponent,
    VendasComponent,
    FavoritosComponent,
    MultiplyerPipe,
    CapMoreThan4Pipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
