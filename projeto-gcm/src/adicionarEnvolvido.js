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
        const { name, value } = event.target
        const envolvido = this.state.envolvido
        const separadorIndex = name.indexOf('_')
        const inicial = name.substring(0, separadorIndex)
        const atributo = event.target.name.substring(separadorIndex + 1, name.length)

        if (inicial === 'rg') {
            envolvido.rg[atributo] = value
        }
        else if (inicial === 'endereco') {
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
        values.envolvidos.push(this.state.envolvido);
        handleChange('envolvido')
    }

    render() {

        return (
            <div className="container">
                <div className="divider"></div>
                <div className="section">
                    <form className="col s10">
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_condicaoDaParte'
                                    id="condicaoDaParte"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.condicaoDaParte}
                                />
                                <label htmlFor="natureza">Condição da Parte</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_conduzido'
                                    id="conduzido"
                                    type="checkbox"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.conduzido}
                                />
                                <label htmlFor="codigo">Conduzido</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_nome'
                                    id="nome"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.nome}
                                />
                                <label htmlFor="local">Nome</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_dataNascimento'
                                    id="dataNascimento"
                                    type="date"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.dataNascimento}
                                />
                                <label htmlFor="local">Data Nascimento</label>
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
                                <label htmlFor="local">Residencia</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='endereco_numero'
                                    id="numero"
                                    type="number"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.numero}
                                />
                                <label htmlFor="local">Número</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='endereco_bairro'
                                    id="bairro"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.bairro}
                                />
                                <label htmlFor="local">Bairro</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='endereco_complemento'
                                    id="complemento"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.complemento}
                                />
                                <label htmlFor="local">Complemento</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='endereco_cidade'
                                    id="cidade"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.cidade}
                                />
                                <label htmlFor="local">Cidade</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='endereco_estado'
                                    id="estado"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.estado}
                                />
                                <label htmlFor="local">Estado</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='rg_numeroRg'
                                    id="numeroRG"
                                    type="number"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.rg.numeroRg}
                                />
                                <label htmlFor="local">RG</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='rg_orgaoExpedidor'
                                    id="orgaoExpedidor"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.rg.orgaoExpedidor}
                                />
                                <label htmlFor="local">Orgão Expedidor</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='rg_estado'
                                    id="estado"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.rg.estado}
                                />
                                <label htmlFor="local">UF</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_pai'
                                    id="pai"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.pai}
                                />
                                <label htmlFor="local">Pai</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_mae'
                                    id="mae"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.mae}
                                />
                                <label htmlFor="local">Mãe</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_nacionalidade'
                                    id="nacionalidade"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.nacionalidade}
                                />
                                <label htmlFor="local">Nacionalidade</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_naturalidadeCidade'
                                    id="naturalidadeCidade"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.naturalidadeCidade}
                                />
                                <label htmlFor="local">Naturalidade Cidade</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_naturalidadeEstado'
                                    id="naturalidadeEstado"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.naturalidadeEstado}
                                />
                                <label htmlFor="local">Naturalidade Estado</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_localDeTrabalho'
                                    id="localDeTrabalho"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.localDeTrabalho}
                                />
                                <label htmlFor="local">Local de Trabalho</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='_versaoDoEnvolvido'
                                    id="versaoDoEnvolvido"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.versaoDoEnvolvido}
                                />
                                <label htmlFor="local">Versão do Envolvido</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.cadastrar}
                             className="waves-effect waves-light btn green darken-1 col s3 offset-s2" href="/">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}