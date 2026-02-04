/**
 * Componente de Rodapé.
 * Documentação: Exibe créditos e ano dinâmico (JS no JSX).
 */
const Footer = () => {
  const anoAtual = new Date().getFullYear(); // JS no JSX

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