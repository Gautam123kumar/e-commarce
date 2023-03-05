// create Context
import axios from "axios";
import {createContext, useContext, useEffect, useReducer} from "react"
import reducer from "../reducer/productReducer"
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products"

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[]
}

const AppProvider = ({children})=>{
    const [start,dipatch] = useReducer(reducer,initialState)

    const getProducts =async(url)=>{
        dipatch({type:"SET_LOADING"})
        try{
            const res = await axios.get(url)
            const products = await res.data
            dipatch({type:"SET_API_DATA", payload:products})
        }catch(error){
            dipatch({type:"API_ERROR"})
        }
        
    }
    useEffect(() => {
      getProducts(API);
    }, [])
    


    return <AppContext.Provider value={{...start}}>{children}</AppContext.Provider>
}

// custom hooks
const useProductCotext = ()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,useProductCotext}; 