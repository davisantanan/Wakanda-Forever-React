import React from "react";
import Star from '../../assets/25533-removebg-preview.png';
import Avatar from '../../assets/avatar-1577909_1280.webp';
import './styles.css'

function Feedback () {

    return (
        <>
            <div class="coment-header">
                <h1 id="header-coment">Depoimentos</h1>
            </div>
            <div className="coment-contain">
            
                <div className="cards-contain-coment">
                    <div className="card-coment">
                        <div className="card-image-coment">
                            <img id="avatar" src={Avatar} />
                        </div>
                        <div className="card-name">
                            <h3 id="coment-name">Rafael</h3>
                        </div>
                        <div className="stars">
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                        </div>
                        <div className="coment-coment">
                            <p id="coment">Filme animaaaaal!!!</p>
                        </div>
                    </div>
                    <div className="card-coment">
                        <div className="card-image-coment">
                            <img id="avatar" src={Avatar} />
                        </div>
                        <div className="card-name">
                            <h3 id="coment-name">Paulinha</h3>
                        </div>
                        <div className="stars">
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                        </div>
                        <div className="coment-coment">
                            <p id="coment">Adoreiiii! Super recomendo o filme!</p>
                        </div>
                    </div>
                    <div className="card-coment">
                        <div className="card-image-coment">
                            <img id="avatar" src={Avatar} />
                        </div>
                        <div className="card-name">
                            <h3 id="coment-name">João</h3>
                        </div>
                        <div className="stars">
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />
                            <img id="star" src={Star} />

                        </div>
                        <div className="coment-coment">
                            <p id="coment">Gostei muito filme, já quero ver denovo!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        
}

export default Feedback;