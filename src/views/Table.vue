<template>
  <div class="min-h-screen bg-[#000e14] min-w-[650px] max-h-full">
    <div class="max-w-4xl px-10 py-10 mx-auto">
      <h1 class="pb-6 font-serif text-5xl font-bold text-white font-robotot">
        Clasificaciónsas
      </h1>
      <div class="bg-[#191e24] rounded-lg text-white font-roboto py-4 min-h-[1200px] flex flex-col">
        <div class="flex justify-end gap-4 pr-6 text-center">
          <span class="w-7">PJ</span>
          <span class="w-7">V</span>
          <span class="w-7">E</span>
          <span class="w-7">D</span>
          <span class="w-7">DG</span>
          <span class="w-7">PTS</span>
        </div>
        <div
          v-for="(item, index) in data"
          :key="index"
          :class="[
            index < 4 ? ' !border-[#138f16]' : '',
            index === 4 ? ' !border-[#3ab0d3] ' : '',
            index === 5 ? ' !border-[#88d0e6]' : '',
            index === 15 ? ' !border-[#eeac57]' : '',
            index > 15 ? ' !border-[#D75452]' : '',
          ]"
          class="flex justify-between pl-6 pr-6 border-l-4 border-transparent text-end hover:bg-[#34383c] h-14 items-center"
        >
          <div class="flex items-center h-12 gap-4">
            <span class="w-4">{{ index + 1 }}</span>
            <img
              v-if="
                item.tend !== 'stable'
              "
              class="w-3 h-3"
              :src="item.tend === 'up' ? 'https://onefootball.com/assets/images/arrow-up.svg' : 'https://onefootball.com/assets/images/arrow-down.svg'"
              alt=""
            />
            <span class="w-3 h-3 border-[#b8b8b8] border-2 rounded-full" v-else></span>
            <img class="bg-fixed w-9" :src="item.image" alt="" />
            <h1 class="text-[#a5acb5]">{{ item.team }}</h1>
          </div>
          <div
            class="flex flex-row items-center justify-center gap-4 text-center"
          >
            <span class="w-7 text-[#C9CCCF]">{{ item.gamesp }}</span>
            <span class="w-7 text-[#888C90]">{{ item.wins }}</span>
            <span class="w-7 text-[#888C90]">{{ item.draws }}</span>
            <span class="w-7 text-[#888C90]">{{ item.losses }}</span>
            <span
              v-if="item.goald.charAt(0) === '+'"
              class="w-7 text-[#1fc779]"
              >{{ item.goald }}</span
            >
            <span v-else class="w-6 text-[#f42531]">{{ item.goald }}</span>

            <span class="w-7">{{ item.points }}</span>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-2 px-6 pt-6 pb-4 mt-auto md:grid-cols-2">
          <div class="">
            <h4 class="pb-6">CLASIFICACIÓN</h4>
            <div
              class="grid grid-cols-4 gap-4 text-xs font-sans text-[#7c7c7c]"
            >
              <div class="flex items-center col-span-2 gap-2">
                <span class="h-7 w-[3px] bg-[#138f16] block"></span>
                <span>UEFA Champions League</span>
              </div>
              <div class="flex items-center col-span-2 gap-2">
                <span class="h-7 w-[3px] bg-[#3ab0d3] block"></span>
                <span>UEFA Europa League</span>
              </div>
              <div class="flex items-center col-span-2 gap-2">
                <span class="h-7 w-[3px] bg-[#88d0e6] block"></span>
                <span>UEFA Europa Conference League</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="h-7 w-[3px] bg-[#eeac57] block"></span>
                <span>Promoción</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="h-7 w-[3px] bg-[#D75452] block"></span>
                <span>Descenso</span>
              </div>
            </div>
          </div>
          <div>
            <h4 class="pb-4">LEYENDAS</h4>
            <div class="grid grid-cols-2 text-xs font-sans text-[#7c7c7c]">
              <div class="flex flex-col gap-2">
                <span><b>P</b> Partidos</span>
                <span><b>V</b> Victorias</span>
                <span><b class="mr-[1.5px]">E</b> Empates</span>
                <span><b>D</b> Derrotas</span>
              </div>
              <div>
                <span><b>DG</b> Diferencia de goles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Table",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getLeaderboard();
  },
  methods: {
    async getLeaderboard() {
      try {
        const response = await axios.get(
          "https://kind-gold-agouti-tutu.cyclic.app/api/bvb/leaderboard"
          /* "http://192.168.1.13:3000/api/bvb/leaderboard" */
        );
        this.data = response.data;
        //console.log(this.data);
      } catch (error) {
        return console.log(error);
      }
    },
  },
};
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;900&display=swap');
 */

/* span{
  font-family: 'Roboto Slab', serif;
} */

b {
  color: #c9cccf;
}
</style>
