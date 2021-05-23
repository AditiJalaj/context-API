import  {DarkTheme, LightTheme} from '../contexts/ThemeContext'
import { useContext } from 'react'

const NavBar = () => {
    const light=useContext(LightTheme)
    console.log(light)  //giving undefined

    const dark=useContext(DarkTheme)
    console.log(dark) //giving undefined

   
    return ( 
        <nav>
        <h1>Context App</h1>
        <ul>
        <li style={dark}>Home</li>
        <li>Contact</li>
        <li>About</li>
        </ul>
        </nav>
     );
}
 
export default NavBar;