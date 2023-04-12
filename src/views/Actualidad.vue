<template>
  <div>
    <Cards :items="items" :titulo="titulo"></Cards>
  </div>
</template>

<script>
import axios from "axios";
import Cards from "../components/Cards.vue";

export default {
  name: "Home",
  components: {
    Cards,
  },
  data() {
    return {
      titulo: "ACTUALIDAD",
      items: [],
    };
  },
  watch: {},
  mounted() {
    //this.getUsuarios();
    this.getTitularA();
  },
  methods: {
    getTitularA() {
      axios.get("http://192.168.1.13:3000/api/actualidad").then((response) => {
        this.items = response.data;
      });
    },
  },
};
</script>
