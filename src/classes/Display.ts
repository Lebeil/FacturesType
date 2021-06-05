import {HasRender} from "../interfaces/HasRender.js";
import {HasHtmlFormat} from "../interfaces/HasHtmlFormat.js";
import {Storages} from "./Storages.js";

export class Display implements HasRender {

    formContainer: HTMLDivElement;

    constructor(
        private container: HTMLDivElement,
        private hiddenDiv: HTMLDivElement,
        private btnPrint: HTMLButtonElement
    ) {
        this.formContainer = document.getElementById('form-container') as HTMLDivElement;
    }

    render(docObj: HasHtmlFormat, docType: string){
        const htmlString = docObj.htmlFormat();
        this.container.innerHTML = htmlString;

        new Storages(docType, htmlString);

        if(docType === 'invoice') {
            this.btnPrint.innerText = 'Imprimer la facture';
        } else {
            this.btnPrint.innerText = 'Imprimer le devis';
        }
        this.hiddenDiv.classList.remove("invisible");
        this.formContainer.innerHTML = "";
    }
}