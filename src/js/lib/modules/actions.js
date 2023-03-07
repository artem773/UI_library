/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import '../core';

// eslint-disable-next-line no-undef
$.prototype.html = function(content){
    for (let i = 0; i < this.length; i++){
        if(content){
            this[i].innerHTML = content;
        }else{
           return this[i].innerHTML;
        }
    }
    return this;
};

$.prototype.eq = function(i){ //получаем на страніце что-то і только с нім взаімодействуем
    const swap = this[i]; //переключаем только етот елемент
    const objLength = Object.keys(this).length;//узналі кол-во елементов в нашем об'єкте

    for(let i = 0; i < objLength; i++){
        delete this[i];
    }
    this[0] = swap;
    this.length = 1;
    return this;
};

$.prototype.index = function(){ // findIndex(); находім номер по порядку среді всех соседей у одного родітеля
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
}

$.prototype.find = function(selector){ //  находім елементи по селектору внутрі уже найдених 
    let numberOfItems = 0; //кол-во найдених елементов по селектору
    let counter = 0; // номер по порядку

    const copyObj = Object.assign({}, this); //неглубокая компія об'єкта this

    for(let i = 0; i < copyObj.length; i++){
        const array = copyObj[i].querySelectorAll(selector);
        if(array.length == 0){
            continue;
        }
        for(let j = 0; j < array.length; j++){
            this[counter] = array[j];
            counter++;
        }
        numberOfItems += array.length;
    }
    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for(;numberOfItems < objLength; numberOfItems++){
        delete this[numberOfItems]; //удаляем лішніе елементи что не содержат наш селектор
    }

    return this;
};


