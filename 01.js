function Palindrom(a){
    var regex = /\W/g;
    var lowerCase = a.toLowerCase().replace(regex,'');
    var check = lowerCase.split('').reverse().join('');
    if(lowerCase === lowerCase){
        console.log('Palindrom');   
    }else{
        console.log('Bukan Palindrom')
    }
    
}

Palindrom('kasur ini rusak')