let produtos = [
  { id: 1, nome: "Camiseta", preco: 29.90 },
  { id: 2, nome: "Calça Jeans", preco: 79.90 },
  { id: 3, nome: "Sapato", preco: 120.00 },
  { id: 4, nome: "Boné", preco: 19.90 },
  { id: 5, nome: "Bolsa", preco: 99.90 },
  { id: 6, nome: "Relógio", preco: 199.90 },
  { id: 7, nome: "Óculos de Sol", preco: 89.90 },
  { id: 8, nome: "Jaqueta", preco: 150.00 },
  { id: 9, nome: "Short", preco: 39.90 },
  { id: 10, nome: "Cinto", preco: 24.90 }

];


function criarTabela() {
  tbody = document.getElementById("tabelaBody")

  const fragment = document.createDocumentFragment();

  produtos.forEach((produto) => {
    const row = document.createElement("tr");



    const Idrow = document.createElement("td")
    Idrow.textContent = produto.id
    row.appendChild(Idrow)

    const Namerow = document.createElement("td")
    Namerow.textContent = produto.nome
    row.appendChild(Namerow)

    const Precorow = document.createElement("td")
    Precorow.textContent = produto.preco
    row.appendChild(Precorow)

    const Editrow = document.createElement("td")
    const BotaoEditar = document.createElement("a")
    BotaoEditar.href = "formProduto.html"
    BotaoEditar.classList.add("btn", "btn-outline-secondary")
    BotaoEditar.textContent = "Editar"
    Editrow.appendChild(BotaoEditar)
    row.appendChild(Editrow)

    const Removerow = document.createElement("td")
    const BotaoRemover = document.createElement("button")
    BotaoRemover.type = "button"
    BotaoRemover.classList.add("btn", "btn-danger")
    BotaoRemover.textContent = "Remover"
    BotaoRemover.addEventListener("click", () => RemoverItem(produto.id)) //atribui um parâmetro logo na criação do botão
    Removerow.appendChild(BotaoRemover)
    row.appendChild(Removerow)

    fragment.appendChild(row);



  })
  tbody.appendChild(fragment);
}


function BuscarId() {
  let IdBuscado = Number(document.getElementById("IdField").value);
  let resultado = produtos.find(function ValidarId(produto) {
    return produto.id === IdBuscado
  })
  if (resultado) {
    alert("Nome do produto: " + resultado.nome); //Mostra ao usuário o nome do produto
    document.getElementById("IdField").value = "" //Limpa o campo input para a próxima pesquisa
  } else{
    alert(`Não foi possível encontrar o produto de id ${IdBuscado}`)
    document.getElementById("IdField").value = ""
  }

}

function RemoverItem(id) {
  produtos = produtos.filter(produto => produto.id !== id); //Cria um novo array excluido o id passado como parâmetro

  const tbody = document.getElementById("tabelaBody");
  tbody.innerHTML = "";//Limpa a tabela para criar a nova atualizada

  criarTabela();
}

criarTabela()
