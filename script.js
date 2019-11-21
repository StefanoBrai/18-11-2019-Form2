let fh = (function () {
    //Oggetto
    let programmer = {};

    function isMinor(birthDate) {
        const birthYear = birthDate.getFullYear();
        const bDatePlus18 = birthDate.setFullYear(birthYear + 18);
        // if(bDatePlus18 > Date.now()){
        //     return true;
        // }
        // return false;
        return bDatePlus18 > Date.now();
    }

    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const dataDiNascitaInput = document.querySelector("#data")
    const radioButtonMaleInput = document.querySelector("#maleRadioButton");
    const specializations = document.querySelectorAll("input[type=checkbox]");
    const languagesSelect = document.querySelector("#linguaggi");

    const printError = document.querySelector("#printError");
    const printName = document.querySelector("#printName");
    const printSurname = document.querySelector("#printSurname");
    const printDate = document.querySelector("#printDate");
    const printGender = document.querySelector("#printGender");
    const printSelector = document.querySelector("#printSelector");
    const printSelectedList = document.querySelector("#printSelectedList");

    function readData(evt) {
        evt.preventDefault();
        programmer.name = nameInput.value;
        programmer.surname = surnameInput.value;
        programmer.dataDiNascita = new Date(Date.parse(dataDiNascitaInput.value));
        programmer.isFemale = !radioButtonMaleInput.checked;
        programmer.specialization = "";
        for (let sp of specializations) {
            if (sp.checked) {
                programmer.specialization += sp.value + " ";
            }
        }
        programmer.specialization.trim();
        if (!programmer.specialization) {
            programmer.specialization = "Ignorante";
        }

        //const radioButtonGender = document.querySelectorAll("input[type=radio]");
        //const selectedList = document.querySelector("#linguaggi").value;

        programmer.languages = [];
        for(let opt of languagesSelect.options){
            if(opt.selected){
                programmer.languages.push(opt.value);
            }
        }

        if(this.validation()){
            this.output();
        }
        else{
            printError.innerHTML = "I dati inseriti non sono corretti";
        }
        return false;
    }

    function validateData() {
        if (programmer.name.length < 3) {
            return false;
        }
        if (programmer.surname.length < 3) {
            return false;
        }
        if (isMinor(programmer.dataDiNascita)) {
            return false;
        }
        return true;
    }

    function print() {
        printName.innerText = `Nome: ${programmer.name}`;
        printSurname.innerHTML = `Cognome: ${programmer.surname}`;
        printDate.innerHTML = `Data di nascita: ${programmer.dataDiNascita}`;
        printGender.innerHTML = `Sesso: ${programmer.isFemale ? "female" : "male"}`;
        printSelector.innerHTML = `Specializzazione: ${programmer.specialization}`;
        printSelectedList.innerHTML = programmer.languages.join(",");
    }

    let obj = {
        name : nameInput,
        output : print,
        validation : validateData,
        read : readData
    }

    const button = document.querySelector("input[type=submit]");
    button.addEventListener("click", (evt)=>obj.read(evt));

    return obj;
})();

fh.output = function(){
    alert("Ciao " + fh.name.value);
}