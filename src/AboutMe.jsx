import { StrictMode } from "react";
import NavBar from "./components/NavBar";
import './AboutMe.css'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Zab from "./App";


createRoot(document.getElementById('container').render(
    <StrictMode>
        <Zab></Zab>
    </StrictMode>
))