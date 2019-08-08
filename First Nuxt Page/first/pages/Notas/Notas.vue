<template>
<div class="conteiner">
    <center>
<h1 style="color: white">Notas</h1>
<hr />
<button style="width: 400px" @click="abrir" class="btn btn-info">Crear nota</button>


</center>
<br />
<div class="contenedor">
<div data-aos="flip-up" data-aos-duration="3000">
<div class="mostrarnotas" style="float: left; margin-left: 30px;" v-for="(notes, index) in notaFinal" :key="index">
<div class="row">
<div   style="padding: 2px">
 <div  class="card" style="width: 18rem;">
 <img class="card-img-top" @click="select(notes)" :src="notes.imageUrl ? notes.imageUrl: 'https://www.conservatoriogijon.com/wp-content/uploads/2018/10/carta.png'" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{notes.Titulo}}</h5>
    <hr>
    <p class="card-text">{{notes.Cuerpo}}</p>
    <p>{{notes.PieDePagina}}</p>
    <button  @click="takeOne(notes)" class="btn btn-success">Update</button>
    <button  @click="Eliminar(notes.notaId)" class="btn btn-danger">Delete</button>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>

<modal
:width="750"
:height="550"
 style="border-radius: 50px;" name="hello-world">

    <center>
<h3 style="padding: 20px">Crear nota</h3>
    </center>
<hr>
    <div class="cont" v-if="!enviando" id="contguardar">
    <input class="btn btn-primary" @change="takeImage" type="file"  />
    <img width="30%" height="80%" id="output"/>
    <br />
    <label data-aos="fade-right" data-aos-duration="3000">Titulo</label>
    <input data-aos="fade-right" data-aos-duration="3000" type="text" v-model="form.Titulo" class="form-control" />
    <label data-aos="fade-right" data-aos-duration="3000">Cuerpo</label>
    <textarea data-aos="fade-right" data-aos-duration="3000" type="textarea" v-model="form.Cuerpo" class="form-control"> </textarea>
    <label data-aos="fade-right" data-aos-duration="3000">Recordatorio</label>
    <input data-aos="fade-right" data-aos-duration="3000" type="text" v-model="form.PieDePagina" class="form-control" />
    </div>

<div class="cargando" v-else  id="contguardarloading">
    <div> 
    <div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>

</div>
    <h3>Guardando su nota...</h3>
</div>


<div class="footer" v-if="!enviando">
<div class="row">
<button style="margin-left: 300px;" @click="Crear" class="btn btn-primary">Guardar</button>
<button style="margin-left: 10px;" @click="Cerrar" class="btn btn-primary">Cerrar</button>
</div>
</div>
</modal>

<modal
:width="750"
:height="550"
 style="border-radius: 50px;" name="actualizar">
    <center>
<h3 style="padding: 20px">Actualizar nota</h3>
    </center>
<hr>
<div id="preimage" class="cont" v-if="!enviando" >
<input class="btn btn-primary" @change="takeImage" id="imagen" type="file"  />
<img data-aos="flip-left" data-aos-duration="2000" v-if="form.imageUrl" :src="form.imageUrl" width="30%" height="80%"  id="output"/>
<br />
<label data-aos="fade-right" data-aos-duration="3000">Titulo</label>
<input data-aos="fade-right" data-aos-duration="3000" type="text" v-model="form.Titulo" class="form-control" />
<label data-aos="fade-right" data-aos-duration="3000">Cuerpo</label>
<textarea data-aos="fade-right" data-aos-duration="3000" type="textarea" v-model="form.Cuerpo" class="form-control"> </textarea>
<label data-aos="fade-right" data-aos-duration="3000">Recordatorio</label>
<input data-aos="fade-right" data-aos-duration="3000" type="text" v-model="form.PieDePagina" class="form-control" />
</div>

<div class="cargando" v-else  id="contguardarloading">
    <div> 
    <div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>

</div>
    <h3>Actualizando su nota...</h3>
</div>

<div class="footer" v-if="!enviando">
<div class="row">
<button style="margin-left: 410px;" @click="Actulizar" class="btn btn-primary">Actualizar</button>
<button style="margin-left: 10px;" @click="Cerrar" class="btn btn-primary">Cerrar</button>
</div>
</div>
</modal>

