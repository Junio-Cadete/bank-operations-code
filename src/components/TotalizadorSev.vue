<template>
  <div>
    <div class="totalizador">
      <div>
        <div class="totalizador-01">O valor total de propostas:</div>
        <div class="totalizador-02">{{ totalPropostas }}</div>
      </div>
      <div>
        <div class="totalizador-01">O valor total de seguridade:</div>
        <div class="totalizador-02">{{ totalSeguridade }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'Totalizador',
   props: ['totalPropostas', 'totalSeguridade']
}
</script>


<style scoped>
.totalizador{
    display: flex;
    flex-direction: column;
    width: min-content;
    margin: 10px auto;
    border: solid 1.5px #dfdfdf;
    box-shadow: 1.5px 1.5px 8px 1px #888888;
  }
  .totalizador > div {
    display: flex;
    justify-content: space-between;
    margin: 5px;
  }

  .totalizador-01{
    padding: 8px;
    font-family: Arial, Helvetica, sans-serif;
    color: #666;
    font-weight: bold;
    width: auto;
    white-space: nowrap;
  }

  .totalizador-02 {
    width: min-content;
    min-width: 132px;
    background-color: rgba(194, 248, 248, 0.575);
    box-shadow: 1.5px 1.5px 8px 1px #888888;
    border-radius: 5px;
    font-weight: bold;
    padding: 8px;
    text-align: center;
  }
</style>