// import logo from './logo.svg';
import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Addproducts from './Components/Addproduct';
import Getproducts from './Components/Getproduct';
// import Navbar from './Components/Navbar';
import Notfound from './Components/NotFound';
import Makepayment from './Components/Makepayment';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Return from './Components/Return';
import Help from './Components/Help';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import RequireAuth from './Components/RequireAuth';


function App() {
  
  return (
    <Router>
    <div className="App">
      
      
      <Routes>
        <Route path='/signup'element ={<Signup/>}/>
        <Route path='/signin' element ={<Signin/>}/>
        <Route path='*' element={<Notfound/>} />
        <Route path='/returns' element={<Return/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/addproduct'element ={
        <RequireAuth>
        <Addproducts/>
        </RequireAuth>}/>
      
        <Route path='/'element ={<Getproducts/>}/>
        <Route path ="/makepayment" element ={<Makepayment/>}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
