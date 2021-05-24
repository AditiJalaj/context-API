import  {DarkTheme, LightTheme} from '../contexts/ThemeContext'
import { useContext } from 'react'

const NavBar = () => {
    const light=useContext(LightTheme)  //a
    const dark=useContext(DarkTheme)    //b
   // const mode= useContext(LightTheme)  //c
    const mode=useContext(DarkTheme)    //d

    //explanation 
    /*  a has 
    Context:   {isLightTheme: true}
     isLightTheme: true

     //b has -
    Context :  {isLightTheme: false}
    isLightTheme:   false

    //d has - 
    Context :   {isLightTheme: false}
     isLightTheme :    false
    */

    return ( 
        <nav>
        <h1>Context App</h1>
        <ul style={ mode ? dark : light}>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        </ul>
        </nav>
     );
}
 
export default NavBar;