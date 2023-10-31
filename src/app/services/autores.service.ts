import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Autor} from "../../data/dados_livraria/autores";

const BASE_URL = "https://livrariaupskill.store";

@Injectable({
  providedIn: "root"
})

export class AutoresService {
  constructor(private http: HttpClient) {

  }

  // methods
  getAutores() {
    return this.http.get<Autor[]>(BASE_URL + "/autores");
  }

}
