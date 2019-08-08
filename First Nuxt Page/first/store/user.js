export const state = () => (
    {
        user: []
    })



    export const mutations = {
      add( state , user  ){
          state.user = JSON.parse(JSON.stringify(user));
      }
    }