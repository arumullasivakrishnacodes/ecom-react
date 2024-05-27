import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import PLP from './Pages/PLP';
import PDP from './Pages/PDP';
import NotFound from './Components/NotFound/NotFound';
import Wishlist from './Components/Wishlist/Wishlist';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/shop' element={<PLP />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/product/:id' element={<PDP />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
