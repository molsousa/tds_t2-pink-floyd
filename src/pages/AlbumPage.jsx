import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

/**
 * Componente reutilizável para páginas de álbum.
 * Recebe Props ou carrega dados baseados na rota.
 */
const AlbumPage = () => {
    const { id } = useParams(); // Pega 'animals' ou 'tdsmoon' da URL
    
    // Simulação de banco de dados local para preencher o componente
    const albumsData = {
        animals: {
            title: "Animals",
            desc: "Décimo álbum de estúdio, inspirado em A Revolução dos Bichos...",
            img: "/assets/images/Pink-Floyd_Animals-orig.jpg",
            audio: "/assets/Audio/Pigs (Three Different Ones) [ZUEGeWYWbuU].mp3",
            trackData: { titulo: "Pigs", ano: 1977, duracao: "11:25" }
        },
        tdsmoon: {
            title: "The Dark Side of the Moon",
            desc: "Explora temas como conflito, ganância e tempo...",
            img: "/assets/images/Pink-Floyd_The-Dark-Side-of-the-Moon-50-1.jpg",
            audio: "/assets/Audio/Brain Damage - tDSotM.mp3", // Ajuste o caminho conforme necessário
            trackData: { titulo: "Brain Damage", ano: 1973, duracao: "3:50" }
        }
    };

    // Mapeamento de imagens de fundo
    const backgrounds = {
        animals: '/assets/images/Pink-Floyd_Animals-fundo.jpg',
        tdsmoon: '/assets/images/Pink-Floyd_The-Dark-Side-of-the-Moon-50-1-fundo.jpg'
    };

    // Estilo Dinâmico (Requisito) [cite: 77]
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
    
    // CSS Dinâmico (Classe baseada no álbum) [cite: 25, 26]
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