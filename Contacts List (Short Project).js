var contacts = [
    {
        "name": "Andre",
        "number": 555123,
        "age": 20
    },
    {
        "name": "Taci",
        "number": 12345,
        "age": 20
    },
    {
        "name": "Vania",
        "number": 789012,
        "age": 39
    }    
]

function lookUpProfile(name,prop) {
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].name === name){
            return contacts[i][prop] || "No such property"; 
        }
    }
    
    return "No such contact";
}

var data = lookUpProfile("Taci", "age")
console.log(data)
