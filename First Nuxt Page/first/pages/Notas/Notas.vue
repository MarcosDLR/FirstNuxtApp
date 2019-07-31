<template>
<div class="conteiner">
<h2>Notas</h2>
<button @click="abrir" class="btn btn-primary">Crear</button>
<div class="mostrarnotas">
<div class="row">
<div   style="padding: 5px" v-for="nota in notas">
 <div  class="card" style="width: 18rem;">
 <img class="card-img-top" src="https://www.conservatoriogijon.com/wp-content/uploads/2018/10/carta.png" alt="Card image cap">
  <div class="card-body">
  {{nota.id}}
    <h5 class="card-title">{{nota.encabezado}}</h5>
    <hr>
    <p class="card-text">{{nota.cuerpo}}</p>
    <p>{{nota.pieDePagina}}</p>
    <button style="margin-left: 150px"  @click="tomar(nota.id)" class="btn btn-info">U</button>
<button  @click="Eliminar(nota)" class="btn btn-danger">D</button>
  </div>
</div>
</div>
</div>
</div>

<modal style="border-radius: 50px;" name="hello-world">
<h3 style="padding: 20px">Crear nota</h3>
<hr>
<div class="cont">
<label>Titulo</label>
<input type="text" v-model="form.encabezado" class="form-control" />
<label>Cuerpo</label>
<input type="textarea" v-model="form.cuerpo" class="form-control" />
<label>Recordatorio</label>
<input type="text" v-model="form.pieDePagina" class="form-control" />
</div>

<div class="footer">
<div class="row">
<button style="margin-left: 410px;" @click="Crear" class="btn btn-primary">Guardar</button>
<button style="margin-left: 10px;" @click="Cerrar" class="btn btn-primary">Cerrar</button>
</div>
</div>
</modal>
</div>
</template>


<script>
import VModal from '~/plugins/modal'

export default {
    name: 'Notas',
    title: 'Notas',
 data(){
     return {
      data: [],
      form: {
      encabezado: '',
      cuerpo: '',
      pieDePagina: '',
      fecha: '29/7/2019'
      },
      datos: []
     };
 },
 methods: {
     abrir(){
       this.$modal.show('hello-world');
     },
     Cerrar(){
         this.$modal.hide('hello-world');
     },
     Crear(){
         this.$store.commit('notas/add', this.form)
         console.log(this.form);
         this.$modal.hide('hello-world');
     },Eliminar(nota){
      this.$store.commit('notas/delete', nota)
     },
     tomar(id){
         console.log(id);
      this.datos =  this.$store.state.notas.notas.find(u => u.id == id);
      this.$modal.show('hello-world');
      this.form.encabezado = this.datos.encabezado;
      this.form.cuerpo = this.datos.cuerpo;
      this.form.pieDePagina = this.datos.pieDePagina;
     }
 },
 computed: {
     notas() {

         return this.$store.state.notas.notas
     }
 }
}
</script>


<style>
.conteiner{
    margin-left: 50px;
    margin-top: 50px;
}

.footer{
    background-color: black;
    padding: 5px;
    height: 70px;
}
.cont{
    padding: 15px; 
    height:150px;
 overflow-y: scroll;
}

.cont::-webkit-scrollbar {
    width: 5px;
}
 
.cont::-webkit-scrollbar-thumb {
   background-color: green;
}
</style>