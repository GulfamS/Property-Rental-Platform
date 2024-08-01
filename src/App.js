import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import BookaHome from './components/BookaHome';
import Cart from './components/Cart';

const App =()=> (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/bookahome" element={<BookaHome/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
)
 

export default App;
