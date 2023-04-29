<template>
  <div id="app" class="min-w-[650px] bg-secondary">
    <div class="">
      <div
        class="w-full flex flex-row gap-6 justify-center py-1 bg-[#ffd900] items-center font-bold h-20 text-lg"
      >
        <router-link to="/"> Noticias </router-link>
        <router-link to="/table">
          <h1>Tabla</h1>
        </router-link>
        <router-link to="/matches"><h1>Partidos</h1></router-link>

        <img
          class="w-16 h-16"
          src="https://www.bvb.de/extension/bvbdesign/design/bvbdesign/images/layout/logo-bvb.svg"
          alt=""
        />
        <h1>Fichajes</h1>
        <h1>Oficial</h1>
        <!-- <router-link to="/streaming">
          <h1>Streaming</h1>
        </router-link> -->
      </div>
    </div>
    <router-view></router-view>
    <div class="bg-[#ffd900] flex flex-col justify-center w-full items-center py-4 text-center">
      <div class="flex gap-6">
        <router-link to="/privacy">
          <h5>Politica de Privacidad</h5>
        </router-link>
        <router-link to="/privacy">
          <h5>Politica de Cookies</h5>
        </router-link>
        
      </div>
      <div class="w-full">
        <router-link to="/privacy">
          Copyrigth © 2023 by NewsBVB.
          
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

import axios from "axios";
import Cards from "./components/Cards.vue";
import News from "./views/News.vue";
export default {
  name: "App",
  components: {
    Cards,
    News,
    //HelloWorld,
    //Usuarios
  },
  data() {
    return {
      /* lines: [],
      items: [],
      loading: false, */
    };
  },
  mounted() {
    //this.getTitularE();
  },
  methods: {
    /* reduceLineSize(index) {
      this.lines[index].lineSizeClass = "w-0";

      setTimeout(() => {
        this.lines[index].lineSizeClass = "w-24";
      }, 1000);
    },
    async getTitularE() {
      //https://kind-gold-agouti-tutu.cyclic.app/api/
      //http://192.168.1.13:3000/api/

      try {
        this.loading = true;
        const response = await axios.get(
          "https://kind-gold-agouti-tutu.cyclic.app/api/bvb"
        );
        await response.data.data.forEach(() => {
          let obj = { lineSizeClass: "w-24" };
          this.lines.push(obj);
        });

        this.items = response.data.data;

        if (this.items.length != 0) {
          this.loading = false;
        }
      } catch (error) {
        return console.log(error);
      }
    }, */
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e7d1aa;
} */
body {
  overflow-x: hidden;
}

h2 {
  font-size: 2rem;
  line-height: 0.88;
  font-family: BebasNeueBold, Helvetica, sans-serif;
  font-weight: 400;
}
</style>
