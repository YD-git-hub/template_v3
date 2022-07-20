import { createApp } from 'vue'
import {createPinia } from "pinia"
import App from './App.vue'
import router from "./router"
import "./assets/less/tailwind.less"
import "./assets/less/common.less"

import _ from "lodash"

createApp(App).use(router).use(createPinia()).mount('#app')
