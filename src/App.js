import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UsuarioScreen from "./containers/Usuarios/screens/UsuarioScreen";
import { UsuariosContextProvider } from "./context/ObtenerUsuariosContext";

function App() {
  return (
    <UsuariosContextProvider>
      <UsuarioScreen />
    </UsuariosContextProvider>
  );
}

export default App;
