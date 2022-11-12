class Person {
    eyes;
    skintone;
    fingerprint;
    bones;
    age;
    weight;
    ethnicity;



    constructor(eyes, skintone, fingerprint, bones) {
        this.eyes = eyes;
        this.skintone = skintone;
        this.fingerprint = fingerprint;
        this.bones = bones;
    }

    male(age, weight) {

        this.age = age;
        this.weight = weight;
        console.log(`This ${this.ethnicity} male is ${this.age} years old and ${this.weight} kgs`);

    }

    female(age, weight) {

        this.age = age;
        this.weight = weight;
        console.log(`This ${this.ethnicity} female is ${this.age} year old and ${this.weight} kgs`);

    }


}

class American extends Person {

    nose_height;
    height;
    ethnicity = 'American';

    function1() {
        a = super.male();
        b = super.female();
    }


    constructor(eyes, skintone, fingerprint, bones, height, nose_height) {

        super(eyes, skintone, fingerprint, bones);

        this.height = height;
        this.nose_height = nose_height;

    }

    callOutput() {
        console.log(`This is American's  ${this.eyes} eyes and ${this.nose_height} nose`)
    }





}

class Korean extends Person {

    nose_height;
    height;
    ethnicity = 'Korean';

    function1() {
        super.male();
        super.female();
    }


    constructor(eyes, skintone, fingerprint, bones, height, nose_height) {
        super(eyes, skintone, fingerprint, bones)
        this.height = height;
        this.nose_height = nose_height;

    }



    callOutput() {

        console.log(`This is Korean's ${this.eyes} eyes and ${this.nose_height} nose`)
    }
}


const person1 = new American('big', 'white', 'square', 'white', 'tall', '11cm');
const person2 = new Korean('small', 'yellow', 'round', 'white', 'short', '5cm');


console.log(person1.callOutput());
console.log(person2.callOutput());

console.log(person1.male(23, 34));
console.log(person1.female(12, 56));

console.log(person2.male(99, 94));
console.log(person2.female(2, 5));