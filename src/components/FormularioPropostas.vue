<template>
    <div>
        <div>
          <div v-show="exibirEdicao === false">
            <form @submit.prevent="inserirProposta" >
              <div class="titulo-form"> Inserir proposta</div>
              <label for="nomeEmpresa">Empresa</label>
              <input type="text" id="nomeEmpresa" placeholder="razão social" required v-model="nomeEmpresa" @input="inserirNome">

              <label for="operacao">Operação</label>
              <select name="" id="operacao"  required v-model="opSelecionada" @change="selecionarOp" >
                <option value="" selected disabled>Selecione</option>
                <option v-for="(op,index) in operacoes" :key="index" :value="op">{{op}}</option>
              </select>

              <label for="valorOperacao">Valor</label>
              <input type="number" min="0" max="100000000" required id="valorOperacao" placeholder="insira valor da operação" v-model="valorOp" @input="inserirValorOp">

              <label for="valorSeguridade">Valor seguridade</label>
              <input type="number" min="0" max="100000000"  id="valorSeguridade" placeholder="insira valor da seguridade" v-model="valorSeg" @input="inserirValorSeg">

              <button type="submit" >Inserir</button> <br><br>
            </form>
          </div>
        </div>

        <div>
            <div v-if="exibirEdicao">
              <form @submit.prevent="salvarEdicao" >
                <div class="titulo-form"> Editar Proposta</div>
                <label for="nomeEmpresa">Empresa</label>
                <input type="text" id="nomeEmpresa" placeholder="razão social" required :value="propostaEditada.empresa"  @input="editNome = $event.target.value" >

                <label for="operacao">Operação</label>
                <select name="" id="operacao" required :value="propostaEditada.operacao"  @change="editOperacao = $event.target.value" >
                  <option value="" selected disabled>Selecione</option>
                  <option v-for="(op,index) in operacoes" :key="index" :value="op">{{op}}</option>
                </select>

                <label for="valorOperacao">Valor</label>
                <input type="number" id="valorOperacao" required min="0" max="100000000"  placeholder="insira valor da operação" :value="propostaEditada.valor"  @input="editValor = parseFloat($event.target.value)" >

                <label for="valorSeguridade">Valor seguridade</label>
                <input type="number" min="0" max="100000000"  id="valorSeguridade" placeholder="insira valor da seguridade" :value="propostaEditada.valor_seguridade"  @input="editSeg = parseFloat($event.target.value)" >

                <button type="submit" >Salvar</button> 
              </form>
              <button class="cancelEdit" @click="cancelarEdicao" >Cancelar</button> <br><br>
          </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'FormularioPropostas',
    props: ['exibirEdicao','propostaEditada'],
    data(){
        return{
           operacoes: ['Pronampe','GiroFlex','CredFacil','FGX','CredInvest'],
           nomeEmpresa: '',
           opSelecionada: '',
           valorOp: '',
           valorSeg: '',
           editNome: '',
           editOperacao: '',
           editValor: '',
           editSeg: '',
        }
    },
    methods:{
        cancelarEdicao(){
            this.$emit('cancelar-edicao')
        },

    inserirProposta(){
      const novaEmpresa = {empresa: this.nomeEmpresa, operacao: this.opSelecionada, valor: this.valorOp, valor_seguridade: this.valorSeg}
      this.$emit('inserir-empresa', novaEmpresa)
      this.nomeEmpresa = '',
      this.opSelecionada = ''
      this.valorOp = ''
      this.valorSeg = ''
      alert(`Foi adicionada nova proposta referente à empresa ${novaEmpresa.empresa}`)    
    },

    salvarEdicao(){
      const propostaEditada = {empresa: this.editNome ? this.editNome : this.propostaEditada.empresa, operacao: this.editOperacao ? this.editOperacao : this.propostaEditada.operacao, valor: this.editValor ? this.editValor : this.propostaEditada.valor, valor_seguridade: this.editSeg ? this.editSeg : this.propostaEditada.valor_seguridade}  
      this.$emit('salvar-edicao', propostaEditada)
      alert(`Foi atualizada a proposta referente à empresa ` + propostaEditada.empresa)
    },

    }
}
</script>


<style scoped>
 form{
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 400px;
  }
  form input, form select, form button, .cancelEdit {
    margin: 5px 0;
    border: solid 2px #ccc ;
  }
  form label{
    font-size: 15px;
    margin: 20px 2px 0 0;
    font-weight: bold;
    color: #444
  }
  form input, form select{
    padding: 5px;
  }
  form button, .cancelEdit {
    border: none;
    margin-top: 10px;
    font-size: 15px;
    padding: 5px;
    color: #444;
    font-weight: bold;
    box-shadow: 1.5px 1.5px 8px 1px #888888;
    border-radius: 5px;
    background-color: #ddd;
  }
  form button:hover, .cancelEdit:hover {
    background-color: #aaa;
    cursor: pointer;
  }
  .cancelEdit{
    width: 100%;
    margin-top: 10px;
  }
  .titulo-form{
    margin: 10px auto;
    color: #444;
    font-size: 20px;
    font-weight: bold
  }
</style>