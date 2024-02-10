const nama="hnd";
let usia=30;
const biodata =document.getElementById('biodatadarijs')
console.log(biodata);
// conts adalah type data yang konstan tidak dapat diplace
// let adalah tipe data yang bisa di 
// untuk menggabungkan data consolog pakai tanda curek di bawah angka1
// function adalah fungsi untuk memulai logika atau metode atau yang lainya
function generateBiodata(){
    let generasi
    if(usia ==30){
        generasi="anda luar biasa"
    }
    else{
        generasi="generasi hebat"
    }
    return biodata.innerHTML=generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();
