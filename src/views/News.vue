<template>
  <div class="bg-[#000e14]">
    <!-- adsx -->
    <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-9064611616693102"
      data-ad-slot="3952386901"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    <Cards :items="items" :loading="loading" :lines="lines" />
    <!-- adsx -->
    <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-9064611616693102"
      data-ad-slot="3952386901"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>

<script>
import axios from "axios";
import Cards from "../components/Cards.vue";
export default {
  name: "News",
  components: {
    Cards,
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
    (adsbygoogle = window.adsbygoogle || []).push({});
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
