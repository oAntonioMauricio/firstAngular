import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class LivrosService {

  bookmarks: { [key: number]: boolean } = {};

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

  constructor() {
    // deal with local storage
    let bookmarksItem = localStorage.getItem("bookmarks");

    // check if it's non-existent
    if (!bookmarksItem) {
      localStorage.setItem("bookmarks", "{}");
      bookmarksItem = "{}";
    }

    this.bookmarks = JSON.parse(bookmarksItem);
  }
}
