export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        const template = this.template(model);
        if (this.escapar) {
            template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
