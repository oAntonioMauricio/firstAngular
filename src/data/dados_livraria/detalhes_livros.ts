interface DetalheLivro {
  id: number,
  titulo: string,
  ano_publicacao: number,
  autor: string,
  sinopse: string,
  imagem: string,
  vendas: VendaLivro[]
}

interface VendaLivro {
  data: string,
  cliente: string
}

interface DetalhesLivros {
  [key: number]: DetalheLivro
}

export {DetalheLivro, DetalhesLivros, VendaLivro};
