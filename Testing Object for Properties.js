var myObj = {
	name: "Jonesy",
	age: 5,
	color: "Brown",

};

function checkObj(checkProp) {
    
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];    
    } else {
    return "Not found"
    }
}

console.log(checkObj("name"))