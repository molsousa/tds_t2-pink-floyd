import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AlbumPage from './pages/AlbumPage.jsx';
import CadastroForm from './components/CadastroForm.jsx';
import Navbar from './components/NavBar.jsx'; // Adicione esta linha
import Footer from './components/Footer.jsx'; // Adicione esta linha
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Adicione o Navbar aqui */}
      <main className="container-fluid"> {/* Container principal */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<AlbumPage />} />
          <Route path="/cadastro" element={<CadastroForm />} />
        </Routes>
      </main>
      <Footer /> {/* Adicione o Footer aqui */}
    </BrowserRouter>
  );
}

export default App;