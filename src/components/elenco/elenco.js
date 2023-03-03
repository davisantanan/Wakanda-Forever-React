import React from "react";
import './styles.css'

function Elenco () {
    return(
        <div className="fotos-contain">
            <div className="fotos-header">
                <h1>Elenco do filme</h1>
            </div>
            <div className="actors-contain">
                <div className="actor-content">
                    
                    <div className="actor-1">
                        <div className="header-actor">
                            <h3>Letitia Wright - Shuri</h3>
                        </div>
                        <div className="img-actor banner-1"></div>
                    </div>
                    
                    <div className="actor-2">
                        <div className="header-actor">
                            <h3>Angela Bassett - Ramonda</h3>
                        </div>
                        <div className="img-actor banner-2"></div>
                    </div>
            
                    <div className="actor-3">
                        <div className="header-actor">
                            <h3>Danai Gurira - Okoye</h3>
                        </div>
                        <div className="img-actor banner-3"></div>
                    </div>
                    
                    <div className="actor-4">
                        <div className="header-actor">
                            <h3>Tenoch Huerta - Namor</h3>
                        </div>
                        <div className="img-actor banner-4"></div>
                    </div>

                    <div className="actor-5">
                        <div className="header-actor">
                            <h3>Lupita Nyong'o - Nakia</h3>
                        </div>
                        <div className="img-actor banner-5"></div>
                    </div>

                    <div className="actor-6">
                        <div className="header-actor">
                            <h3>Winston Duke - M'Baku</h3>
                        </div>
                        <div className="img-actor banner-6"></div>
                    </div>

                    <div className="actor-7">
                        <div className="header-actor">
                            <h3>Dominique Thorne - Riri Williams</h3>
                        </div>
                        <div className="img-actor banner-7"></div>
                    </div>
                    
                    <div className="actor-8">
                        <div className="header-actor">
                            <h3>Michaela Coel - Aneka</h3>
                        </div>
                        <div className="img-actor banner-8"></div>
                    </div>
                
                </div>
            </div>
    </div>
    )
}

export default Elenco