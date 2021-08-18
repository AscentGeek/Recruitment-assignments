import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins:[
        createPersistedState()
    ],
    state: {
        projects: []
    },
    getters: {
        createdProjects(state){
            return state.projects;
        }
    },
    mutations: {
        addProject(state, item){
            const obj = {
                id: state.projects.length,
                comp: item.project.comp,
                name: item.project.name,
                used: item.project.used,
                date: item.project.date,
                dRange: item.project.dRange,
                cate: item.project.cate,
                brand: item.project.brand,
                bURL: item.project.bURL,
                enemy: item.enemy,
                se: item.se
            };
            state.projects.push(obj);
            // console.log(obj)
        },
        updateProject(state, item){
            for (let i=0; i<state.projects.length; i++){
                if(state.projects[i].id == item.id) {
                    state.projects[i] = item
                }
            }
        }
    },
    actions: {}
});