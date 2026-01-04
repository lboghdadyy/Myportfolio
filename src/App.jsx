import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import './App.css'
import HeroPage from './components/HeroPage'
import AboutME from './components/AboutMe/AboutMe'
import Links from './components/Links/Links'



export default function Zab() 
{

  const [page, setpage] = useState("Home");

  return (<><NavBar setpage={setpage}/>
    {page == "Home" && <HeroPage />}
    {page == "Aboutme" && <AboutME />}
    {page == "Links" && <Links />}
    </>
  )
}
