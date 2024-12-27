import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './Header'
import MainPage from './MainPage'
import Features from './Features'
import Enterprice from './Enterprice'
import Support from './Support'


function App() {



   
    
            
    return(

       

        <Router>

        <Header/>


        <Routes>

        <Route index element ={<MainPage/>}/>      
        <Route path='features' element={<Features/>}/>       
        <Route path='enterprice' element={<Enterprice/>}/>       
        <Route path='support' element={<Support/>}/>       
        </Routes>

        
        </Router>


       
        
       

    )

  
}


export default App
