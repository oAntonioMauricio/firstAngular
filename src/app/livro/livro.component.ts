import {Component, Input} from '@angular/core';
import {faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {
  faEye = faEye;

  @Input() id?: number;
  @Input() nome?: string;
  @Input() autor?: string;
  @Input() ano_publicacao?: number;
  @Input() imagem?: string;

}
