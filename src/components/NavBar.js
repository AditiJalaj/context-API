import  {DarkTheme, LightTheme} from '../contexts/ThemeContext'
import { useContext } from 'react'

const NavBar = () => {
    const light=useContext(LightTheme)
     
    const dark=useContext(DarkTheme)
    

    return ( 
        <nav>
        <h1>Context App</h1>
        <ul>
        <li style={dark}>Home</li>
        <li style ={light}>Contact</li>
        <li>About</li>
        </ul>
        </nav>
     );
}
 
export default NavBar;