<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      items: [],
      titulares: [],
    };
  },
  watch: {},
  mounted() {
    //this.getUsuarios();
    this.getTitularD();
  },
  methods: {
    actualizar() {},
    getUsuarios() {
      axios
        .get("http://192.168.1.13:3000/api/usuarios")
        .then((response) => {
          this.items = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    getTitularD() {
      axios.get("http://192.168.1.13:3000/api/deportes").then((response) => {
        this.titulares = response.data;
      });
    },
  },
  /* props: {
    msg: String
  } */
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

h1 {
  font-family: "Bebas Neue", cursive;
}
</style>
