export const state = () => (
    {
        notas: [{
            encabezado: '',
            cuerpo: '',
            pieDePagina: '',
            fecha: ''
        }]
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