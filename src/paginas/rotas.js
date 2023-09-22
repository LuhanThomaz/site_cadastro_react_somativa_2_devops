import { BrowserRouter, Route, Routes} from "react-router-dom";

import Cadastro from './Cadastro/index.js';
import Login from './Login/index.js';
import Principal from './Principal/index.js';

const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route exact={true} path="/" element={<Login/>}/>
        <Route exact={true} path="/Cadastro" element={<Cadastro/>}/>
        <Route exact={true} path="/Login" element={<Login/>}/>
        <Route exact={true} path="/Principal" element={<Principal/>}/>
        </Routes>
        </BrowserRouter>
        
    )
}

export default Rotas;