function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    
    var result ="";
    result += "The " + myAdjective + " " + myNoun + " " +  myVerb + " " +myAdverb;
    
    return result;
}

console.log(wordBlanks("kid","annoying", "lies", "oftenly"))
