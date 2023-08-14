<template>
  <div class="bg-[#000e14]">
    <Cards :items="items" :loading="loading" :lines="lines" />
    <!-- <CardsTwo :items="items" :loading="loading" :lines="lines" /> -->
  </div>
</template>

<script>
import axios from "axios";
import Cards from "../components/Cards.vue";
import CardsTwo from "../components/CardsTwo.vue";
export default {
  name: "News",
  components: {
    Cards,
    CardsTwo,
    //HelloWorld,
    //Usuarios
  },
  data() {
    return {
      lines: [],
      items: [],
      loading: false,
    };
  },
  mounted() {
    this.getTitularE();
  },
  methods: {
    reduceLineSize(index) {
      this.lines[index].lineSizeClass = "w-0";

      setTimeout(() => {
        this.lines[index].lineSizeClass = "w-24";
      }, 800);
    },
    async getTitularE() {
      //https://kind-gold-agouti-tutu.cyclic.app/api/
      //http://192.168.1.13:3000/api/

      try {
        this.loading = true;
        const response = await axios.get(
          "https://kind-gold-agouti-tutu.cyclic.app/api/bvb/news"
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
    },
  },
};
</script>
