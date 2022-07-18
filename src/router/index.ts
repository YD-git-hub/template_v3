import {createRouter,createWebHashHistory,createWebHistory,RouteRecordRaw} from "vue-router"
import setting from './setting'


const routes:Array<RouteRecordRaw> = [
  ...setting
]
// const routes=setting
const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
