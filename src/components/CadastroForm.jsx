import React, { useState, useEffect } from 'react';
import styles from './CadastroForm.module.css'
import logoBanda from '../assets/image/Pink-Floyd_The-Final-Cut.jpg';
import fundo from '../assets/image/the_final_cut_wpp.png';

const containerStyle = {
    backgroundImage: `url(${fundo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Para efeito parallax (opcional)
    minHeight: '100vh',
    width: '100%'
};

// --- Requisito: Custom Hook (Lógica de envio com Loading) ---
const useSubmitForm = () => {
  const [loading, setLoading] = useState(false);
  const submit = async (data) => { 
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        console.log("Payload enviado:", data);
        resolve(true);
      }, 1500);
    });
  };
  return { submit, loading };
};

// --- Requisito: Componente com Props (Variável comum, State e Função) ---
const CardInformativo = ({ msg, lista, limpar }) => (
  <div className="alert alert-info shadow-sm mt-3 w-100">
    <h6>{msg}</h6>
    <p className="small">Cadastros na sessão: {lista.length}</p>
    {lista.length > 0 && (
      <button onClick={limpar} className="btn btn-sm btn-outline-primary">Limpar Sessão</button>
    )}
  </div>
);

const CadastroForm = () => {
  // Estados: Objeto, Array, Booleano e Número
  const [formData, setFormData] = useState({
    usuario: '',
    genero: '3',
    email: '',
    fav_msc: '',
    fav_alb: '---',
    mem_band: '',
    nota_band: 3
  });
  const [historico, setHistorico] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [segundos, setSegundos] = useState(0);

  const { submit, loading } = useSubmitForm();

  // Requisito: useEffect 
  useEffect(() => {
    const interval = setInterval(() => setSegundos(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const albuns = [
    "---", "The Piper at the Gates of Dawn", "A Saucerful of Secrets", "More", "Ummagumma",
    "Atom Heart Mother", "Meddle", "Obscured by Clouds", "The Dark Side of the Moon",
    "Wish You Were Here", "Animals", "The Wall", "The Final Cut", "A Momentary Lapse of Reason",
    "The Division Bell", "The Endless River"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.usuario || !formData.email) return alert("Preencha os campos obrigatórios!");
    if (formData.fav_alb === "---") return alert("Selecione um álbum!");

    const sucesso = await submit(formData);
    if (sucesso) {
      setHistorico([...historico, formData.usuario]);
      alert(`Sucesso! Você levou ${segundos}s para preencher.`);
    }
  };

  return (
    <div style={containerStyle} className="container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">

      <header className="text-center mb-4 text-white">
        <img src={logoBanda} alt="Pink Floyd" className="img-fluid mb-2" style={{ maxHeight: '100px' }} />
        <h1 className="display-5 fw-bold">Cadastro</h1>
        <p className="lead">Tempo de sessão: {segundos}s</p>
      </header>

      {/* Formulário Responsivo com CSS Dinâmico */}
      <form 
        onSubmit={handleSubmit}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`${styles.formBase} ${isFocused ? styles.formActive : ''} p-4 shadow`}
        >
        <div className="row g-3">
          {/* Nome e Gênero (Lado a lado no desktop, empilhado no mobile) */}
          <div className="col-12 col-md-7">
            <label className="form-label text-light fw-bold">Usuário*</label>
            <input 
              type="text" name="usuario" className="form-control" 
              placeholder="Seu nome" onChange={handleChange} required 
              />
          </div>
          <div className="col-12 col-md-5">
            <label className="form-label text-light fw-bold">Gênero</label>
            <select name="genero" className="form-select" onChange={handleChange} value={formData.genero}>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
              <option value="3">Outro / Não dizer</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label text-light fw-bold">Email*</label>
            <input type="email" name="email" className="form-control" placeholder="email@exemplo.com" onChange={handleChange} required />
          </div>

          <div className="col-12">
            <label className="form-label text-light fw-bold">Música Favorita</label>
            <input type="text" name="fav_msc" className="form-control" onChange={handleChange} />
          </div>

          <div className="col-12">
            <label className="form-label text-light fw-bold">Álbum Favorito* (Loop)</label>
            <select name="fav_alb" className="form-select" onChange={handleChange} value={formData.fav_alb}>
              {albuns.map((album, idx) => (
                <option key={idx} value={album}>{album}</option>
              ))}
            </select>
          </div>

          <div className="col-12">
            <label className="form-label text-light fw-bold">Memória com a Banda (Textarea)</label>
            <textarea name="mem_band" className="form-control" rows="3" onChange={handleChange}></textarea>
          </div>

          <div className="col-12">
            <label className="form-label text-light fw-bold">Sua nota: {formData.nota_band}</label>
            <input 
              type="range" name="nota_band" className="form-range" 
              min="1" max="5" step="1" value={formData.nota_band} 
              onChange={handleChange} 
              />
          </div>

          <div className="col-12 mt-4">
            <button 
              type="submit" 
              disabled={loading}
              className={`btn w-100 fw-bold ${styles.btnSubmit}`}
              >
              {loading ? "ENVIANDO..." : "FINALIZAR CADASTRO"}
            </button>
          </div>
        </div>
      </form>

      {/* Renderização Condicional do Resumo */}
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <CardInformativo 
          msg="Painel de Monitoramento" 
          lista={historico} 
          limpar={() => setHistorico([])} 
          />
      </div>
    </div>
  );
};

export default CadastroForm;