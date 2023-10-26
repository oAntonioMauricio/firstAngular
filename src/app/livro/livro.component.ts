import {Component, Input} from '@angular/core';
import {faEye} from '@fortawesome/free-solid-svg-icons';

interface Livro {
  titulo: string,
  autor: string,
  ano_publicacao: number,
  imagem: string
}

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {
  faEye = faEye;

  @Input() nome!: string;
  @Input() autor!: string;
  @Input() ano_publicacao!: number;
  @Input() imagem!: string;

  // livro: Livro;

  constructor() {
    // this.livro = {
    //   titulo: "Memorial do Convento",
    //   autor: "José Saramago",
    //   ano_publicacao: 1982,
    //   imagem: "assets/livraria/capas/12.jpg"
    // }
  }
}
