import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

// const storage = {
//     fetch(){
//         const arr = [];
//         if(localStorage.length > 0){
//             for (let i = 0; i < localStorage.length; i++){
//                 if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//             }
//         }
//         return arr;
//     }
// };


export default new Vuex.Store({
    plugins:[
        createPersistedState()
    ],
    state: {
        // projects: storage.fetch()
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
                enemy: item.enemy
            };
            state.projects.push(obj);
            localStorage.setItem(item, JSON.stringify(obj));
        },
        updateProject(state, item){
            for (let i=0; i<state.projects.length; i++){
                if(state.projects[i].id == item.id) {
                    state.projects[i] = item
                }
            }
        },
        addProjectProperties(state, item, id){
            for (let i=0; i<state.projects.length; i++){
                if(state.projects[i].id == id) {
                    state.projects[i].push(item)
                }
            }
        }
    },
    actions: {}
});