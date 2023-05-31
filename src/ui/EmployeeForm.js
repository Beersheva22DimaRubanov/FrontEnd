export default class EmployeeForm{
    #buttonElement;
    #parentElement;

    constructor(parentId){
        this.#parentElement = document.getElementById(parentId);
        this.#fillSection();
        this.#buttonElement = document.getElementById('button-id');
    }

    #fillSection(){
        this.#parentElement.innerHTML = `<button id ='button-id' class = 'add-button'> Add random employee data </button>`;
    }

    buttonHasPressed(){
        return new Promise(resolved => {
            this.#buttonElement.onclick = () => resolved();
        })
    }
}