import {Component, Input} from '@angular/core';
import favoritos from "src/data/dados_livraria/favoritos";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent {

  favoritos = favoritos;

  @Input() imagem?: string;
}
