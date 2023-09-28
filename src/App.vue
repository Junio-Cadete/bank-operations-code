<template>
  <div>
    <div>
      <Menu/>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {Menu, Footer},
}
</script>

<style>
*,body,html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body{
    height: 100vh;
}

nav a {
  font-weight: bold;
  color: #fff;
  margin: 3px;
}

nav a.router-link-exact-active {
  color: rgb(84,188,196);
}

.topMenu{
  display: flex;
  align-items: center;
  background: linear-gradient(to right, rgba(84, 188, 196), rgb(1, 61, 150));
  height: 40px; 
}
.topMenu div{
  font-size: 1.5em;
  color: #ddd;
  font-weight: bold;
  flex-grow: 1;
  text-align: center;
}

.topMenu nav{
  display: flex;
  justify-content: flex-end;
}

.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(to right, rgb(84, 188, 196), rgb(1, 61, 150));
  height: 80px; 
  
}
.footer div{
  font-size: 1.15em;
  color: #444;
  font-weight: bold;
}

</style>
