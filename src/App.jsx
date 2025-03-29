import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Patient from './pages/Patient';
import Appointment from './pages/Appointment';
import Doctors from './pages/Doctors';
import Navbar from './components/layout/Navbar';
import MainMenu from './components/layout/MainMenu';

function App() {
  return (
    <div className='flex h-screen'>
      <Navbar />
      <div className='flex flex-1 overflow-y-auto'>
        <MainMenu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes> 
          </MainMenu>
      </div>
    </div>
  )
}

export default App;