import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UsuarioScreen from "./containers/Usuarios/screens/UsuarioScreen";
import { UsuariosContextProvider } from "./context/UsuariosContextProvider";

function App() {
  return (
    <UsuariosContextProvider>
      <UsuarioScreen />
    </UsuariosContextProvider>
  );
}

export default App;
