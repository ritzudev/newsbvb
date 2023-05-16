<template>
  <div>
    <div class="flex flex-col max-w-5xl min-h-screen mx-auto bg-secondary">
      <div class="w-full my-10 overflow-hidden rounded-lg shadow-xl">
        <h1 class="text-center text-white">
          Agenda deportiva - {{ formatDate }}
        </h1>
        <div
          v-for="(item, index) in data"
          :key="index"
          :class="[index == data.length - 1 ? '' : 'border-b']"
          class="py-2 text-white bg-primary"
        >
          <div>
            <div
              class="flex flex-col items-center justify-between h-full px-10"
            >
              <div
                :class="[activeIndex === index ? 'bg-blue-500' : null]"
                class="flex flex-row justify-between w-full cursor-pointer"
                @click="toggle(index)"
              >
                <div class="flex flex-row gap-4">
                  <img class="w-6 h-full" :src="item.flag" alt="" />
                  <span> {{ item.match }}</span>
                </div>
                <span>{{ item.hour }}</span>
              </div>

              <div v-if="activeIndex === index" class="w-full px-10 bg-primary">
                <div
                  v-for="(match, index) in item.canales"
                  :key="index"
                  class="flex items-center gap-4 border cursor-pointer hover:text-blue-500"
                  @click="playStream('https://gumplol.run/dtvpl2.html?id=1272')"
                >
                  <img src="../assets/arrow-right.svg" class="w-4 h-4" alt="" />
                  <span class="" >{{ match.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="relative h-screen pb-9/16">
          <iframe
            ref="iframe"
            src="https://gumplol.run/dtvpl2.html?id=1272"
            allowfullscreen
            frameborder="0"
            allow="autoplay; encrypted-media"
            scrolling="no"
            class="w-full h-full"
          ></iframe>
        </div> -->
        <div class="pb-[56.25%] relative border my-20">
          <iframe
            width="560"
            height="315"
            ref="iframe"
            :src="streamUrl"
            allowfullscreen
            frameborder="0"
            allow="autoplay; encrypted-media"
            scrolling="no"
            class="absolute w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 
  TWITCH
  <iframe
    src="https://player.twitch.tv/?channel=esb_dota2&parent=localhost"
    frameborder="0"
    allowfullscreen="true"
    scrolling="no"
    height="378"
    width="620"
  ></iframe>
  <iframe
    id="chat_embed"
    src="https://www.twitch.tv/embed/ibai/chat?darkpopout&parent=localhost"
    height="500"
    width="350"
  >
  </iframe>
 -->

<script>
import axios from "axios";
export default {
  name: "Streaming",
  data() {
    return {
      streamUrl: "",
      data: [],
      loading: false,
      mostrar: false,
      activeIndex: -1,
    };
  },
  mounted() {
    this.getSchedule();
  },
  computed: {
    formatDate() {
      const date = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString("es-ES", options);
    },
  },
  methods: {
    
    playStream(url) {
      this.streamUrl = url
    },
    
    change() {
      this.mostrar = !this.mostrar;
    },

    toggle(index) {
      this.activeIndex = this.activeIndex === index ? -1 : index;
    },
    async getSchedule() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://kind-gold-agouti-tutu.cyclic.app/api/bvb/schedule"
        );
        this.data = response.data;
        this.loading = false;
      } catch (error) {}
    },
  },
};
</script>
