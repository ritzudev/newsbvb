<template>
  <div class="max-h-full min-h-screen bg-secondary min-w-max">
    <div class="grid grid-cols-1 gap-6 px-10 py-10 mx-auto max-w-7xl">
      <div class="text-white">
        <h1 class="text-5xl">{{ data.date }}</h1>
        <h2>TEMPORADA 2023-2024</h2>
        <div class="flex items-center mt-4">
          <select
            name=""
            id=""
            class="block py-2.5 px-2 w-[300px] bg-[#34383c] text-md border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer text-white"
            v-model="date"
            @change="getMatches()"
          >
            <option
              class="h-20"
              v-for="(item, index) in 34"
              :key="index"
              :value="item"
            >
              <div class="text-white">Fecha {{ item }}</div>
            </option>
          </select>

          <div class="bg-[#34383c] items-center h-[46px] flex w-8">
            <svg
            v-if="loading"
              aria-hidden="true"
              class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            
          </div>
        </div>
      </div>
      <div v-for="(item, index) in data.matches" :key="index">
        <div class="flex justify-between text-white">
          <h4 class="font-bold">{{ item.date }}</h4>
          <span class="font-bold">{{ item.hour }}</span>
        </div>
        <div
          v-for="(match, index) in item.fixtures"
          :key="index"
          class="flex items-center my-2 text-sm text-white rounded-sm h-14 bg-primary font-roboto"
        >
          <div class="flex items-center justify-end w-full ">
            <span class=" sm:block">
              {{ match.homeTeam.name }}
            </span>
            
            <div class="w-10 mx-4">
              <img :src="match.homeTeam.logo" alt="" />
            </div>
          </div>
          <div class="flex items-center justify-center h-full gap-2">
            <div
              class="bg-[#34383c] w-11 h-full flex items-center justify-center flex-col"
            >
              <span class="font-bold text-textSecondary">{{
                match.homeTeam.shortName
              }}</span>
              <span v-if="match.homeTeam.score" class="text-3xl font-bold">{{
                match.homeTeam.score
              }}</span>
            </div>
            <div
              class="bg-[#34383c] w-11 h-full flex items-center justify-center flex-col"
            >
              <span class="font-bold text-textSecondary">{{
                match.awayTeam.shortName
              }}</span>
              <span v-if="match.awayTeam.score" class="text-3xl font-bold">
                {{ match.awayTeam.score }}
              </span>
            </div>
          </div>

          <div class="flex items-center w-full">
            <div class="w-10 mx-4">
              <img :src="match.awayTeam.logo" alt="" />
            </div>
            <span class=" sm:block">
              
              {{ match.awayTeam.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parse } from "@vue/compiler-dom";
import axios from "axios";

export default {
  name: "Matches",
  data() {
    return {
      date: null,
      data: [],
      loading: false,
    };
  },
  mounted() {
    this.getMatches();
  },
  methods: {
    async getMatches() {
      this.loading = true;
      try {
        const response = await axios.get(
          "https://kind-gold-agouti-tutu.cyclic.app/api/bvb/fixture/" +
            this.date
        );
        this.data = response.data;
        this.date = parseFloat(this.data.date.split(" ")[1]);
        this.loading = false;
      } catch (error) {}
    },
  },
};
</script>
