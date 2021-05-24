import BookList from './components/BookList'
import NavBar from './components/NavBar'
import ThemeContext from './contexts/ThemeContext'

const App = () => {
 
     return ( <div>
    <ThemeContext><NavBar/> </ThemeContext>
   <BookList/>
    </div> );
}
 
export default App;