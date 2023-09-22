import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      cadastroRealizado: false, // Novo estado para controlar a exibição da mensagem e do botão
    };
    this.gravar = this.gravar.bind(this);
  }

  async gravar() {
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then((retorno) => {
        firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
          nome: this.state.nome,
          sobrenome: this.state.sobrenome,
          dataNascimento: this.state.dataNascimento,
        });

        // Atualize o estado para mostrar a mensagem e o botão
        this.setState({ cadastroRealizado: true });
      });
  }

  render() {
    return (
      <div>
        <h1>Página de Cadastro</h1>
        <input type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
        <br />
        <input type="password" placeholder="senha" onChange={(e) => this.setState({ senha: e.target.value })} />
        <br />
        <input type="text" placeholder="nome" onChange={(e) => this.setState({ nome: e.target.value })} />
        <br />
        <input type="text" placeholder="sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })} />
        <br />
        <label>Data de Nascimento:</label>
        <input text="Data de nascimento" type="date" placeholder="data nascimento" onChange={(e) => this.setState({ dataNascimento: e.target.value })}/>
        <br />
        <button onClick={this.gravar}>Gravar</button>

        {/* Condicional para mostrar a mensagem e o botão */}
        {this.state.cadastroRealizado && (
          <div>
            <p>Cadastro realizado com sucesso!</p>
            <button>
            <Link to="/Login">Voltar para a tela de login</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Cadastro;
