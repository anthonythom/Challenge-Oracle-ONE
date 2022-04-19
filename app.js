const buttonCodificar = document.getElementById("cripMensagem")
const buttonDeodificar = document.getElementById("descripMensagem")

descripMensagem.onclick = descripMensagem



function descripMensagem() {

}
function CodMessages(phrase, action) {
    let dicionarioEncriptado = ["enter", "imes", "ai", "ober", "ufat"];
    let string = ["e", "i", "a", "o", "u"];
    let i = 0;
    while (i < dictionaryEncrypt.length) {
        if (action == false) {
            phrase = phrase.replace(string[i], dictionaryEncrypt[i]);
        } else {
            phrase = phrase.replace(dictionaryEncrypt[i], string[i]);
        }
        i++;
    }
    return phrase;