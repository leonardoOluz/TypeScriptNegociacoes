export abstract class View<T> {
    protected elemento: HTMLElement
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor);
        if(escapar){
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        const template = this.template(model)
        if (this.escapar) {
            template.replace(/<script>[\s\S]*?<\/script>/, '') 
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}