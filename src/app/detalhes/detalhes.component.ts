import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import detalhes, {DetalheLivro} from "src/data/dados_livraria/detalhes_livros";
import {faBookmark} from '@fortawesome/free-regular-svg-icons';
import {faChevronDown, faBookmark as faBookmarkSolid} from '@fortawesome/free-solid-svg-icons';

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
    DetalheLivro: DetalheLivro;
    iconToUse = faBookmark;

    constructor(private route: ActivatedRoute) {
        this.id_livro = route.snapshot.params['id_livro'];
        this.DetalheLivro = detalhes[this.id_livro];
    }

    // methods
    changeIcon = () => {
        this.iconToUse === this.faBookmark ? this.iconToUse = this.faBookmarkSolid : this.iconToUse = this.faBookmark;
    }

}
