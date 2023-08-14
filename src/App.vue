<template>
  <div id="app" class="min-w-[650px] bg-secondary">
    <header class="font-mono">
      <div
        class="w-full flex flex-row gap-6 justify-star py-1 bg-[#ffd900] items-center font-bold h-20 text-lg"
      >
        <img
          class="w-16 h-16 ml-10"
          src="https://www.bvb.de/extension/bvbdesign/design/bvbdesign/images/layout/logo-bvb.svg"
          alt=""
        />

        <router-link to="/"> Noticias </router-link>
        <router-link to="/table">
          <h1>Tabla</h1>
        </router-link>
        <router-link to="/matches"><h1>Partidos</h1></router-link>

        <h1>Fichajes</h1>
        <h1>Oficial</h1>
        <!-- <router-link to="/streaming">
          <h1>Streaming</h1>
        </router-link> -->
      </div>
    </header>
    <router-view></router-view>
    <div class="bg-[#191e24] flex justify-center gap-4 py-4 items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="#8b8b8b"
        stroke="currentColor"
        stroke-width="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-twitter hover:fill-sky-400 hover:stroke-none"
      >
        <path
          d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8b8b8b"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-instagram hover:stroke-[#e1306c]"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8b8b8b"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-twitch hover:stroke-[#6441A4]"
      >
        <defs>
          <linearGradient x1="50%" y1="92.034%" x2="50%" y2="7.2%" id="a">
            <stop offset="0%" stop-color="currentColor" />
            <stop stop-opacity="0" offset="100%" stop-color="white" />
          </linearGradient>
        </defs>
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="#8b8b8b"
        stroke="currentColor"
        stroke-width="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-facebook hover:fill-[#4c8ca6]"
      >
        <path
          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        ></path>
      </svg>
    </div>
    <div
      class="bg-[#ffd900] flex w-full py-4 px-10 text-center font-roboto justify-between"
    >
      <div class="flex gap-6">
        <a>Términos de uso</a>
        <router-link to="/privacy">
          <h5>Politica de Privacidad</h5>
        </router-link>
        <router-link to="/privacy">
          <h5>Politica de Cookies</h5>
        </router-link>
        <a>Contáctanos</a>
      </div>
      <div>© 2023 Borussia Dortmund</div>
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

a:hover {
  border-bottom: 1px solid;
}
</style>
