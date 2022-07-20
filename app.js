var btnTranslate = document.querySelector("#btn-translate")
var input = document.querySelector("#input")
var output = document.querySelector("#ouput")
var serverUrl = "https://api.funtranslations.com/translate/groot.json"
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getUrl(inputText) {
    return serverUrl + "?text=" + inputText
}
function errorHandler(error){
    alert("Groot is sleeping, Please come back after some time")
    console.log(error)
}
function clickListener() {
    //console.log("clicked")
    var inputText = input.value; // fetches the value for id="input"
    //console.log(inputText)

    fetch(getUrl(inputText))
        .then(response => response.json())
        .then(json => {
            ouput.innerText = json.contents.translated})
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickListener) // call back function is called here that's why we don't pass error as args