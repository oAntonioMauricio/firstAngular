import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LivroComponent } from './livro/livro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LivrosComponent } from './livros/livros.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    CabecalhoComponent,
    LivrosComponent,
    NavegacaoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
