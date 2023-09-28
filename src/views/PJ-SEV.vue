<template>
  <div>
    <h1 style="margin-top:10px" > Propostas Pessoa Jurídica</h1>

    <div class="container">
      <div class="container-0">
        <Totalizador :totalPropostas="totalPropostas" :totalSeguridade="totalSeguridade" />
      </div>

      <div class="container-1">   
          <FiltroOperacao :operacoesSelecionadas="operacoesSelecionadas" @updateOperacoes="updateOp" />         
          <FiltroNome :nomeEmpresaFiltrado="nomeEmpresaFiltrado" @acessarFiltroNome="acessarNome"/> 
          <TabelaPropostas :filtrarOp="filtrarOp" :filtro_nome="filtro_nome" :propostas="propostas" :filtroOperacoes="filtroOperacoes" :converteMoeda="converteMoeda" @excluirProposta="excluirProposta" @editarProposta="editarProposta"  />
      </div>

      <div class="container-2">
        <FormularioPropostas class="formulario-propostas" @inserir-empresa="inserirEmpresa"  :propostaEditada="propostaEditada" @salvar-edicao="salvarEdicao" :exibirEdicao="exibirEdicao" @cancelar-edicao="cancelarEdicao"  />
      </div>
    </div>
  </div>
</template>

<script>
import Totalizador from '../components/TotalizadorSev.vue'
import FiltroOperacao from '../components/FiltroOperacao.vue'
import FiltroNome from '../components/FiltroNome.vue'
import TabelaPropostas from '../components/TabelaPropostas.vue'
import FormularioPropostas from '../components/FormularioPropostas.vue'

export default {
  name: 'PJSEV',
  components: { Totalizador, FiltroOperacao, FiltroNome, TabelaPropostas, FormularioPropostas},
  data(){
    return {
      opSelecionada: '',
      nomeEmpresa: '',
      valorOp: '',
      valorSeg: '',
      filtrarOp: [],
      propostas: [],
      exibirEdicao: false,
      propostaEditada: {empresa: null, operacao: null, valor: null , valor_seguridade: null },
      indexPropostaEditada: [],
      filtro_nome: ''
    }
  },
  methods:{

    loadFromLocalStorage() {
      const localItems = localStorage.getItem('propostas');
      const propostasIniciais = [
        {empresa: 'ABC SA', operacao: "Pronampe", valor: 100000, valor_seguridade: 5000},
        {empresa: 'Da Silva Eirelli', operacao: "GiroFlex", valor: 70000, valor_seguridade: 3000},
        {empresa: 'Global Ltda', operacao: "CredFacil", valor: 50000, valor_seguridade: 2500},
        {empresa: 'XYZ Engenharia SA', operacao: "FGX", valor: 250000, valor_seguridade: 16000},
        {empresa: 'Max confecções ME', operacao: "CredInvest", valor: 120000, valor_seguridade: 8300},
        {empresa: 'Multivix Ltda', operacao: "Pronampe", valor: 60000, valor_seguridade: 5200}
      ]
      this.propostas = localItems ? JSON.parse(localItems) : propostasIniciais;
    },


    updateOp(operacoesFiltradas){
      this.filtrarOp = operacoesFiltradas
    },
    acessarNome(empresa){
      this.filtro_nome = empresa
    },
    inserirEmpresa(novaEmpresa){
      this.propostas.push(novaEmpresa)
      this.saveToLocalStorage()
    },
    saveToLocalStorage(){
      localStorage.setItem('propostas', JSON.stringify(this.propostas))
      this.loadFromLocalStorage();
    },
    salvarEdicao(propostaEditada){
      this.propostas[this.indexPropostaEditada] = propostaEditada
      this.exibirEdicao = false
      this.saveToLocalStorage()
    },   
    excluirProposta(proposta){
      const indexProposta = this.propostas.findIndex( p => p.empresa === proposta.empresa)
      this.propostas.splice(indexProposta,1)
      this.saveToLocalStorage()
      alert(`Foi excluída proposta referente à empresa ${proposta.empresa}`)  
    },
    editarProposta(proposta){
      if(!this.exibirEdicao) this.exibirEdicao = true
      this.indexPropostaEditada = this.propostas.findIndex( p => proposta.empresa === p.empresa)
      this.propostaEditada = {...this.propostas[this.indexPropostaEditada]}
    },
    cancelarEdicao(){
      this.exibirEdicao = false
    },
    converteMoeda(valor){
      return Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL"}).format(valor)
    }
  },
  computed:{
    totalPropostas(){
      const totalProp = this.propostas.reduce((ac, proposta) => { 
        return ac + proposta.valor},0)
        return this.converteMoeda(totalProp)
        
    },
    totalSeguridade(){
      const totalSeg = this.propostas.reduce((ac, proposta) => { 
        return ac + proposta.valor_seguridade},0)
        return this.converteMoeda(totalSeg)
     
    },
    filtroOperacoes(){
      if(this.filtrarOp.length > 0){    
        return this.propostas.filter(proposta => this.filtrarOp.includes(proposta.operacao))
         }
      if(this.filtro_nome.length > 0){
        const propostasFiltradasNome = []
        this.propostas.forEach(proposta => {
          const {empresa} = proposta
          if(empresa.toLowerCase().includes(this.filtro_nome.toLowerCase())){
            propostasFiltradasNome.push(proposta)
          } 
        })
        return propostasFiltradasNome
      }   
    },
    operacoesSelecionadas(){
      return this.filtrarOp.toString()
    },
    nomeEmpresaFiltrado(){
      const propostasFiltradasNome = []
      this.propostas.forEach( p => {
        if(p.empresa.toLowerCase().includes(this.filtro_nome.toLowerCase())){
            propostasFiltradasNome.push(p.empresa)
          } 
      })
      return this.filtro_nome === '' ? '' : propostasFiltradasNome.toString()
    }
  },
  created(){
    this.loadFromLocalStorage()
  }
}
</script>

<style scoped>

  .container{
    display: grid;
    grid-template-rows: 120px 1fr;
    grid-auto-columns: 1fr 1fr;
    min-height: 900px;
    overflow: auto;
  }
  .container-0{
    grid-column: span 2;
  }
  .container-2{
    position: relative;
  }
  .formulario-propostas{
    position: absolute;
    left: 100px;
    top: 106px;  
  }
 h1{
    text-align: center;
    }
 .filtrarPorNome input {
    margin: 5px 0;
    border: solid 2px #ccc ;
  }

  @media (max-width: 1200px){
    .container{
      grid-auto-columns: 1fr;
      grid-template-rows: 120px 1fr 1fr;
    }
    .container-0{
      grid-column: 1/1;
    }

    .formulario-propostas{
      position: absolute;
      top: 0px;
      left: 50px;
    }
  }


</style>