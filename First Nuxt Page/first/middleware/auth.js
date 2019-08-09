
export default function ({ store, redirect, route}) {
    // If the user is not authenticated
      if (!store.state.user.user) {
        if(route.path === '/Notas/Notas'){
          redirect('/');
        }
      }else if (store.state.user.user){
        if(route.path === '/'){
          window.location = '/Notas/Notas';
        }
      }
    
  }