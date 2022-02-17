import { ACCIONES } from "../actions/menuAction";
import AlertSwal from "../components/alertSwal"

export const initialState = {
  platos: [
  ],
  menu: [],
  platosVeganos:0,
  platosNoVeganos:0,
  acumulativoPrecioMenu:0,
  acumulativoTiempoMenu:0,
  acumulativoHealtScoreMenu:0,

};

export function menuReducer(state, accion) {
  switch (accion.type) {

    case ACCIONES.AGREGAR: {
      let newItem = state.platos.find(
        (plato) => plato.id === accion.payload
      );
      console.log(newItem);

      let itemEnMenu = state.menu.find((item) => item.id === newItem.id);
      
      itemEnMenu ?
          (
              AlertSwal("error", "¡Ups...!", "El plato ya existe en el menú", "Cerrar", "")
          ) :
          (
            newItem.vegan ? 
            (
                state.platosVeganos < 2 ?
                (
                    AlertSwal("success", "¡Felicidades!", "El plato fue agregado al menú", "Cerrar", "")
                ):
                (
                    AlertSwal("error", "¡Ups...!", "No se puede agregar el plato al menú, ya se ha ocupado la capacidad total para los platos veganos", "Cerrar", "")
                )
            ) : 
            (
                state.platosNoVeganos < 2 ?
                (
                    AlertSwal("success", "¡Felicidades!", "El plato fue agregado al menú", "Cerrar", "")
                ):
                (
                    AlertSwal("error", "¡Ups...!", "No se puede agregar el plato al menú, ya se ha ocupado la capacidad total para los platos no veganos", "Cerrar", "")
                )
            ) 
          )

      return itemEnMenu ?
          (
              state
          ) :
          (
              newItem.vegan ?
                  (
                      state.platosVeganos >= 2 ?
                          (
                              state
                          ):
                          ({
                                  ...state,
                                  menu: [...state.menu, {
                                      ...newItem,
                                      quantity: 1
                                  }],
                                  platosVeganos: + state.platosVeganos + 1,
                                  acumulativoPrecioMenu: state.acumulativoPrecioMenu + newItem.pricePerServing,
                                  acumulativoTiempoMenu: state.acumulativoTiempoMenu + newItem.readyInMinutes,
                                  acumulativoHealtScoreMenu: state.acumulativoHealtScoreMenu + newItem.healthScore,
                              }
                          )    
                  ):
                  (
                        state.platosNoVeganos >= 2 ?
                            (
                                state
                            ):
                            ({
                                    ...state,
                                    menu: [...state.menu, {
                                        ...newItem,
                                        quantity: 1
                                    }],
                                    platosNoVeganos: + state.platosNoVeganos + 1,
                                    acumulativoPrecioMenu: state.acumulativoPrecioMenu + newItem.pricePerServing,
                                    acumulativoTiempoMenu: state.acumulativoTiempoMenu + newItem.readyInMinutes,
                                    acumulativoHealtScoreMenu: state.acumulativoHealtScoreMenu + newItem.healthScore,
                                }
                            )  
                  )
          );
      }

    case ACCIONES.ELIMINAR_ITEM: {
      let itemToDelete = state.menu.find((item) => item.id === accion.payload);

      return {
            ...state,
            menu: state.menu.filter((item) => item.id !== accion.payload),
          };
    }

    case ACCIONES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        menu: state.menu.filter((item) => item.id !== accion.payload),
      };
    }
    case ACCIONES.LIMPIAR_MENU:
      return initialState;
    default:
      return state;
  }
}