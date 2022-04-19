//message encoder and decoder
function CodMessages(phrase, action) {
    /* Action |  FALSE: encrypt | TRUE: decrypt */
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
}
//break sentences into words
function splitPhrase(messages) {
    var phrase = [];
    phrase = messages.split(" ");
    return phrase;
}
//concatenate text chain message
function concatMessage(messages) {
    var newMessages = "";
    for (var i = 0; i < messages.length; i++) {
        newMessages = newMessages + " " + messages[i];
    }
    return newMessages;
}
// copy end result in the clip board
function copyToClipBoard() {
    const textSelection = window.getSelection();
    const textRange = document.createRange();
    const textElementP = document.getElementById("copyClipboard")
    textRange.selectNodeContents(textElementP);
    textSelection.removeAllRanges();
    textSelection.addRange(textRange);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
/*popup*/
function popup(messages, action) {
    if (action == true && messages != null) {
        document.getElementById("popupAlert").innerHTML = messages;
        document.getElementById("popupMessages").style.display = "block";
    } else if (action == false && messages == null) {
        document.getElementById("popupMessages").style.display = "none";
    }
}
//Verify Messages
function verifyText(message) {
    var result = true;
    var filter = 'ABCDEFGHIJKMNLÑOPQRSTUVXYZ1234567890=@.;?¿!¡|"[]<>';
    for (var i = 0; i < message.length; i++) {
        if (filter.indexOf(message.charAt(i)) != -1) {
            result = false;
        }
    }
    document.getElementById("userMessages").value = "";
    return result;
}
//this funtion start my application
function runApplication(messages, action) {
    if (messages != 0) {
        if (verifyText(messages) == true) {
            var userMessages = splitPhrase(messages);
            document.getElementById("preview").style.display = "none";
            for (var i = 0; i < userMessages.length; i++) {
                userMessages[i] = encoderMessages(userMessages[i], action);
            }
            document.getElementById("result").innerHTML = "<p id='copyClipboard'>" + concatMessage(userMessages) + "</p><button class='btn btn-copy' onclick='copyToClipBoard()'>Copiar</button>";
        } else {
            popup("¡ERROR! <hr><small>No se pueden usar Mayusculas,Numeros O Caracteres Especiales</small>", true);
        }
    } else {
        popup("¡ERROR! <hr><small>El campo de texto es nulo</small>", true);
        document.getElementById("preview").style.display = "block";
        document.getElementById("result").innerHTML = " ";
    }
    document.getElementById("userMessages").focus();
}

/*
  Aprendiz Daniel Quintero Henriquez 
  Alura Challenge
  Oracle Next Education
*/