<modal style="border-radius: 50px;" name="image">
<img :src="notaSelected.imageUrl" width="100%" height="100%">
</modal>
</div>
</template>


<script>
import VModal from '~/plugins/modal'
import {db} from '~/plugins/firebase'
import {storage} from '~/plugins/firebase'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    name: 'Notas',
    title: 'Notas',

   // middleware: 'auth',
 data(){
     return {
      data: [],
      enviando: false,
      notaSelected: {},
      idnota: [],
      notaFinal: [],
      NotaId: 0,
      imageSelected: '',
      Image: '',
      form: {
          Titulo: '',
          Cuerpo: '',
          PieDePagina: '',
          imageUrl: ''
      }
     };
 },
 created(){
     this.tomarNotas();
     AOS.init();
 },
 methods: {
     select(nota){
       this.notaSelected = nota;
        if(this.notaSelected.imageUrl){
          this.$modal.show('image');
        }else{
           this.$modal.hide('image');
        }
      
       
     },
     takeImage(e){
         this.Image =  e.target.files[0];
            var reader = new FileReader();
            reader.onload = function(){
              var output = document.getElementById('output');
              output.src = reader.result;
            };
            reader.readAsDataURL(e.target.files[0]);
     },
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
     async Crear(){

         this.enviando = true;
        //  window.document.getElementById('contguardar').style.display = 'none';
        //  window.document.getElementById('contguardarloading').style.display = 'block';
         if(this.Image){
             const response = await storage.ref('Imagenes/'+ this.Image.name).put(this.Image);
            this.form.imageUrl = await response.ref.getDownloadURL();
         }
         this.Image = '';
         db.collection('Notas').add(this.form).then();
         this.form.Titulo = '';
         this.form.Cuerpo = '';
         this.form.PieDePagina = '';
         this.form.imageUrl = '';
         this.Cerrar();

         this.enviando = false;
     },
     takeOne(notas){
        this.form.Titulo = notas.Titulo;
        this.form.Cuerpo = notas.Cuerpo;
        this.form.PieDePagina = notas.PieDePagina;
        this.form.imageUrl = notas.imageUrl;
        this.NotaId = notas.notaId;
        this.$modal.show('actualizar');
     },
     async Actulizar(){
     this.enviando = true;
     this.cargando = false;
     if(this.Image){
     const response = await storage.ref('Imagenes/'+ this.Image.name).put(this.Image);
     this.form.imageUrl = await response.ref.getDownloadURL();
     }

      db.collection('Notas').doc(this.NotaId).update(this.form).then(response =>{
          this.Image = '';
         this.form.Titulo = '';
         this.form.Cuerpo = '';
         this.form.PieDePagina = '';
         this.form.imageUrl = '';
         this.cargando = true;
         this.$modal.hide('actualizar');
         this.enviando = false;
      }).catch()
     },
     Eliminar(id){
        db.collection('Notas').doc(id).delete().then().catch()
     }
 }
}
</script>


<style>
hr{
    background-color: white;
}
h1{
    font-family: 'Courier New', Courier, monospace;
}
body{
 background-color: black;
}
.contenedor{
    background-color: white;
    padding: 2px;
    position: absolute;
    margin-right: 15px;
    border-radius: 5px;
    width: 93.6vw;
}
.conteiner{
    margin-left: 50px;
    margin-top: 20px;
    margin-right: 15px;
}
.card-body:hover{
    color: black;
}
.card:hover{
    transition-duration: .8s;
    background-color: white;
    /* -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777; */
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
}
.footer{
    background-color: black;
    padding: 5px;
    height: 70px;
    margin-top: 230px;
}
.cont{
    padding: 15px; 
    height:150px;
    position:relative;
}

.cont::-webkit-scrollbar {
    width: 5px;
}
 
.cont::-webkit-scrollbar-thumb {
   background-color: green;
   width: 50px;
   height: 50px;;
}
.principal{
    position: relative;
}
.cargando{
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(255,255,255,0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
</style>