import { createApp } from 'vue'
import {createPinia } from "pinia"
import App from './App.vue'
import router from "./router"
import "./assets/css/tailwind.css"
import _ from "lodash"

createApp(App).use(router).use(createPinia()).mount('#app')
