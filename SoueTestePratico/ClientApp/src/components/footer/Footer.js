import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {
    static displayName = Footer.name;

    render() {
        return (
            <footer className="footer mt-auto py-3">
                <Container>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <ul className="no-list">
                                <li><b>Training Banking</b></li>
                                <li><Link to="/">Quem somos</Link></li>
                                <li><Link to="/">Nossos serviços</Link></li>
                                <li><Link to="/">Carreiras</Link></li>
                                <li><Link to="/">Desenvolvedores</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <ul className="no-list">
                                <li><b>Para você</b></li>
                                <li><Link to="/">Abra sua conta</Link></li>
                                <li><Link to="/">Cartões de crédito</Link></li>
                                <li><Link to="/">Créditos e financiamentos</Link></li>
                                <li><Link to="/">Investimentos para pessoa fisica</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <ul className="no-list">
                                <li><b>Segmentos</b></li>
                                <li><Link to="/">Comercial banking</Link></li>
                                <li><Link to="/">Seguros</Link></li>
                                <li><Link to="/">Tesouro direto</Link></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>
        );
    }
}