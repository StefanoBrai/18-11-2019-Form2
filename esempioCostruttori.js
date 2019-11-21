function Programmatore(name, surname, dateOfBirth, languages){
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.languages = languages;

    this.isMinor = function(){
        const birthYear = this.dateOfBirth.getFullYear();
        let modified = new Date(this.dateOfBirth.getTime());
        modified.setFullYear(birthYear + 18);
        return modified > Date.now();
    }
}

let d = new Date(Date.now());
d.setFullYear(2002);
let p1 = new Programmatore("Stefano", "Rossi", d, ["java", "C#"]);
console.log(p1.isMinor());