class Student {
    constructor(Sid, Sname) {
        this.id = Sid;
        this.name = Sname;
        this.schooName = "Holy Child School";
        this.companyName = "Google";
    }
}
const student1 = new Student(345, "Arfin");
const student2 = new Student(353, "Chowdhury");
const student3 = new Student(445, "Arif");
console.log(student1, student2, student3);