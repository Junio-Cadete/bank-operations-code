<template>
    <div>
        <div class="topMenu">
            <div>
                Superintendência Executiva Leste de Minas
            </div>     
            <nav class="segmentos">  
                <router-link to="/">Pessoa Jurídica</router-link> |
                <router-link to="/Agro">Agro</router-link> |
                <router-link to="/Habitacao">Habitação</router-link> 
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped>

img{
    height: 25px;
}

@media (max-width: 1000px){
    .segmentos{
        display: none;
    }
}
@media (max-width: 560px){
     .topMenu div:nth-child(1){
        display: none;
    }
}
@media (max-width: 520px){
    
}




</style>



