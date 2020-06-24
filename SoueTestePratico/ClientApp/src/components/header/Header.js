import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './header.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
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
                                    <NavLink tag={Link} className="text-light " to="/">Abra sua Conta</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light"  to="/counter">Investimentos</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink tag={Link} className="text-light " to="/fetch-data">Planos</NavLink>
                                </NavItem>
                            </ul>
                            <form className="my-2 my-lg-0">
                                <span className="ml-3 text-light "><b>Acesse</b> sua conta</span>
                                <div className="form-inline">
                                    <input className="form-control mr-sm-2" type="text" maxLength="11" placeholder="Digite seu CPF" aria-label="Digite seu CPF" />
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
