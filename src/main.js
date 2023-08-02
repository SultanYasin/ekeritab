import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import i18n from "./Languages/i18n";

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);

library.add(fas, fab)
app.use(createPinia());
app.use(router);
app.use(i18n)

app.mount("#app");
