import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Livro} from "../../data/dados_livraria/livros";
import {Autor} from "../../data/dados_livraria/autores";
import {Venda} from "../../data/dados_livraria/vendas";
import {DetalheLivro} from "../../data/dados_livraria/detalhes_livros";
import {BehaviorSubject} from "rxjs";

const BASE_URL = "https://livrariaupskill.store";

@Injectable({
  providedIn: "root"
})

export class LivrosService {

  constructor(private http: HttpClient) {
    // deal with local storage
    let bookmarksItem = localStorage.getItem("bookmarks");

    // check if it's non-existent
    if (!bookmarksItem) {
      localStorage.setItem("bookmarks", "{}");
      bookmarksItem = "{}";
    }

    this.bookmarks = JSON.parse(bookmarksItem);
  }

  // attributes
  bookmarks: { [key: number]: boolean } = {};

  // methods
  getLivros(filtro = "", pagina = 0) {
    return this.http.get<Livro[]>(BASE_URL + "/livros", {
      params: {
        filtro,
        pagina
      }
    });
  }

  getDetalheLivro(id_livro: number) {
    return this.http.get<DetalheLivro>(BASE_URL + `/livros/${id_livro}`);
  }

  toogleFav(id_livro: number): void {
    // change
    this.bookmarks[id_livro] = !this.bookmarks[id_livro];

    // send to local storage
    localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));

    console.log(this.bookmarks)
    console.log(localStorage.getItem("bookmarks"))
  }

  checkIfFav(id_livro: number): boolean {
    return this.bookmarks[id_livro];
  }

  getFavBooks() {
    let favString = "";

    for (const book in this.bookmarks) {
      if (this.bookmarks[book]) {
        favString = favString + `${book},`
      }
    }

    return this.http.get<Livro[]>(BASE_URL + `/livros?ids=${favString}`);
  }

  getAutores() {
    return this.http.get<Autor[]>(BASE_URL + "/autores");
  }

  getVendas() {
    return this.http.get<Venda[]>(BASE_URL + "/vendas");
  }

}
