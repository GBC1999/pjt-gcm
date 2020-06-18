import React, { Component } from 'react'

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

        this.setState({
            dados: [...this.state.dados, this.props.values]
        })

        console.log(JSON.stringify(this.state.dados))
    }

    render() {
        const { values } = this.props;

        return(
            <div>
                <h2>Ocorrência: {values.numeroDaOcorrencia}</h2>
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
                <br/>
                <button onClick={this.salvar}>
                    Salvar
                </button>

            </div>
        )
    }
}