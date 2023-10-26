import {Component} from '@angular/core';
import {faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {
  faEye = faEye;
}
