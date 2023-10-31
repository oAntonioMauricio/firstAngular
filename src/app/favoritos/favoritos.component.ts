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

  // ngOnInit(): void {
  //   this.livrosService.getLivros().subscribe((livros) => {
  //
  //     this.favoritos = livros.filter(livro => this.livrosService.checkIfFav(livro.id));
  //     console.log({"favoritos depois do filtro": this.favoritos})
  //
  //     this.livrosService.getFavBooks();
  //   })
  // }

  ngOnInit(): void {
    this.livrosService.getFavBooks().subscribe((favs) => {

      this.favoritos = favs;
      console.log({"favoritos depois do filtro": favs})
    })
  }

}
