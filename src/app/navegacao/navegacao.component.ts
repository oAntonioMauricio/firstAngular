import {Component} from '@angular/core';
import {faBookOpen, faPenNib, faBookmark, faList} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

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

  active(route: string): boolean {
    return this.router.url.includes(route);
  }

  constructor(private router: Router) { }
}
