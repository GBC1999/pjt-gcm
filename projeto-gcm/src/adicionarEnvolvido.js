import React, { Component } from 'react'

export default class AdicionarEnvolvido extends Component {
    constructor(props) {
        super(props)

        this.state = {
            envolvido: {
                nome: '',
                condicaoDaParte: '',
                conduzido: false,
                dataNascimento: '',
                pai: '',
                mae: '',
                nacionalidade: '',
                naturalidadeCidade: '',
                naturalidadeEstado: '',
                telefone: '',
                localDeTrabalho: '',
                versaoDoEnvolvido: '',
                rg: {
                    numeroRg: '',
                    orgaoExpedidor: '',
                    estado: ''
                },
                endereco: {
                    residencia: '',
                    numero: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    complemento: ''
                }
            },

            dados: [],
            
        }

        this.cadastrar = this.cadastrar.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        const envolvido = this.state.envolvido        
        const separadorIndex = name.indexOf('_')
        const inicial = name.substring(0, separadorIndex)
        const atributo = event.target.name.substring(separadorIndex + 1, name.length)
        
        if(inicial === 'rg') {
            envolvido.rg[atributo] = value
        }
        else if (inicial === 'endereco'){
            envolvido.endereco[atributo] = value
        }
        else {
            envolvido[atributo] = value
        }

        this.setState(
            envolvido
        )
    }

    mostrar = e => {
        e.preventDefault();
        console.log(JSON.stringify(this.state.envolvido))
    }

    cadastrar(e) {
        e.preventDefault()
        const { values, handleChange } = this.props;
        values.envolvido.push(this.state.envolvido);
        handleChange('envolvido')
    }

    render() {
        
        return(
            <div className="container">
                <div className="divider"></div>
                <div className="section">
                    <form className="col s10">
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='_nome'
                                id="nome"
                                type="text"
                                className="validate"
                                onChange={this.handleChange}
                                value={this.state.envolvido.nome}
                                />
                                <label htmlFor="natureza">Nome Envolvido</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='rg_numeroRg'
                                id="rg"
                                type="number"
                                className="validate"
                                onChange={this.handleChange}
                                value={this.state.envolvido.rg.numeroRg}
                                />
                                <label htmlFor="codigo">Numero RG</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='endereco_residencia'
                                id="residencia"
                                type="text"
                                className="validate"
                                onChange={this.handleChange}
                                value={this.state.envolvido.endereco.residencia}
                                />
                                <label htmlFor="local">Local</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.mostrar} className="waves-effect waves-light btn red darken-1 col s3 offset-s2" href="/">Mostrar</button>
                            <button onClick={this.cadastrar} className="waves-effect waves-light btn green darken-1 col s3 offset-s2" href="/">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}