import React, { useContext } from "react";
import CustomCards from "../../../components/CustomCards/CustomCards";
import { ORGANIZAR_COLUMNAS_CARDS } from "../utils/stylesUtils";
import { UsuariosContext } from "../../../context/ObtenerUsuariosContext";
import PaginationCards from "./PaginationCards";

function UsuariosCards() {
  const { usuarios } = useContext(UsuariosContext);

  return (
    <div style={{marginBottom: '10px'}} >
      <PaginationCards />
      <div className={ORGANIZAR_COLUMNAS_CARDS} style={{ margin: "20px" }}>
        {usuarios.usuarios?.map((usuario, index) => {
          return (
            <CustomCards
              key={index}
              cardTitle={`Usuario: ${usuario.first_name} ${usuario.last_name}`}
              cardText={`Email: ${usuario.email}`}
              avatar={`${usuario.avatar}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UsuariosCards;
