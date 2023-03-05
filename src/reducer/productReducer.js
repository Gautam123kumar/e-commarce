const ProductReducer = (state,action)=>{
   
    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            }
            break;
        case "SET_API_DATA":
            const featureData = action.payload.filter((curEle)=>{
                return curEle.featured === true
            })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featureProducts:featureData
            }
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true
            }
            break;

    
        default:
            return state
            break;
    }
}

export default ProductReducer