import { auth } from '~/plugins/firebase'


export default context =>{
const {store} = context;
    return new Promise((resolve, reject) => {
        auth.onAuthStateChanged((user) => {
            if(user){
               return resolve(store.commit('user/add', user));
            }else{
                return resolve(store.commit('user/add', null));
            }
        })
    })
}

