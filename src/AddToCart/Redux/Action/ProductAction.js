import { Decrement, GetData, Increment, Selected_Products,RemoveSelectedProducts, AddToCart } from "../Constants/Action-Types";

// export const IncrementAction = () => ({
//   type: Increment,
  
// })

// export const DecrementAction = () => ({
//     type: Decrement,
    
//   })


  export const GetProductData = (products) => {
    return{
    type: GetData,
    payload: products 
    }
  }

  export const SelectedProductsData = (product) => {
    return{
    type: Selected_Products,
    payload : product
    }
  }

  export const AddToCartData = (payload) => ({
    type: AddToCart,
    payload
  })

  export const RemovedProductsData = () => {
    return{
    type: RemoveSelectedProducts,
    }
  }



  