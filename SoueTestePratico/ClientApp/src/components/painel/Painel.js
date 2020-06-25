import React, { Component } from 'react';

export class Painel extends Component {

    checkLogin() {
        if (localStorage.getItem('cadastro') == null) {
            window.location.href = '/';
        }
    }

    render() {
        return (
            <div>
                {this.checkLogin()}
                <h1>Painel</h1>
            </div>    
        );
    }
}