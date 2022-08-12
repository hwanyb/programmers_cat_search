export default class Header{
    constructor({ $target }){
        const $header = document.createElement("header");
        this.$header = $header;
        $header.className = "Header";
        $target.appendChild($header);
        
        this.render();
    }
    render(){
        this.$header.innerHTML = `
            <button>home</button>
            <button>todggle</button>
        `;
    }
}