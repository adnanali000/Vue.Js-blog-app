import showblog from './components/showblog'
import addblogs from './components/addblogs'
import login from './components/login'
import Dashboard from './components/Dashboard'
import blogDetail from './components/blogDetail'
import admin from './components/admin'

export default [
    
    { path: "/", 
            component: Dashboard , 
            children:[{ path: "/add", component: addblogs},
                      { path: "/show", component: showblog},
                      { path: "/show/:id" , component: blogDetail},
                      { path: "/admin" , component: admin}]
    },
   
    { path: "/login", component: login}
]