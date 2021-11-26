
function startEnDeCryption() {
    let arrayAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
    let encryptArr = [];
    let keyVal = Number(document.getElementById("keyForCaesar").value);
    let inpTxt = document.getElementById("inputTxt").value;
    let choice1Obj = document.getElementById("encrypt");
    let outpTxtObj = document.getElementById("outpTxt");
    let encrypArrOutp = document.getElementById("encryption-array-output");
    let orgArrOutp = document.getElementById("org-array-output");
    
    outpTxtObj.innerHTML = "";

    //Build an Encryption-Array related to the length of the encrption-key and the origin Array. (Example: keyVal = "3" encrptArr[0] = "d", [1] = "e"... [23] = "z" [24] = "a"...
    for (let i = 0; i < arrayAlpha.length; i++) {
        if ((i + keyVal) < arrayAlpha.length) {
            encryptArr[i] = arrayAlpha[i + keyVal];
        } else {
            encryptArr[i] = arrayAlpha[encryptArr.length + keyVal - arrayAlpha.length];
        }
    }

    //Encrypt or Decrypt
    if (choice1Obj.checked) {
        for (const elem of inpTxt) {
            let indexOrg = arrayAlpha.indexOf(elem.toLowerCase(),0);
            outpTxtObj.innerHTML += encryptArr[indexOrg];
        }
    } else {
        for (const elem of inpTxt) {
            let indexOrg = encryptArr.indexOf(elem.toLowerCase(),0);
            outpTxtObj.innerHTML += arrayAlpha[indexOrg];
        }
    }
    encrypArrOutp.innerHTML = "[" + encryptArr.toString() + "]";
    orgArrOutp.innerHTML = "[" + arrayAlpha.toString() + "]";
}