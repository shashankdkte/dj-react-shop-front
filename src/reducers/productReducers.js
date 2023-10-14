import {
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,PRODUCT_DETAIL_SUCCESS,PRODUCT_DETAIL_FAIL

} from '../constants/productConstants';


export const productListReducer = (state = { products: [] }, action) => {
  
  switch (action.type)
  {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,loading:true, products:[]
      }
    case PRODUCT_LIST_SUCCESS:
      console.log(action.payload)
      return {
        ...state,loading:false, products:action.payload
      }
      
     case PRODUCT_LIST_FAIL:
      return {
        ...state,loading:false, error:action.payload
      }
    
    default:
      return state
  }
}

export const productDetailReducer = (state = { product: {review:[]} }, action) => {
  
  switch (action.type)
  {
    case PRODUCT_DETAIL_REQUEST:
      return {
        ...state,loading:true,
      }
    case PRODUCT_DETAIL_SUCCESS:
      console.log(action.payload)
      return {
        ...state,loading:false, product:action.payload
      }
      
     case PRODUCT_DETAIL_FAIL:
      return {
        ...state,loading:false, error:action.payload
      }
    
    default:
      return state
  }
}