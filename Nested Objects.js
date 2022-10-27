var myStorage = {
    "car": {
        "inside": {
            "glove box": "documents",
            "passenger seat": "sprite",
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)