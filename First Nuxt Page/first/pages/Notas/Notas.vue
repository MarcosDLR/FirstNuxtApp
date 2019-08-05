<template>
<div class="conteiner">
<h2>Notas</h2>

<button @click="abrir" class="btn btn-primary">Crear</button>
<br /><br />
<div class="mostrarnotas" style="float: left; margin-left: 30px;" v-for="notes in notaFinal" >
<div class="row">
<div   style="padding: 5px">
 <div  class="card" style="width: 18rem;">
 <img class="card-img-top" src="https://www.conservatoriogijon.com/wp-content/uploads/2018/10/carta.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{notes.Titulo}}</h5>
    <hr>
    <p class="card-text">{{notes.Cuerpo}}</p>
    <p>{{notes.PieDePagina}}</p>
    <button  @click="takeOne(notes)" class="btn btn-success">A</button>
    <button  @click="Eliminar(notes.notaId)" class="btn btn-danger">E</button>
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

<modal style="border-radius: 50px;" name="actualizar">
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
<button style="margin-left: 410px;" @click="Actulizar" class="btn btn-primary">Actualizar</button>
<button style="margin-left: 10px;" @click="Cerrar" class="btn btn-primary">Cerrar</button>
</div>
</div>
</modal>

</div>
</template>


<script>
import VModal from '~/plugins/modal'
import {db} from '~/plugins/firebase'
import {storage} from '~/plugins/firebase'
export default {
    name: 'Notas',
    title: 'Notas',
 data(){
     return {
      data: [],
      idnota: [],
      notaFinal: [],
      NotaId: 0,
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
            db.collection('Notas').onSnapshot(querySnapShot => {
            const FinalNota = [];
          querySnapShot.forEach(doc =>{
              console.log(doc);
              let nota = doc.data();
              let notaId = doc.id;
              FinalNota.push({notaId, ...nota});
          });
          this.notaFinal = FinalNota;
            })
//    .then( querySnapshot => {
//        const FinalNota = [];
//        querySnapshot.forEach(doc => {
//         let nota = doc.data();
//         let notaId = doc.id;

//            FinalNota.push({notaId, ...nota});
//            console.log(FinalNota[0]);
//        });
//        this.notaFinal = FinalNota;
//    })
//    .catch( error => {
//        console.log(error);
//    })
     },
      abrir(){
       this.$modal.show('hello-world');
     },
     Cerrar(){
         this.$modal.hide('hello-world');
     },
     Crear(){
         db.collection('Notas').add(this.form).then();
         this.Cerrar()
     },
     takeOne(notas){
        this.form.Titulo = notas.Titulo;
        this.form.Cuerpo = notas.Cuerpo;
        this.form.PieDePagina = notas.PieDePagina;
        this.NotaId = notas.notaId;
        this.$modal.show('actualizar');
     },
     Actulizar(){
      db.collection('Notas').doc(this.NotaId).update(this.form).then(response =>{
          this.tomarNotas();
          this.$modal.hide('actualizar');
      }).catch()
     },
     Eliminar(id){
        db.collection('Notas').doc(id).delete().then(response =>{
            let index = this.notaFinal.findIndex(r => r.notaId === id);
            this.notaFinal.splice(index, 1);
        }).catch()
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