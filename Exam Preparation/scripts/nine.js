'use strict';

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function () {
    alert('Hi! I\'m ' + this.name.first + '.');
};

let personOne = new Person('Svilen', 'Nikolov', 24, 'M', 'Programming');
// personOne.greeting();

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}