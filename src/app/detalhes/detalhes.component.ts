import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent {

  @Input() id_livro: number;

  constructor(private route: ActivatedRoute) {
    this.id_livro = route.snapshot.params['id_livro'];
  }
}
