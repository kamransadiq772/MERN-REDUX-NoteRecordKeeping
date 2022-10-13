import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LandingPage from './Screens/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyNotes from './Screens/MyNotes/MyNotes'
import RegisterPage from './Screens/Register/RegisterPage';
import LoginPage from './Screens/Login/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/mynotes' element={<MyNotes />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
