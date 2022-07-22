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

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();  
})

export default router
