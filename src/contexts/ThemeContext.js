import {  createContext } from "react";
import BookList from "../components/BookList";
import NavBar from '../components/NavBar'

const DarkTheme =createContext()
const LightTheme= createContext()
const isLightTheme=true

export default function ThemeContext (props){
   return (
    <div>
    <LightTheme.Provider value={{backgroundColor:"grey", color:"black"}, {isLightTheme:isLightTheme}}>
    <DarkTheme.Provider value ={{backgroundColor:"black", color:"white"}, {isLightTheme:!isLightTheme}}>
    {props.children}
    </DarkTheme.Provider>
    </LightTheme.Provider>
    </div>
   ) 
}

export {DarkTheme, LightTheme}