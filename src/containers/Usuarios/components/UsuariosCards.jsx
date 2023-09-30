import React, { useContext } from "react";
import CustomCards from "../../../components/CustomCards/CustomCards";
import { ORGANIZAR_COLUMNAS_CARDS } from "../utils/stylesUtils";
import { ObtenerUsuariosContext } from "../../../context/ObtenerUsuariosContext";

function UsuariosCards() {
  const usuarios = useContext(ObtenerUsuariosContext);

  return (
    <div>
      <div className={ORGANIZAR_COLUMNAS_CARDS} style={{ margin: "20px" }}>
        {usuarios?.map((usuario, index) => {
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
