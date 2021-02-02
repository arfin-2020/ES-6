class Parent {
    constructor() {
        this.FatherName = "AbdulKuddus Abdul kalam";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.Name = name;
    }
}
const baby = new Child("Janiffer");
const baby2 = new Child("lopez");
console.log(baby);
console.log(baby2);