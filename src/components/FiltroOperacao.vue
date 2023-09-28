<template>
    <div>
          <span class="filtrarPorOp">Filtrar por operação: {{operacoesSelecionadas}} </span>
          <div class="filtro-Op">
            <div v-for="(operacao,index) in operacoes" :key="index"> 
              <input type="checkbox" :value="operacao" :id="operacao" v-model="filtrarOp" @change="atualizarOpSelecionadas">
              <label :for="operacao">{{operacao}}</label>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    name: 'FiltroOperacao',
    props: ['operacoesSelecionadas'],
    data(){
        return {
            operacoes: ['Pronampe','GiroFlex','CredFacil','FGX','CredInvest' ],
            filtrarOp: []
        }
    },
    methods:{
        atualizarOpSelecionadas(){
            this.$emit('updateOperacoes', this.filtrarOp)
        }
    }   
}
</script>

<style scoped>
.filtro-Op {
    display: flex;
    border-radius: 5px;
    width: 595px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px;
    background: linear-gradient( to right, rgba(239, 254, 255, 0.918), rgb(198, 221, 255)); 
    box-shadow: 1.3px 1.3px 8px .3px #888888;
    padding: 15px;
  }
  .filtro-Op label{
    margin: 10px;
    font-size: 1.2em;
    color: #444;
    font-weight: bold;
    cursor: pointer;
  }

  .filtrarPorOp{
    display: flex;
    justify-content: center;
    color: #888;
  }
  .filtro-Op input{
    cursor: pointer;
  }
</style>