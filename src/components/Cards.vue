<template>
  <div>
    <div v-if="loading" class="py-10 mx-auto w-full max-w-7xl">
      <div
        role="status"
        class="h-[480px] space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center border rounded shadow md:p-6 dark:border-gray-700"
      >
        <div
          class="flex items-center justify-center w-[65%] h-full bg-gray-300 rounded dark:bg-gray-700 overflow-hidden"
        >
          <svg
            class="w-24 h-24 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path
              d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
            />
          </svg>
        </div>
        <div class="w-[35%] pr-8">
          <div
            class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"
          ></div>
          <div
            class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-4"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
          ></div>
          <div
            class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"
          ></div>
        </div>
      </div>
      <!--  -->
      <div class="flex justify-between py-8">
        <div
          role="status"
          class="h-[320px] w-[630px] space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center border rounded shadow md:p-6 dark:border-gray-700"
        >
          <div
            class="flex items-center justify-center w-[50%] h-full bg-gray-300 rounded dark:bg-gray-700"
          >
            <svg
              class="w-24 h-24 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path
                d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
              />
            </svg>
          </div>
          <div class="w-[35%] pr-8">
            <div
              class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-4"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"
            ></div>
          </div>
        </div>
        <div
          role="status"
          class="h-[320px] w-[630px] space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center border rounded shadow md:p-6 dark:border-gray-700"
        >
          <div
            class="flex items-center justify-center w-[50%] h-full bg-gray-300 rounded dark:bg-gray-700"
          >
            <svg
              class="w-24 h-24 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path
                d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
              />
            </svg>
          </div>
          <div class="w-[35%] pr-8">
            <div
              class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-4"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
            ></div>
            <div
              class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      v-else
      class="grid grid-cols-4 gap-6 py-10 px-10 mx-auto w-full max-w-7xl font-mono text-white"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="[index === 0 ? 'col-span-4' : 'col-span-4 md:col-span-2']"
      >
        <div
          @mouseover="reduceLineSize(index)"
          :class="[index === 0 ? 'h-[320px] md:h-[480px]' : 'h-[320px]']"
          class="flex w-full overflow-auto transition-all duration-[1600ms] bg-[#191e24] hover:shadow-2xl group px rounded-xl"
        >
          <div
            class="overflow-hidden z-0 h-full"
            :class="[index === 0 ? 'w-[50%] md:w-[65%]' : 'w-[50%]']"
          >
            <img
              class="w-full h-full transition-all group-hover:scale-125 duration-[1900ms] object-cover"
              :src="item.image"
              alt=""
            />
          </div>

          <div
            class="flex flex-col justify-between py-2 px-4"
            :class="[index === 0 ? 'w-[50%] md:w-[35%]' : 'w-[50%]']"
          >
            <div class="flex justify-between items-center">
              <span
                class="transition-all duration-1000"
                :class="[
                  'bg-[#ffd900]',
                  'block',
                  'h-1',
                  this.lines[index].lineSizeClass
                ]"
              ></span>
              <span class="text-base text-white text-end">
                {{ item.time }}</span
              >
            </div>

            <div class="flex flex-col gap-3">
              <h1
                :class="index === 0 ? 'text-3xl' : 'text-xl'"
                class="font-semibold ellipsis"
              >
                {{ item.title }}
              </h1>
              <p class="text-sm ellipsisdes">{{ item.description }}</p>
            </div>

            <div class="flex gap-4">
              <img class="w-6 h-6" :src="item.pub_image" alt="" />
              <span>{{ item.pub_name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['loading', 'items', 'lines'],
  data() {
    return {}
  },
  methods: {
    reduceLineSize(index) {
      this.lines[index].lineSizeClass = 'w-0'

      setTimeout(() => {
        this.lines[index].lineSizeClass = 'w-24'
      }, 800)
    }
  }
}
</script>
