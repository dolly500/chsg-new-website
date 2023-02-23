import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
