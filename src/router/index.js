import Vue from 'vue';
import VueRouter from 'vue-router';
import ProjectView from '../components/ProjectView'
import AddProjectView from '../components/AddProjectView'

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
            name: 'projects',
            component: ProjectView,
        },
        {
            path: '/addproject',
            name: 'addproject',
            component: AddProjectView,
        }
    ]
})