import React, {createContext,useContext,useReducer} from 'react'

export const DataLayerContext = createContext();
export const DataLayer = ({reducer,initialState ,childern}) =>(
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {childern}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);