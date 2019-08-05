<template>
<div class="conteiner">
<h2>Notas</h2>

<button @click="abrir" class="btn btn-primary">Crear</button>
<br /><br />
<div class="mostrarnotas" style="float: left; margin-left: 30px;" v-for="notes in data" >
<div class="row">
<div   style="padding: 5px">
 <div  class="card" style="width: 18rem;">
 <img class="card-img-top" src="https://www.conservatoriogijon.com/wp-content/uploads/2018/10/carta.png" alt="Card image cap">
 <div v-for="id in idnota">
  {{id.id}}
</div>
  <div class="card-body">
    <h5 class="card-title">{{notes.Titulo}}</h5>
    <hr>
    <p class="card-text">{{notes.Cuerpo}}</p>
    <p>{{notes.PieDePagina}}</p>
    <button  @click="Actulizar" class="btn btn-success">A</button>
    <button  @click="Eliminar" class="btn btn-danger">E</button>
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
<input type="text" v-model="form.Titulo" class="form-control" />
<label>Cuerpo</label>
<input type="textarea" v-model="form.Cuerpo" class="form-control" />
<label>Recordatorio</label>
<input type="text" v-model="form.PieDePagina" class="form-control" />
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
import database from '~/plugins/database'
export default {
    name: 'Notas',
    title: 'Notas',
 data(){
     return {
      data: [],
      idnota: [],
      form: {
          Titulo: '',
          Cuerpo: '',
          PieDePagina: ''
      },
     };
 },
 created(){
     this.tomarNotas();
 },
 methods: {
     tomarNotas(){
            database.collection('Notas').get()
   .then( querySnapshot => {
       const notas = [];
       const idnotas = [];
       querySnapshot.forEach(nota => {
           notas.push(nota.data());
           idnotas.push(nota);
           console.log(nota);
       });
       this.data = notas;
       this.idnota = idnotas;
   })
   .catch( error => {
       console.log(error);
   })
     },
      abrir(){
       this.$modal.show('hello-world');
     },
     Cerrar(){
         this.$modal.hide('hello-world');
     },
     Crear(){
         database.collection('Notas').add(this.form).then(this.tomarNotas())
         this.Cerrar()
     },
     Actulizar(){

     },
     Eliminar(){

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