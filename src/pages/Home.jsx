import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Requisito: CSS Modules

const Home = () => {
  
    
    // Interpolar variáveis (Array e Objeto) - [Requisito: Interpolar 3 tipos]
    const bandName = "Pink Floyd"; // Comum
    const bandInfo = { formed: 1965, origin: "Londres" }; // Objeto
    const curiosities = [ // Array
        { id: 1, title: "Dark Side & Wish You Were Here", text: "SO álbum The Dark Side of the Moon (1973) consolidou o sucesso do Pink Floyd com temas profundos sobre morte e desgaste emocional, permanecendo por mais de dez anos nas paradas dos EUA." },
        { id: 2, title: "Roger Waters", text: "Roger Waters, influenciado por sua formação familiar comunista e pela morte de seu pai na guerra, sempre expressou ideais políticos e de defesa da democracia.Em 2019, ele se manifestou publicamente contra a extradição de Julian Assange, fundador do WikiLeaks, preso em Londres." },
        { id: 3, title: "Pompeia", text: "O Pink Floyd realizou um dos shows mais icônicos da história do rock: Live at Pompeii.Gravado em um anfiteatro romano na antiga cidade de Pompeia destruída pelo vulcão Vesúvio, o concerto foi feito sem público, marcando um momento artístico único e inovador." }
    ];

    // State para renderização condicional - [Requisito: useState]
    const [showMembers, setShowMembers] = useState(true);

    // Função para alternar visibilidade - [Requisito: Eventos]
    const toggleMembers = () => {
        setShowMembers(!showMembers);
    };

    // Estilo de fundo dinâmico
    const fundoStyle = {
        backgroundImage: `url('./src/assets/image/tds.PNG')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        //minHeight: '10%',
       // paddingTop: '100%'
    };

  
    return (
        <div style={fundoStyle}> 
            {/* Usando a classe 'fundo' que já tinha no CSS original */}
            <div className="container mb-5 fundo">
                
                {/* Código JS no JSX e Interpolação */}
                <h1 className={styles.titleMain}>{bandName}</h1>
                
                <ul>
                    <li> Pink Floyd foi uma banda britânica de rock, surgida em 1965, que esteve na vanguarda do movimento psicodélico
                     dos anos 1960 e depois ajudou a popularizar o álbum conceitual para o grande público na década de 1970.</li>
                    <li>A banda foi formada em 1965. Eles passaram por alguns nomes antes de adotarem “Pink Floyd”, inspirado nos
                     músicos de blues Pink Anderson e Floyd Council. Sob a liderança de Syd Barrett, o grupo se tornou um marco do
                     underground britânico.</li>
                    <li>Pioneiros do psicodélico e progressivo.</li>
                </ul>

                <Link to="/cadastro">
                    <button className="btn btn-danger">
                        <i className="bi bi-person-add"></i> Cadastro
                    </button>
                </Link>

                <h2 className="mt-5 text-secondary">Curiosidades </h2>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {/*  Reuso de componente através de loop */}
                    {curiosities.map((item) => (
                        <div className="accordion-item bg-dark text-white" key={item.id}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-${item.id}`}>
                                    {item.title}
                                </button>
                            </h2>
                            <div id={`flush-${item.id}`} className="accordion-collapse collapse">
                                <div className="accordion-body">{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="mt-5 text-secondary">Membros</h2>
                <button onClick={toggleMembers} className="btn btn-sm btn-outline-light mb-2">
                    {showMembers ? "Ocultar Tabela" : "Mostrar Tabela"}
                </button>

                {/* Requisito: Renderização condicional usando state */}
                {showMembers && (
                    <div className="table-responsive">
                        <table className="table table-dark table-striped table-bordered">
                            <thead><tr><th>Nome</th><th>Instrumento</th></tr></thead>
                            <tbody>
                                <tr><td>David Gilmour</td><td>Guitarra</td></tr>
                                <tr><td>Roger Waters</td><td>Baixo</td></tr>
                                <tr><td>Richard Wright</td><td>Teclado</td></tr>
                                <tr><td>Nick Mason</td><td>Bateria</td></tr>
                            </tbody>
                        </table>
                    </div>
                )}

                <h2 className="mt-5 text-secondary">Discografia</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 pb-5">
                    <div className="col">
                        <div className="card bg-dark text-white h-100">
                            {/* Requisito: Importar imagem */}
                            <img src="./src/assets/image/Pink-Floyd_Animals-orig.jpg" className="card-img-top" alt="Animals" />
                            <div className="card-body">
                                <h5 className="card-title">Animals</h5>
                                <Link to="/animals" className="btn btn-primary w-100">Mais informações</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-dark text-white h-100">
                            <img src="./src/assets/image/Pink-Floyd_The-Dark-Side-of-the-Moon.jpg" className="card-img-top" alt="TDSOTM" />
                            <div className="card-body">
                                <h5 className="card-title">Dark Side of the Moon</h5>
                                <Link to="/tdsmoon" className="btn btn-primary w-100">Mais informações</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;