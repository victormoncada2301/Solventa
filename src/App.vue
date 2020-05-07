<template>
  <div id="app">    
     <!--Menu-->
     <b-navbar toggleable="md" type="dark" class="fondo"> 
        <b-container>
          <b-navbar-brand href="https://www.solventa.com.ar/"><img src="./assets/logo.png" width="130px"></b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>  
           <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item :to="{name:'Home'}">Home</b-nav-item>
                <b-nav-item :to="{name:'Benefits'}">Beneficios</b-nav-item>
                <b-nav-item :to="{name:'About'}">Acerca de Nosotros</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
        </b-container>
     </b-navbar>

    <!-- Etiqueta que permite mostrar el contenido de las distintas rutas -->  
    <router-view/>

  </div>
</template>

<style>
  /* Estilos globales de Vue Js */
  @import url('./assets/style.css');
</style>