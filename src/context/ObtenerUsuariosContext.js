import { createContext, useReducer} from "react";
import reducer from "../reducers/Usuarios/reducer";

const UsuariosContext = createContext();

const UsuariosContextProvider = ({ children }) => {

  const [usuarios, dispatch] = useReducer(reducer, []);

  return (
    <UsuariosContext.Provider value={{usuarios, dispatch}}>
      {children}
    </UsuariosContext.Provider>
  );
};

export { UsuariosContext, UsuariosContextProvider };
