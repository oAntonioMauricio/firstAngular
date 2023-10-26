import {Component} from '@angular/core';
import {faBookOpen, faPenNib, faBookmark, faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  faBookOpen = faBookOpen;
  faPenNib = faPenNib;
  faBookmark = faBookmark;
  faList = faList;

  active = true;

  helloWorld() {
    console.log("teste")
  }
}
