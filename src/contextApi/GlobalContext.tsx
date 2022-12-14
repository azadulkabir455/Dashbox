import React,{FC,createContext} from 'react'

const GlobalContextProvider = createContext({});

// Props for children
type Props = {
    children: JSX.Element
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
