export const state = () => (
    {
        notas: []
    })



    export const mutations = {

      add( state , nota  ){
          state.notas.push({
             encabezado: nota.encabezado,
             cuerpo: nota.cuerpo,
             pieDePagina: nota.pieDePagina,
             fecha: nota.fecha
          })
      },
      update(){},
      delete(){}


    }