const word = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`


const wordArr = word.split('\n').join(' ').split(' ')
let sum = ''
function getLength(a){
    var hasil = 0
    for(let i = 0; i < a.length; i++){
       hasil += a[i].length
    }
    console.log(hasil)
}
getLength(wordArr)
