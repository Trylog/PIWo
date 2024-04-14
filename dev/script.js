"use strict";

//7 typów
//undefined jest zwracany kiedy nie ma wartości a null ustawiamy jak nie ma wartości

const adder = () => {
    //zmienna0 = 8 //very very BAD XD, nie działa gdy jest "use strict"
    //var zmienna1 = 8 //zmienna globalna
    //const zmiennaStalejReferencji = {} //nie można jej zmieniać przez =, ale można zmieniać, dodawać i tak dalej elementy np. tablicy
    //let zmiennaPoProstu //normalna zmienna lokalna
    const inputA = document.getElementById("number-a");//lekko szybciej
    const inputB = document.querySelector("#number-a");//szuka nie tylko w id, z css

    if(inputA.value === "" || inputB.value === ""){// === porównuje też typy
        console.log("A lub B jest puste");
        return;
    }

    if(isNaN(inputA.value) || isNaN(inputB.value)){
        console.log("A lub B nie jest liczbą");

        const modal = document.getElementById("modal");
        modal.showModal();

        const closingButton = document.getElementById("closing");
        closingButton.addEventListener("click", () =>{
            modal.close()
        })//złe podejście, event jest przypisywane wiele razy 

        return;
    }

    const num1 = Number(inputA);
    const num2 = Number(inputB);
    console.log();
    const theList = document.getElementById("list-of-operation");
    const listItem = document.createElement("li");
    listItem.innerText = `$(num1) + $(num2) = $(num1 + num2)`;
    theList.append(listItem);
        
}
//function func () {}
//const fun2 = function() {}
//funkcje można przekazywać jako argument

///min.js; Bootstrap