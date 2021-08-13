import Vue from 'vue';
import VueRouter from 'vue-router';
import ProjectView from '../components/ProjectView'
import AddProjectView from '../components/AddProjectView'
import SEView from '../components/SEView'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/projects'
        },
        {
            path: '/projects',
            component: ProjectView,
        },
        {
            path: '/addproject',
            component: AddProjectView,
        },
        {
            path: '/se',
            component: SEView,
        }
    ]
})