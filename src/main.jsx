import { createRoot } from 'react-dom/client'
import './index.css'
import Zab from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroPage from './components/HeroPage.jsx';

let which_one = 0;

createRoot(document.getElementById('container')).render(<Zab />)
createRoot(document.getElementById('HeroPage')).render(<HeroPage />)

export default which_one;