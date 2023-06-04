import { GetData, Selected_Products, RemoveSelectedProducts, AddToCart } from "../Constants/Action-Types"

const initialState = {

  product: [],
  Carts: [],
  cartQuantity: 0,
}

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GetData:
      return { ...state, product: payload }

    case AddToCart:
      let myCart = [...state.Carts];

      if (myCart.length == 0) {
        myCart.push({ ...payload, count: 1 });
      }
      else {
        var checkProductExist = myCart.filter((data, index) => {

          return data.id == payload.id;
        })
        if (checkProductExist.length > 0) {
          var myArray = myCart.map((elemment) => {

            if (elemment.id == payload.id) {
              return { ...elemment, count: elemment.count + 1 }
            }
            else {
              return elemment;
            }

          });

          return { ...state, Carts: myArray };

        }
        else {
          myCart.push({ ...payload, count: 1 });

        }

      }

      return { ...state, Carts: myCart };



    default:
      return state
  }
}

  export const SelectedProductReducer = (state = {}, { type, payload }) => {

    switch (type) {

      case Selected_Products:
        return { ...state, ...payload }

      case RemoveSelectedProducts:
        return {}

      default:
        return state
    }

  }



  // case AddtoCart:

  // let myobje = [];

  // if(state.cart.length == 0)
  // {

  //   myobje.push(payload);
  // }
  // else
  // {
  //   state.cart

  // }

  // return {...state, currentSelectItem: payload}
