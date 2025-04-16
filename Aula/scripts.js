let pessoa = []

function AdicionarPessoa(){
    let Nome = document.getElementById("Nome").value
    let Idade = document.getElementById("Idade").value 
    let Sexo = document.getElementById("Sexo").value 
    pessoa.push({Nome,Idade,Sexo})
    console.log(pessoa)
}
function RemoverPessoa(){
    let index = document.getElementById("Index")
    pessoa.splice(index,1)
    console.log(pessoa)
}

function BuscarNome(){
    let NomeBuscado = document.getElementById("nomebuscado").value
    let encontrado = false;

    for (let i = 0; i < pessoa.length; i++) {
        if (pessoa[i].Nome === NomeBuscado) {
            encontrado = true;
            break; 
        }
    }

    if (encontrado) {
        document.getElementById("nomebuscado").value = "Nome encontrado!";
    } else {
        document.getElementById("nomebuscado").value ="Nome não encontrado.";
    }
}

function verificarPessoasCadastradas(){
    let NumPessoasCadastradas = pessoa.length
    document.getElementById("PessoaCadastrada").value = NumPessoasCadastradas;
    
}