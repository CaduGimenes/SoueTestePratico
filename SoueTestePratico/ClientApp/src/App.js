import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/home/Home';
import { Register } from './components/register/Register'
import { Redirect } from './components/register/Redirect'
import { Painel } from './components/painel/Painel';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/cadastro-cliente' component={Register} />
                <Route path='/cadastro-concluido' component={Redirect} />
                <Route path='/painel' component={Painel} />
            </Layout>
        );
    }
}
