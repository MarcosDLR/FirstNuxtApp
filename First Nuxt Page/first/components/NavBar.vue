<template>
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a style="color: white" class="nav-link">{{user}}</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto ">
      <li class="nav-item">
        <a class="nav-link" href="/Notas/Notas">Notas</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" @click="logout" ><button class="btn btn-info">Logout</button></a>
      </li>
    </ul>

  </div>
</nav>



</template>



<script>
import {auth} from '~/plugins/firebase'
import {mapState} from 'vuex'
export default {
    name: 'NavBar',
    data(){
      return{

      };
    },
    computed: {
      ...mapState({
        user: state => state.user.user.email
      })
    },
    methods: {
      logout(){
      auth.signOut().then(function() {
          window.location = "/";
        }).catch(function(error) {
          console.log(error);
        });
      }
    }
}
</script>




<style>


</style>