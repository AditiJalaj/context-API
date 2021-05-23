import { createContext } from "react";
import NavBar from '../components/NavBar'

const DarkTheme =createContext()

const LightTheme= createContext()

export default function ThemeContext (){
   return (
    <div>
    <LightTheme.Provider value={{backgroundColor:"white", color:"black"}}>
    <DarkTheme.Provider value ={{backgroundColor:"black", color:"white"}}>
    <NavBar/>
    </DarkTheme.Provider>
    </LightTheme.Provider>
    </div>
   ) 
}

export {DarkTheme, LightTheme}