import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ObtenerUsuariosContext = createContext();

const ObtenerUsuariosContextProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=1`)
      .then((data) => {
        setUsuarios(data.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <ObtenerUsuariosContext.Provider value={usuarios}>
      {children}
    </ObtenerUsuariosContext.Provider>
  );
};

export { ObtenerUsuariosContext, ObtenerUsuariosContextProvider };
