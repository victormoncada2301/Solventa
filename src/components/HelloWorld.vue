<template>
  <div class="forms">

    <!-- Boton para cargar el formulario -->
    <div class="mt-5" v-show="isBegin">
     <b-button v-on:click="onclick" block style="background-color:#7f54b3">Solicitar Préstamo ahora!</b-button>  
    </div>

    <!-- Notificacion de exito -->
     <div class="alert alert-success mt-3" v-show="isAlert" role="alert">
        Ha sido cargado la solicitud con exito
    </div>

    <!-- Notificacion de rechazo -->
    <div class="alert alert-danger mt-3" v-show="isAlertDanger" role="alert">
       No ha sido cargado la solicitud
    </div>

    <div class="mt-5" v-show="botonBack">
       <b-button v-on:click="onclick" block style="background-color:#7f54b3">Atrás</b-button>  
    </div>

    <!-- Formulario en Vue Js -->
    <b-form class="mt-5" @submit="onSubmit" @reset="onReset" v-if="show">
      
      <b-form-group id="input-group-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2">
        <b-form-input
          id="input-2"
          v-model="form.surname"
          required
          placeholder="Enter surname"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3">
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" class="ml-3" variant="danger">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          surname: '',
        },
        isBegin:true,
        show: false,
        isAlert:false,
        isAlertDanger:false,
        botonBack:false
      }
    },
    methods: {
      
      onSubmit(evt) {
        evt.preventDefault()
        this.isAlert = true,
        this.botonBack = true,
        this.show = false
      },

      onReset(evt) {
        evt.preventDefault()

        /* Limpiar los valores */
        this.form.email = ''
        this.form.name = ''
        this.form.surname = ''

        /* Al dar clic en Cancelar*/
        this.show = false,
        this.isAlertDanger = true,
        this.botonBack = true

        this.$nextTick(() => {
          this.show = false,
          data()
        })
      },

      onclick(evt){
        /* Mostrar elementos por Default */
        evt.preventDefault(),

        /* Limpiar los valores */
        this.form.email = ''
        this.form.name = ''
        this.form.surname = ''
        
        this.show = true,
        this.isBegin=false,
        this.botonBack = false,
        this.isAlertDanger = false,
        this.isAlert = false
      }
    }
  }
</script>