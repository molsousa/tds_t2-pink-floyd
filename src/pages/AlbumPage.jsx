import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

/**
Componente reutilizável para páginas de álbum.
Recebe Props ou carrega dados baseados na rota.
 */
const AlbumPage = () => {
    const { id } = useParams(); // Pega o album animals ou tdsmoon da URL
    
    
    const albumsData = {
        animals: {
            title: "Animals",
            desc: "Animals é o décimo álbum de estúdio da banda inglesa de rock progressivo Pink Floyd, lançado em janeiro de 1977. Seguindo a linha dos álbuns anteriores, The Dark Side of the Moon e Wish You Were Here, este também é um álbum conceitual, que faz críticas às condições político-sociais da Inglaterra dos anos 1970, além de apresentar uma notável mudança no estilo musical do grupo.",
            img: './src/assets/image/Pink-Floyd_Animals-orig.jpg',
            audio: "./src/assets/audio/Pigs (Three Different Ones).mp3",
            trackData: { titulo: "Pigs", ano: 1977, duracao: "11:25" }
        },
        tdsmoon: {
            title: "The Dark Side of the Moon",
            desc: "O disco se baseia em ideias exploradas nas gravações e performances anteriores do Pink Floyd, enquanto omite os instrumentais estendidos que caracterizaram o trabalho anterior da banda. O grupo empregou gravação multicanal, loops de fita e sintetizadores analógicos, incluindo experimentação com o EMS VCS 3 e um Synthi",
            img: "./src/assets/image/Pink-Floyd_The-Dark-Side-of-the-Moon.jpg",
            audio: "./src/assets/audio/Brain Damage - tDSotM.mp3", // Ajuste o caminho conforme necessário
            trackData: { titulo: "Brain Damage", ano: 1973, duracao: "3:50" }
        }
    };

    // Mapeamento de imagens de fundo
    const backgrounds = {
        animals: './src/assets/image/Pink-Floyd_Animals-fundo.jpg',
        tdsmoon: './src/assets/image/Pink-Floyd_The-Dark-Side-of-the-Moon-fundo.jpg'
    };

    // Estilo Dinâmico (Requisito)
    const dynamicBackground = {
        backgroundImage: `url(${backgrounds[id] || ''})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const data = albumsData[id];
    
    // CSS Dinâmico (Classe baseada no álbum)
    const bgClass = id === 'animals' ? 'bg-dark text-white' : 'bg-secondary text-light';

    // Eventos de Mídia 
    const playAudio = () => document.getElementById("audioPlayer").play();
    const pauseAudio = () => document.getElementById("audioPlayer").pause();
    
    // Evento de Mouse e Props (passando objeto para alert)
    const showDetails = () => {
        alert(`Música: ${data.trackData.titulo}\nAno: ${data.trackData.ano}`);
    };

    if (!data) return <div>Álbum não encontrado</div>;

    return (
        <div style={dynamicBackground}>
            <div className="fundo">
                <div style={{minHeight: '100vh'}}>
                 
                        <h1>{data.title}</h1>
                        <p>{data.desc}</p>
                        
                        <div className="text-center">
                            <img src={data.img} className="img-fluid rounded shadow my-3" style={{maxWidth: '400px'}} alt={data.title} />
                        </div>

                        <div className="text-center my-4">
                            <audio id="audioPlayer">
                                <source src={data.audio} type="audio/mpeg" />
                            </audio>
                            <button className="btn btn-success me-2" onClick={playAudio}>Play</button>
                            <button className="btn btn-warning me-2" onClick={pauseAudio}>Pause</button>
                            <button className="btn btn-info" onClick={showDetails}>Detalhes</button>
                        </div>
                  
                </div>
            </div>
        </div>
    );
};

export default AlbumPage;