import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../index.css';
import firebase from '../../Firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      erroLogin: null, // Adicionando estado para controlar a mensagem de erro
    }
    this.acessar = this.acessar.bind(this);
  }

  async acessar() {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha);
      window.location.href = "./Principal";
    } catch (erro) {
      // Atualize o estado para exibir a mensagem de erro
      this.setState({ erroLogin: "O usuário não está cadastrado" });
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
        <br />
        <input type="password" placeholder="senha" onChange={(e) => this.setState({ senha: e.target.value })} />
        <br />
        <button onClick={this.acessar}>Acessar</button>
        {this.state.erroLogin && <p>{this.state.erroLogin}</p>} {/* Exibir a mensagem de erro */}

        <button>
          <Link to="/Cadastro">Faça seu cadastro</Link>
        </button>
      </div>
    )
  }
}

export default Login;