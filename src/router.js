import { createRouter, createWebHistory } from "vue-router";

import News from "./views/News.vue";
import Table from "./views/Table.vue";
import Matches from "./views/Matches.vue";
import Streaming from "./views/Streaming.vue";
import Privacy from "./views/Privacy.vue";


const router = createRouter({
  mode:'history',
  history: createWebHistory(),
  routes: [
    { path: "/", name: "News", component: News },
    //{ path: "/news", name: "News", component: News },
    { path: "/table", name: "Table", component: Table },
    { path: "/matches", name: "Matches", component: Matches },
    { path: "/streaming", name: "Streaming", component: Streaming },
    { path: "/privacy", name: "Privacy", component: Privacy },
    
  ],
  redirect: "/",
});

export default router;
