import React from "react";
import './styles.css'

function Form () {
    
    return(
        
        <div className="form-contain">
            <div className="form-content">
                <div className="form-header">
                    <h1>Fale conosco</h1>
                </div> 
                <form action="./Contato.html">
                    <div className="input-group">
                        <label for="Nome">Nome</label>
                        <input style={{display: 'block'}} id="Nome" type="text" name="Nome" placeholder="Digite seu nome completo" required />
    
                        <label for="Email">Email</label>
                        <input style={{display: 'block'}} id="Email" type="Email" name="Email" placeholder="Digite seu Email" required />
    
                        <label for="Número">Telefone</label>
                        <input style={{display: 'block'}} id="Número" type="tel" name="number" placeholder="Digite o telefone para contato" required />
    
                        <label for="mensagem">Mensagem</label>
                        <textarea style={{display: 'block'}} id="mensagem" name="mensagem" rows="20" placeholder="Digite sua mensagem" required></textarea>
    
                        <button>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default Form;