import $ from "../core";

//check !

$.prototype.addAttribute = function(...classNames){
    for (let i = 0; i < this.length; i++){
        if(!this[i].classList){
            continue;
        }
        this[i].setAttribute(...classNames);
    }

    return this;
};

$.prototype.removeAttribute = function(...classNames){
    for (let i = 0; i < this.length; i++){
        if(!this[i].classList){
            continue;
        }
        this[i].removeAttribute(...classNames);
    }

    return this;
};

$.prototype.toggleAttribute = function(classNames){
    for (let i = 0; i < this.length; i++){
        if(!this[i].classList){
            continue;
        }
        this[i].classList.toggle(classNames);
    }

    return this;
};