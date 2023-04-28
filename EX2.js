import { LightningElement, track } from 'lwc';

export default class LWCIII2 extends LightningElement {
    @track inputValues = {
        primeiroNome: '',
        sobrenome: '',
        email: '',
        website: '',
        empresa: '',
        receitaAnual: ''
    };

    handleInputChange(event) {
        const inputName = event.target.dataset.inputname;
        this.inputValues = { ...this.inputValues, [inputName]: event.target.value };
    }
}
