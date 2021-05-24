import {  createContext } from "react";
import BookList from "../components/BookList";
import NavBar from '../components/NavBar'

const DarkTheme =createContext()
const LightTheme= createContext()

export default function ThemeContext (props){
   return (
    <div>
    <LightTheme.Provider value={{backgroundColor:"grey", color:"black"}}>
    <DarkTheme.Provider value ={{backgroundColor:"black", color:"white"}}>
    {props.children}
    </DarkTheme.Provider>
    </LightTheme.Provider>
    </div>
   ) 
}

export {DarkTheme, LightTheme}