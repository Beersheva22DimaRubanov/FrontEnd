const ACTIVE = 'active';
export default class AplicationBar{
    #buttons
    #sectionElements
    #activeIndex
    #callback
    constructor(parentId, sections, callback){
        //sections - array of objects
        //each object{title: string, id: string}
        this.#fillButtons(parentId, sections.map(s => s.title));
        this.#setSectionElements(sections.map(s => s.id));
        this.#addListeners()
        this.#callback = callback;
    }

    #fillButtons(parentId, titles){
        const parentElement = document.getElementById(parentId);
        parentElement.innerHTML = titles.map(t => `<button class='menu-section'>${t}</button>`).join('');
        this.#buttons = parentElement.childNodes;
    }

    #setSectionElements(sectionsIds){
        this.#sectionElements = sectionsIds.map(id => document.getElementById(id));
    }

    #addListeners(){
        this.#buttons.forEach((b, index) => {
            b.addEventListener('click', this.#handler.bind(this, index))
        });
    }

    #handler(index){
        if(!this.#activeIndex ==undefined || index != this.#activeIndex){
            if(this.#activeIndex != undefined){
                this.#buttons[this.#activeIndex].classList.remove(ACTIVE);
                this.#sectionElements[this.#activeIndex].hidden = true;
            }

            this.#sectionElements[index].hidden = false;
            this.#buttons[index].classList.add(ACTIVE);
            this.#activeIndex = index;
            this.#callback(index);
        }
    }

}