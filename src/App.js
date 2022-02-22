import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import Login from './pages/Login';
import MoviesListCategories from './pages/MoviesListCategories';
import NotFound from './pages/NotFound';


function App() {
  return (
   <BrowserRouter>
        <Routes>
          <Route path='/notfound' element={<NotFound/>}/>
          <Route path='/'element={<Home/>} />
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/movies/:category' element={<MoviesListCategories/>}/>
        </Routes>
   </BrowserRouter>
  );
}

export default App;
