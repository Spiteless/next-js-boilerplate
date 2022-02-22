import React, {useEffect, useReducer} from "react";
import findIndex from "lodash/findIndex";


const initialGlobal = () => {
  return {
      user: null,
  }
};

const GlobalContext = React.createContext(initialGlobal());

const reducer = (globalContext, action) => {

  const {type} = action;
  switch (type) {
      case "default":
          break;
  }
};

const GlobalContextProvider = (props) => {
    const {user} = props;
    const [globalContext,dispatch] = useReducer(reducer,initialGlobal);
    useEffect(() => {
        if(user){

        }
    },[user]);
    return (
        <GlobalContext.Provider value={{globalContext,globalDispatch:dispatch}}>{props.children}</GlobalContext.Provider>
    )
};


export default GlobalContextProvider;
export {GlobalContext};