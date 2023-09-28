<template>
  <div>
    <table v-if="filtrarOp.length === 0 && filtro_nome === ''" class="table">
      <thead>
        <tr>
          <th v-for="(item, index) in cabecalhoTabela" :key="index">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proposta in propostas" :key="proposta.empresa">
          <td class="nomeEmpresa" >{{ proposta.empresa }}</td>
          <td>{{ proposta.operacao }}</td>
          <td>{{ converteMoeda(proposta.valor) }}</td>
          <td>{{ converteMoeda(proposta.valor_seguridade) }}</td>
          <td class="botoesTabela">
            <button @click="excluirProposta(proposta)">Excluir</button>
            <button @click="editarProposta(proposta)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <table v-else class="table">
      <thead>
        <tr>
          <th v-for="(item, index) in cabecalhoTabela" :key="index">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proposta in filtroOperacoes" :key="proposta.empresa">
          <td class="nomeEmpresa">{{ proposta.empresa }}</td>
          <td>{{ proposta.operacao }}</td>
          <td>{{ converteMoeda(proposta.valor) }}</td>
          <td>{{ converteMoeda(proposta.valor_seguridade) }}</td>
          <td>
            <button @click="excluirProposta(proposta)">Excluir</button>
            <button @click="editarProposta(proposta)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showDialog" class="dialog-container">
      <div class="dialog">
        <p>Tem certeza de que deseja excluir?</p>
        <button class="confirmExclusion" @click="confirmExclusion">Sim</button>
        <button class="cancelExclusion" @click="cancelExclusion">Não</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabelaPropostas",
  props: [
    "filtrarOp",
    "filtro_nome",
    "propostas",
    "filtroOperacoes",
    "converteMoeda",
  ],
  data() {
    return {
      cabecalhoTabela: [
        "Empresa",
        "Operação",
        "Valor",
        "Valor Seguridade",
        "Ações",
      ],
      showDialog: false,
      propostaExcluir: []
    };
  },
  methods: {
    excluirProposta(proposta) {
      this.propostaExcluir = proposta
      this.showDialog = true;    
    },
    editarProposta(proposta) {
      this.$emit("editarProposta", proposta);
    },
    confirmExclusion() {
      this.$emit("excluirProposta", this.propostaExcluir);
      this.showDialog = false;
    },
    cancelExclusion() {
      this.showDialog = false;
    }
  },
};
</script>


<style scoped>
.table {
  background-color: #eee;
  border-collapse: collapse;
  min-width: 700px;
  margin: 20px auto;
}
.table th {
  background-color: rgb(173, 169, 169);
}
.table tr:nth-child(even) {
  background-color: #aaa;
}

.table th,
.table td {
  padding: 6px;
}

.nomeEmpresa{
  white-space: nowrap;
}

.table button, .dialog button {
  width: 60px;
  cursor: pointer;
  padding: 10px;
  margin: 3px;
  border: none;
  border-radius: 5px;
  box-shadow: 1.5px 1.5px 8px 2px #888888;
  font-weight: bold;
}
.botoesTabela{
  white-space: nowrap;
}
.table button:nth-child(1), .confirmExclusion {
  background-color: rgb(250, 138, 138);
}

.table button:nth-child(2), .cancelExclusion {
  background-color: rgb(130, 159, 255);
}
.table button:hover {
  transform: scale(1.05);
  transition: 0.3s;
}
.dialog-container {
  position: fixed;
  top: 0;
  left: 0; 
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.dialog {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
  border: solid 1.5px #dfdfdf;
  box-shadow: 1.5px 1.5px 8px 1px #888888;
}
.confirmExclusion, .cancelExclusion{
  margin: 20px 15px 5px 0 !important;
  min-width: 70px;
}
.dialog p{
  font-weight: bold;
}

</style>