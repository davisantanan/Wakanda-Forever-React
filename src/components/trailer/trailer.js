import React from "react";
import Video from '../../assets/Pantera Negra_ Wakanda para Sempre _ Marvel Studios _ Trailer Oficial Legendado.mp4';
import './styles.css'

function Trailer () {
    return (
        <div id="trailer-container">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video}/>
                        Seu navegador não possui suporte para vídeos
                    </video>
                    <div id="sinopse">
                        <p className="description">
                            Rainha Ramonda, Shuri, M'Baku, Okoye e Dora Milaje lutam para proteger sua nação das potências mundiais intervenientes após a morte do rei T'Challa.                    
                        </p>
                        <button className="button">Comprar Ingresso</button>
                    </div>
                </div>
        </div>
    )
}

export default Trailer;
