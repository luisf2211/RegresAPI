import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UsuarioScreen from "./containers/Usuarios/screens/UsuarioScreen";
import { ObtenerUsuariosContextProvider } from "./context/ObtenerUsuariosContext";

function App() {
  return (
    <ObtenerUsuariosContextProvider>
      <UsuarioScreen />
    </ObtenerUsuariosContextProvider>
  );
}

export default App;
