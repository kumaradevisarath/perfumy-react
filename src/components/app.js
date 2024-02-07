import Navbar from './navbar';
import Search from './search';
import List from './list';
import About from './about';
import Footer from './footer';


function App(){
    return(
        <div>
        <Navbar></Navbar>
        <Search></Search>
        <List></List>
        <About></About>
        <Footer></Footer>
        </div>
    )
}
export default App