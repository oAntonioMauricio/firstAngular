import {Component} from '@angular/core';
import livros from "src/data/dados_livraria/livros";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {
  livros = livros;
}
