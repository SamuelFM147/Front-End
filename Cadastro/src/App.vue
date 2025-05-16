<script>
export default {
  data() {
    return {
      Pessoas: [],
      index: 0,
      novaPessoa: {
        "Nome": "",
        "Idade": "",
        "Cabelo": ""
      },
      EditarPessoa: {
        "Nome": "",
        "Idade": "",
        "Cabelo": ""
      }
    }
  },
  methods: {
    cadastraPessoa() {
      this.Pessoas.push({ ...this.novaPessoa })
      this.novaPessoa = { "Nome": "", "Idade": "", "Cabelo": "" }
    },
    editarPessoa(index) {        // chamado ao clicar no ícone/lápis
      this.index = index
      this.EditarPessoa = {...this.Pessoas[index]}
    },

    salvarEdição(){
       this.Pessoas.splice(this.index,1,{...this.EditarPessoa})
       this.EditarPessoa = {"Nome": "","Idade": "", "Cabelo": ""}
    },

    removerPessoa(index) {
      this.Pessoas.splice(index, 1)
    }

  }
}
</script>

<template>

  <div class="container mt-4">
    <div class="row d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
      <div class="col-8">
        <h3>Pessoas</h3>
      </div>

      <div class="col-2">
        <button class="btn btn-primary d-grid gap-2" data-bs-toggle="modal" data-bs-target="#ModalCadastro">
          Add
        </button>
      </div>

    </div>

    <!-- SEM REGISTROS -->
    <div v-if="Pessoas.length === 0" class="text-center">
      <img src="./assets/undraw_no-data_ig65.png" class="img-fluid mb-3" style="max-width: 40%;" alt="">
      <h4 class="text-muted">No Content</h4>
    </div>

    <!-- COM REGISTROS -->
    <div v-else class="d-flex flex-column align-items-center">
      <table class="table table-bordered">
        <thead class="">
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Tem Cabelo?</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in Pessoas" :key="index">
            <td>{{ item.Nome }}</td>
            <td>{{ item.Idade }}</td>
            <td>{{ item.Cabelo == 1 ? 'Sim' : 'Não' }}</td>
            <td>
              <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#ModalEditar"
                @click="editarPessoa(index)">Editar</button>
            </td>
            <td>
              <button class="btn btn-danger" @click="removerPessoa(index)">Remover</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>



  <!-- Modal -->
  <div class="modal fade" id="ModalCadastro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastar Pessoa</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <label for="Nome">Nome</label>
              <input type="text" name="Nome" placeholder="Digite o nome da Pessoa" v-model="novaPessoa.Nome" required
                class="form-control">
            </div>
            <div class="col-6">
              <label for="Idade">Idade</label>
              <input type="number" placeholder="Digita a Idade da Pessoa" v-model="novaPessoa.Idade"
                class="form-control" required name="Idade">
            </div>
            <div class="col-6">
              <label for="Cabelo">Tem Cabelo?</label>
              <select name="Cabelo" v-model="novaPessoa.Cabelo" class="form-select" required>
                <option value="1">Sim</option>
                <option value="2">Não</option>
              </select>

            </div>
          </div>


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary" @click="cadastraPessoa()">Salvar</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="ModalEditar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastar Pessoa</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <label for="Nome">Nome</label>
              <input type="text" name="Nome" placeholder="Digite o nome da Pessoa" v-model="EditarPessoa.Nome" required
                class="form-control">
            </div>
            <div class="col-6">
              <label for="Idade">Idade</label>
              <input type="number" placeholder="Digita a Idade da Pessoa" v-model="EditarPessoa.Idade"
                class="form-control" required name="Idade">
            </div>
            <div class="col-6">
              <label for="Cabelo">Tem Cabelo?</label>
              <select name="Cabelo" v-model="EditarPessoa.Cabelo" class="form-select" required>
                <option value="1">Sim</option>
                <option value="2">Não</option>
              </select>

            </div>
          </div>


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary" @click="salvarEdição()" data-bs-dismiss="modal">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
