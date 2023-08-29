import { createApp } from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import "vue-material/dist/theme/black-green-light.css";
import Directives from "../plugin/directives";

import io from "socket.io-client";
const socket = io("http://localhost:3000");

const app = createApp(App);

app.use(VueMaterial);
app.use(Directives);

app.config.globalProperties.$socket = socket;

app.mount("#app");
