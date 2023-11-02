import {Component, OnInit} from '@angular/core';
import {Livro} from "src/data/dados_livraria/livros";
import {LivrosService} from "../services/livros.service";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  livros: Livro[] = [];

  constructor(private livrosService: LivrosService) {

  }

  ngOnInit(): void {

    // all the books
    this.livrosService.getLivros().subscribe((livros) => {
      console.log({"livros da API": livros})
      this.livros = livros;
    })

    // search books
    this.livrosService.searchInput.subscribe(newSearch => {
      console.log({"search": newSearch})
      this.livrosService.getLivrosSearch(newSearch).subscribe((livros) => {
        console.log({"livros com search": livros})
        this.livros = livros;
      })
    })

  }

}
