//buat segitiga pake function
function bentukSegitiga(alas) {
    for (let i = 1; i <= alas; i++) {
        let bentuk = "";

        for (let j = 0; j < alas - i; j++) {
            bentuk += " ";
        }

        for (let k = 0; k < (2 * i - 1); k++) {
            bentuk += "*";
        }

        console.log(bentuk);
    }
}

bentukSegitiga(5);