<template>
    <div>
        <div class="contenedor">
            <NavBar />
            <div class="Bienvenido">
                <h1 data-aos="flip-left" data-aos-duration="3000">Bienvenido</h1>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    components:{
        NavBar
    },
    created(){
        AOS.init();
    }
}
</script>

<style>
.contenedor{
    background-image: url("https://www.pxwall.com/wp-content/uploads/2018/09/4K-Ultra-HD-Nature-Minimalist-Wallpapers.jpg");
    top: 0; left: 0; right: 0; bottom: 0;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
}
.Bienvenido{
    margin-top: 120px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
