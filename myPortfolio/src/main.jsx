import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Zab from './App.jsx'
// import PicDiv from './components/PicDiv.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';

createRoot(document.getElementById('container')).render(<Zab />)

// createRoot(document.getElementById("PicDiv")).render
// {
//   <StrictMode>
//     <PicDiv />
//   </StrictMode>
// }
