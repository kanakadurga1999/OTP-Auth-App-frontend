

import './App.css';
import { Route, Routes } from 'react-router-dom';
import EmailForm from './components/EmailForm';
import OtpForm from './components/OtpForm';
import Welcome from './components/Welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<EmailForm/>}/>
      <Route path='/verify-otp' element={<OtpForm/>}/>
      <Route path='/welcome-page' element={<Welcome />}/>
    </Routes>
  );
}

export default App;
