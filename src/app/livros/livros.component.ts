import {Component, OnInit} from '@angular/core';
import {Livro} from "src/data/dados_livraria/livros";
import {LivrosService} from "../services/livros.service";
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {BehaviorSubject, combineLatest} from "rxjs";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  // icons
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  // attributes
  livros: Livro[] = [];
  searchInput: BehaviorSubject<string> = new BehaviorSubject<string>("");
  page: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private livrosService: LivrosService) {

  }

  ngOnInit(): void {

    // search with page and text input
    combineLatest([this.page, this.searchInput]).subscribe(([newPage, newSearchInput]) => {
      this.livrosService.getLivros(newSearchInput, newPage).subscribe(livros => {
        this.livros = livros;
      })
    })

    // page at zero at a new search
    this.searchInput.subscribe(newSearchInput => {
      if (this.page.value !== 0) {
        this.page.next(0);
      }
    });

  }

  previousPage() {
    let currentValue = this.page.value;

    if (currentValue > 0) {
      this.page.next(currentValue - 1)
    }

    console.log(this.page.value)
  }

  nextPage() {
    let currentValue = this.page.value;

    this.page.next(currentValue + 1)

    console.log(this.page.value)
  }

}
