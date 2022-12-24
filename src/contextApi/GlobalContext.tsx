import React,{FC,createContext} from 'react'

const GlobalContextProvider = createContext({});

// Props for children
type Props = {
    children: React.ReactNode; 
}
const GlobalContextConsumer:FC<Props> = ({children}) => {
    return(
        <GlobalContextProvider.Provider value={{}}>
            {children}
        </GlobalContextProvider.Provider>
    )

}

export {
    GlobalContextProvider,
    GlobalContextConsumer
}
