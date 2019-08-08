
export default function ({ store, redirect}) {
    // If the user is not authenticated
    if (!store.state.user.user) {
      redirect('/');
    }else if (store.state.user.user){
        redirect('/Notas/Notas');
    }
  }