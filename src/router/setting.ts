import Nav_Home from '../views/Nav_Home.vue'
let pubics = [
  {
        path: '/',
        name: 'Nav_Home',
        component: Nav_Home, //导航
        redirect: '/index',
        children: [
          {
            path: '/index',
            name: 'Home_index',
            component: () => import("@/views/Home/Index/Home_index.vue"),
          },
          {
            path: '/News',
            name: 'Home_News',
            component: () => import("@/views/Home/News/Home_News.vue"),
          },
        ]
    },
    {
        path: '/News_Datail',
        name: 'News_Datail',
        component: () => import("@/views/Home/News/News_Datail.vue"),
        children:[]
    }
]
export default pubics