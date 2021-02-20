'use strict';

class First {
    hello() {
        console.log('Привет я метод родителя!');
    }
}

class Second extends First {

    hello() {
        First.prototype.hello();
        this.hi();
    }

    hi(){
        console.log('А я наследуемый метод!');
    }
}
const hello1 = new Second();
hello1.hello();

