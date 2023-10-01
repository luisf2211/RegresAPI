import React, { useContext, useEffect, useState } from "react";
import { UsuariosContext } from "../../../context/UsuariosContextProvider";
import axios from "axios";

function PaginationCards() {
  const { dispatch } = useContext(UsuariosContext);
  const [pages, setPages] = useState([]);
  const [usuariosData, setUsuariosData] = useState();
  const totalPages = [];

  const [pagination, setPagination] = useState({
    page: "",
  });

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${pagination.page}`)
      .then((data) => {
        setPages([data.data.total_pages]);
        setUsuariosData(data.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [pagination]);

  useEffect(() => {
    dispatch({ type: "AGREGAR_USUARIOS", data: usuariosData });
  }, [dispatch, usuariosData]);

  while (totalPages.length < pages) {
    totalPages.push(totalPages.length + 1);
  }

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <span style={{ marginRight: "10px" }}>Resultados:</span>
        <select
          onChange={(e) =>
            setPagination({ ...pagination, page: e.target.value })
          }
          style={{
            background: "#282C34",
            color: "white",
            padding: "5px 20px 5px 20px",
            borderRadius: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <option defaultValue={""}>Páginas</option>
          {totalPages.map((pagina, index) => {
            return (
              <option key={index} value={pagina}>
                {" "}
                {pagina}{" "}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default PaginationCards;
