function bentukSegitiga(alas, tinggi) {
    let bentuk = "";

    for (let i = 1; i <= tinggi; i++) {
        let spasi = ' '.repeat(tinggi - i);

        let asterisk = '*'.repeat(2 * i - 1);

        bentuk += spasi + asterisk + '\n';
    }
    console.log(bentuk);
}

bentukSegitiga(10, 10);
