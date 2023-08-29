import { createApp } from "vue";
import App from "./App.vue";
import Vue3Material from "vue3-material";
import Directives from "@/plugin/directives";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const app = createApp(App);
app.use(Directives);
app.use(Vue3Material);

app.config.globalProperties.$socket = socket;

app.mount("#app");
