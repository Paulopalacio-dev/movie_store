import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Movies from './pages/movies/Movies';
import Cart from './pages/cart/Cart';
import Search from './pages/search/Search';



function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Header/>
        <Routes>
          <Route path="/" element={<Movies/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
