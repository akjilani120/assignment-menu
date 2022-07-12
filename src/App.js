import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Menu from './Page/Menu/Menu';
import Contact from './Page/Contact/Contact';
import Rservation from './Page/Reservation/Rservation';
import NotFOundPage from './Page/NotFoundPage/NotFOundPage';

function App() {
  return (
    <div className="">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/menu' element={<Menu/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/reservation' element={<Rservation/>} />
      <Route path='*' element={<NotFOundPage/>} />
     </Routes>
    </div>
  );
}

export default App;
