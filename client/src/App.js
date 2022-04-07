import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from './components/Home'
import {Login} from './components/Login'
import {SignUp} from './components/SignUp'
import {NotFound} from './components/NotFound'
import { SettingGame } from "./components/SettingGame";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingresar" element={<Login />} />
        <Route path="/registrarme" element={<SignUp />} />
        <Route path="/configurarJuego" element={<SettingGame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;