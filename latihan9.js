function LuasSegitiga(alas, tinggi){
    let luas;
    const data = 1/2;

    luas = alas * data * tinggi
    return luas;
}

let  x = LuasSegitiga(10,20);
    console.log("luas segitiga adalah" + x);
