import React, { Component } from 'react';

export class Redirect extends Component{
    static displayName = Redirect.name;

    handleClick() {
        window.location.href = "/"
    }

    redirect() {
        setTimeout(() => window.location.href = "/", 10000);
    }

    render() {
        return (
            <div>
                {this.redirect()}
                <h1>Cadastro concluído com sucesso</h1>
                <p>Ficamos felizes em tê-lo como nosso cliente. Em 10 segundos você será redirecionado para home, utilize o seu CPF para acessar o painel.</p>
                <button className="btn btn-success" onClick={this.handleClick}>Não quero esperar leve-me para Home</button>
            </div>
        );
    }
}