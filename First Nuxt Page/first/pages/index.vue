<template>
<div class="back">

<div class="conteiner">

    <div class="login">
        <div class="cabecera">
        <h3>Login</h3>
        <hr />
        <input v-model="Email" type="email" data-aos="fade-right" data-aos-duration="3000" style="width: 60%; border-radius: 7px;" placeholder="Correo" class="form-control form-control-sm" required/>
        <br>
        <input v-model="Password" type="Password" data-aos="fade-left" data-aos-duration="3000" style="width: 60%; border-radius: 7px;" placeholder="Contraseña" class="form-control form-control-sm" required/>
        <br />
        <label style="color: red">{{Respuesta}}</label>
        <button @click="login" class="btn btn-dark">Continuar</button>
    </div>
    </div>
</div>

</div>
</template>


<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import {auth} from '~/plugins/firebase'
export default {
    data(){
        return{
            Email: '',
            Password: '',
            Respuesta: ''
        };
    },
    created(){
        AOS.init();
    },
    methods: {
        async login(){
         await auth.signInWithEmailAndPassword(this.Email, this.Password)
        
        this.$router.replace("/Notas/Notas");


        }
}
}
</script>


<style>
.back{
    background-image: url("https://wallpaperaccess.com/full/24866.jpg");
    top: 0; left: 0; right: 0; bottom: 0;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
}

.conteiner{
    position: relative;
    padding: 7px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    
}

.cabecera{
margin-top: 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.login{
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255, 0.6);
}
hr{
    background-color: black;
}
</style>