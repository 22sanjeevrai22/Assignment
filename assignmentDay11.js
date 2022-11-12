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
        console.log(`This ${this.ethnicity} male is ${this.age} years old and ${this.weight} Kgs.`);

    }

    female(age, weight) {

        this.age = age;
        this.weight = weight;
        console.log(`This ${this.ethnicity} female is ${this.age} years old and ${this.weight} Kgs.`);

    }


}

class American extends Person {

    nose_height;
    height;
    ethnicity = 'American';

    function1() {
        super.male();
        super.female();
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


const americanPerson = new American('big', 'white', 'square', 'white', 'tall', '11cm');
const koreanPerson = new Korean('small', 'yellow', 'round', 'white', 'short', '5cm');


// console.log(person1.callOutput());
// console.log(person2.callOutput());

console.log(americanPerson.male(23, 75));
console.log(americanPerson.female(12, 50));

console.log(koreanPerson.male(23, 55));
console.log(koreanPerson.female(12, 35));
