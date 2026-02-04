/**
Componente de Rodapé.
Exibe créditos e ano dinâmico.
 */
const Footer = () => {
  const anoAtual = new Date().getFullYear(); 

  return (
    <footer className="bg-dark text-secondary text-center py-4 mt-5 border-top border-secondary">
      <div className="container">
        <p>&copy; {anoAtual} - Trabalho 2 - TDS</p>
        <div className="d-flex justify-content-center gap-3">
          <i className="bi bi-github"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;