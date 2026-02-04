import React from 'react';

/**
Componente Reutilizável de Accordion.
Requisito: Recebe dados via Props (id, titulo, conteudo).
 */
const AccordionItem = ({ id, titulo, conteudo }) => {
  return (
    <div className="accordion-item bg-dark text-white border-secondary">
      <h2 className="accordion-header">
        <button 
          className="accordion-button collapsed bg-dark text-white" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target={`#collapse-${id}`}
        >
          {titulo}
        </button>
      </h2>
      <div id={`collapse-${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {conteudo}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;