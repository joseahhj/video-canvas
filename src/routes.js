/**
 * @ 路由跳转
 * @author shan-er
 */
import Vue from 'vue';
import Router from 'vue-router';
const homePage = () =>
    import ('./views/home.vue');
const aboutPage = () =>
    import ('./views/about.vue');
const dividePage = () =>
    import ('./views/divide.vue');
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: homePage
    }, {
        path: '/about',
        name: 'flash',
        component: aboutPage
    }, {
        path: '/divide',
        name: 'divide',
        component: dividePage
    }]
});