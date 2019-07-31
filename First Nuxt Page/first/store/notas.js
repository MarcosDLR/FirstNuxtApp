export const state = () => (
    {
        increment: 0,
        notas: []
    })



    export const mutations = {

      add( state , nota  ){
           state.increment++
          state.notas.push({
             id: state.increment,
             encabezado: nota.encabezado,
             cuerpo: nota.cuerpo,
             pieDePagina: nota.pieDePagina,
             fecha: nota.fecha
          })
      },
      update(){},
      delete(state, {nota}){
        state.notas.splice(state.notas.indexOf(u => u.notas == nota), 1)
      }


    }