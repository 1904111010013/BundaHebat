import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Daftar from './pages/Daftar';
import Masuk from './pages/Masuk';
import LupaPassword from './pages/LupaPassword';
import Riwayat from './pages/Riwayat';
import Pemesanan from './pages/Pemesanan';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />} >
          <Route path='/' element={<Home />} />
          <Route path='/riwayat' element={<Riwayat />} />
          <Route path='/daftar' element={<Daftar />} />
          <Route path='/masuk' element={<Masuk />} />
          <Route path='/reset-password' element={<LupaPassword />} />
          <Route path='/pemesanan' element={<Pemesanan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
