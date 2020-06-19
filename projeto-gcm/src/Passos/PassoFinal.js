import React, { Component } from 'react'
import { add } from '../services/ocorrencia';

export default class PassoFinal extends Component {
    state = {
        dados: []
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    salvar = e => {
        e.preventDefault()

        this.state.dados.push(this.props.values)

        console.log(JSON.stringify(this.state.dados))

        add(JSON.stringify(this.state.dados))
    }

    render() {
        const { values } = this.props;

        return (
            <div>
                <h3>Ocorrência: {values.numeroDaOcorrencia}</h3>
                <p><strong>Data: </strong>{values.data}</p>
                <p><strong>Hora Fato: </strong>{values.horaFato}</p>
                <p><strong>Numero do Talão: </strong>{values.numTalao}</p>
                <p><strong>Viatura: </strong>{values.viatura}</p>
                <p><strong>Hora Irradiação: </strong>{values.horaIrradiacao}</p>
                <p><strong>Hora Local: </strong>{values.horaLocal}</p>
                <p><strong>Primeiro Termino: </strong>{values.primeiroTermino}</p>
                <p><strong>Segundo Termino: </strong>{values.segundoTermino}</p>
                <p><strong>Segundo Termino: </strong>{values.segundoTermino}</p>
                <p><strong>Km Irradiação: </strong>{values.kmIrradiacao}</p>
                <p><strong>Km Local: </strong>{values.kmLocal}</p>
                <p><strong>Km Primeiro Termino: </strong>{values.kmPrimeiroTermino}</p>
                <p><strong>Natureza da Ocorrência: </strong>{values.naturezaDaOcorrencia}</p>
                <p><strong>Código: </strong>{values.codigoDaOcorrencia}</p>
                <p><strong>Local: </strong>{values.local}</p>
                <p><strong>Bairro: </strong>{values.bairro}</p>
                <h3>Envolvidos: </h3>
                {values.envolvidos.map(function (e, index) {
                    return (
                        <div key={e.id}>
                            <h3>Envolvido {index + 1}: {e.nome}</h3>
                            <p><strong>Condição da Parte: </strong>{e.condicaoDaParte}</p>
                            <p><strong>Conduzido: </strong>{e.conduzido}</p>
                            <p><strong>Data Nascimento: </strong>{e.dataNascimento}</p>
                            <p><strong>Residencia: </strong>{e.endereco.residencia}</p>
                            <p><strong>Numero: </strong>{e.endereco.numero}</p>
                            <p><strong>Bairro: </strong>{e.endereco.bairro}</p>
                            <p><strong>Complemento: </strong>{e.endereco.complemento}</p>
                            <p><strong>Cidade: </strong>{e.endereco.cidade}</p>
                            <p><strong>Estado: </strong>{e.endereco.estado}</p>
                            <p><strong>RG: </strong>{e.rg.numeroRg}</p>
                            <p><strong>Orgão Expedidor: </strong>{e.rg.orgaoExpedidor}</p>
                            <p><strong>UF: </strong>{e.rg.estado}</p>
                            <p><strong>Pai: </strong>{e.pai}</p>
                            <p><strong>Mãe: </strong>{e.mae}</p>
                            <p><strong>Nacionalidade: </strong>{e.nacionalidade}</p>
                            <p><strong>Naturalidade Cidade: </strong>{e.naturalidadeCidade}</p>
                            <p><strong>Naturalidade Estado: </strong>{e.naturalidadeEstado}</p>
                            <p><strong>Local de Trabalho: </strong>{e.localDeTrabalho}</p>
                            <p><strong>Versão do Envolvido: </strong>{e.versaoDoEnvolvido}</p>
                        </div>
                    )
                })}
                <h3>Veiculos: </h3>
                {values.veiculos.map(function (v, index) {
                    return (
                        <div key={v.id}>
                            <h3>Veículo {index + 1}</h3>
                            <p><strong>Placa: </strong>{v.placa}</p>
                            <p><strong>Modelo: </strong>{v.modelo}</p>
                            <p><strong>Ano: </strong>{v.ano}</p>
                            <p><strong>Cor: </strong>{v.cor}</p>
                            <p><strong>Código Renavam: </strong>{v.codigoRenavam}</p>
                            <p><strong>Dano: </strong>{v.dano}</p>
                        </div>
                    )
                })}
                <br />
                <button onClick={this.salvar}>
                    Concluir
                </button>

            </div>
        )
    }
}