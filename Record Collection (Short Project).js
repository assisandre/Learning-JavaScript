var collection = {
    "267": {
        "album": "Wet Rain",
        "artist": "LuccasAndre",
        "tracks": [
            "Oh its raining",
            "Cant go outside"
        ] 
    },
    
    "500": {
        "album": "Sunshine",
        "artist": "BonJovi",
        "tracks": [
            "Wear sunglasses",
            "Lay down"
        ]
    },
    
    "999": {
        "album": "Lovely",
        "artist": "Billie",
        "tracks": [
            "Is it good?",
            "How I feel"
        ]
    }
};

function updateRecords(id,prop,value) {
    if(value === ""){
        delete collection[id][prop];
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value); 
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecords(999, "album", "Ugly Enough"))