<template>
    <div>
        <div class="filtrarPorNome">
          <div>
            <label for="filtroNome" id="filtroNome"> Nome da empresa</label>
            <input id="filtroNome" type="text" v-model="filtro_empresa" @input="inserirNome" placeholder="Filtre p nome da empresa">
          </div>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'FiltroNome',
    props: ['nomeEmpresaFiltrado'],
    data(){
        return{
            filtro_empresa: ''
        }
    },
    methods:{
        inserirNome(){
            this.$emit('acessarFiltroNome', this.filtro_empresa)
        }
    }
}
</script>



<style scoped>

  .filtrarPorNome label{
    margin: 10px;
    font-size: 1.2em;
    color: #444;
    font-weight: bold;
  }

  .filtrarPorNome div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    background: linear-gradient( to right, rgba(239, 254, 255, 0.918), rgb(198, 221, 255)); 
    box-shadow: 1.3px 1.3px 8px .3px #888888;
  }

  .filtrarPorNome{
    margin: 10px auto;
    width: 595px;
  }

.filtrarPorNome input {
    border: solid 2px #ccc ;
    padding: 13px;
    width: 380px; 
    height:25px; 
    margin-right:15px
  }
</style>