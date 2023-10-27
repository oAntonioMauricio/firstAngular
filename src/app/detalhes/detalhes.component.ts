import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import detalhes, {DetalheLivro} from "src/data/dados_livraria/detalhes_livros";
import {faBookmark} from '@fortawesome/free-regular-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent {

  id_livro: number;
  DetalheLivro: DetalheLivro;

  // icons
  faBookmark = faBookmark;
  faChevronDown = faChevronDown;

  constructor(private route: ActivatedRoute) {
    this.id_livro = route.snapshot.params['id_livro'];
    this.DetalheLivro = detalhes[this.id_livro];
  }

}
