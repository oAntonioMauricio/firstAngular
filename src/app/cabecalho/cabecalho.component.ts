import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {

  showSearch = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      // Update 'showSearch' based on the current path
      this.showSearch = this.router.url === '/livros';
    });
  }

}
