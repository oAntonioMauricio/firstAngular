import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetalheLivro} from "src/data/dados_livraria/detalhes_livros";
import {faBookmark} from '@fortawesome/free-regular-svg-icons';
import {faChevronDown, faBookmark as faBookmarkSolid} from '@fortawesome/free-solid-svg-icons';
import {LivrosService} from "../services/livros.service";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent {

  // icons
  faBookmark = faBookmark;
  faBookmarkSolid = faBookmarkSolid;
  faChevronDown = faChevronDown;

  // attributes
  id_livro: number;
  detalheLivro?: DetalheLivro | null;

  constructor(private route: ActivatedRoute, private livrosService: LivrosService) {
    this.id_livro = route.snapshot.params['id_livro'];
    this.detalheLivro = undefined;
  }

  ngOnInit() {
    this.livrosService.getDetalheLivro(this.id_livro).subscribe(
      (detalheLivro) => {
        this.detalheLivro = detalheLivro;
      },
      (error) => {
        console.log(error)
        this.detalheLivro = null;
      }
    )
  }

  // methods
  toogleFav() {
    // change state
    this.livrosService.toogleFav(this.id_livro);

    console.log("changed!");
  }

  checkIfFav() {
    return this.livrosService.checkIfFav(this.id_livro);
  }

}
