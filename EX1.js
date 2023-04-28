import { LightningElement } from 'lwc';

export default class LWCIII extends LightningElement {
    nome;
    peso;
    altura;
    imc;

    handleNomeChange(event) {
        this.nome = event.target.value;
    }

    handlePesoChange(event) {
        this.peso = event.target.value;
    }

    handleAlturaChange(event) {
        this.altura = event.target.value;
    }

    handleCalcularIMC() {
        if (this.peso && this.altura) {
            const alturaMetros = this.altura / 100;
            const imc = this.peso / (alturaMetros * alturaMetros);
            this.imc = imc.toFixed(2);
        }
    }
}
