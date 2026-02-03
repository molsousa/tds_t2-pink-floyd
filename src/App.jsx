import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AlbumPage from './pages/AlbumPage';
import CadastroForm from './components/CadastroForm.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar poderia entrar aqui */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rota dinâmica para reutilizar o componente AlbumPage */}
        <Route path="/album/:id" element={<AlbumPage />} />

        <Route path="/cadastro" element={<CadastroForm />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;