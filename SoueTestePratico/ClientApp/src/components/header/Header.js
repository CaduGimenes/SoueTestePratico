import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import './header.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            displayErrors: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!event.target.checkValidity()) {
            this.setState({ displayErrors: true });
            return;
        }
        this.setState({ displayErrors: false });

        const data = new FormData(event.target);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "Cpf": data.get("Cpf").toString(),   
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        event.target.reset();

        fetch("https://localhost:44308/api/login", requestOptions)
            .then(response => response.text())
            .then(function (result) {
                let object = JSON.parse(result);

                if (object.message) {
                    Swal.fire({
                        title: 'Erro!',
                        text: object.message,
                        icon: 'error',
                        confirmButtonText: 'Fechar'
                    });

                    return;
                }

                localStorage.setItem('cadastro', result);

                window.location.href = '/painel';

            })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav mr-auto">
                                <NavItem>
                                    <NavLink tag={Link} className="text-light " to="/cadastro-cliente">Abra sua Conta</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light"  to="/">Investimentos</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink tag={Link} className="text-light " to="/">Planos</NavLink>
                                </NavItem>
                            </ul>
                            <form className="my-2 my-lg-0" onSubmit={this.handleSubmit}>
                                <span className="ml-3 text-light "><b>Acesse</b> sua conta</span>
                                <div className="form-inline">
                                    <input className="form-control mr-sm-2" type="text" maxLength="11" placeholder="Digite seu CPF" id="Cpf" name="Cpf" aria-label="Digite seu CPF" required/>
                                    <button className="btn btn-light my-2 my-sm-0" type="submit">Acessar</button>
                                </div>
                            </form>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
