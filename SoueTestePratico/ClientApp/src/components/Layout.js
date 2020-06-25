import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './header/Header';
import { Footer } from './footer/Footer';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div className="d-flex flex-column h-100">
                <NavMenu />
                <Container>
                    {this.props.children}
                </Container>
                <Footer />
            </div>
        );
    }
}
