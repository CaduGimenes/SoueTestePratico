import React, { Component } from 'react';
import { cpf } from 'cpf-cnpj-validator';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Register.css';

const MySwal = withReactContent(Swal)

export class Register extends Component {
    static displayName = Register.name;

    constructor(props) {
        super(props)
        this.state = {
            displayErrors: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
    }

    async handleSubmit(event) {
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
            "Name": data.get("Name"),
            "Cpf": data.get("Cpf").toString(),
            "Adress": data.get("Adress"),
            "Email": data.get("Email"),
            "Phone": data.get("Phone").toString()
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        event.target.reset();

        fetch("https://localhost:44308/api/register", requestOptions)
            .then(response => response.text())
            .then(function (result) {
                let object = JSON.parse(result);

                if (object.message) {
                    MySwal.fire({
                        title: 'Usuário já existe!',
                        text: object.message,
                        icon: 'error',
                        confirmButtonText: 'Fechar'
                    });

                    return;
                }

                window.location.href = '/cadastro-concluido';
                
             })
            .catch(error => console.log('error', error));

    }

    handlePhone(event) {
        if (cpf.isValid(event.target.value)) {
            event.target.setCustomValidity("Cpf is invalid.");
            return;
        }

        event.target.setCustomValidity("");

    }

    render() {
        const { displayErrors } = this.state;
        return (
            <div className="row text-center d-flex justify-content-center">
                <h3>Você está a um passo de criar sua conta Training Bank</h3>
                <div className="col-12">
                    <form onSubmit={this.handleSubmit}
                        noValidate
                        className={displayErrors ? 'displayErrors register-form' : 'register-form'}>
                        <input className="form-control col-12" placeholder="Nome" type="text" id="Name" name="Name" required />
                        <input className="form-control col-12" placeholder="Cpf" type="text" id="Cpf" name="Cpf" maxLength="11" required />
                        <input className="form-control col-12" placeholder="Email" type="email" id="Email" name="Email" required />
                        <input className="form-control col-12" placeholder="Telefone" maxLength="11" type="tel" id="Phone" name="Phone" onChange={this.handlePhone} required />
                        <input className="form-control col-12" placeholder="Endereço" type="text" id="Adress" name="Adress" required />
                        <button type="submit" className="btn btn-submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
