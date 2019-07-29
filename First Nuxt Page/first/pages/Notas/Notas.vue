<template>
<div class="conteiner">
<h2>Notas</h2>
<div class="mostrar notas">
<div :for="nota in notas">
{{nota}}
</div>
</div>
<button @click="crear" class="btn btn-primary">Crear</button>

<modal name="hello-world">
  hello, world!

  <button>Cerrar</button>
</modal>

</div>
</template>


<script>
import VModal from '~/plugins/modal'

export default {
    name: 'Notas',
    title: 'Notas',
    components: {
      
    },
 data(){
     return {
      data: []
     };
 },
 methods: {
     crear(){
       this.$modal.show('hello-world',
       );
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
    margin-left: 100px;
    margin-top: 50px;
}
</style>