import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './header/Header';
import { Footer } from './footer/Footer';
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div className="d-flex flex-column h-100">
                <NavMenu />
                <Container>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        
                    </Switch>
                </Container>
                <Footer />
            </div>
        );
    }
}
