import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Venda} from "../../data/dados_livraria/vendas";

const BASE_URL = "https://livrariaupskill.store";

@Injectable({
  providedIn: "root"
})

export class VendasService {
  constructor(private http: HttpClient) {

  }

  getVendas() {
    return this.http.get<Venda[]>(BASE_URL + "/vendas");
  }

}
