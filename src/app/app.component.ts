import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {LivrosService} from "./services/livros.service";
import {CabecalhoComponent} from "./cabecalho/cabecalho.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello_world';

  constructor(private router: Router, private livrosService: LivrosService) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
