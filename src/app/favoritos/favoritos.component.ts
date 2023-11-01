import {Component, Input} from '@angular/core';
import {Livro} from "../../data/dados_livraria/livros";
import {LivrosService} from "../services/livros.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent {

  favoritos: Livro[] = [];

  @Input() imagem?: string;

  constructor(private livrosService: LivrosService) {

  }

  ngOnInit(): void {
    this.livrosService.getFavBooks().subscribe((favs) => {

      this.favoritos = favs;
      console.log({"livros da API depois do filtro de favs": favs})
    })
  }

}
