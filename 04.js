function Kabisat(tahun){
    if ((tahun % 4) === 0){
        if ((tahun % 100) !== 0){
            output = 'Tahun Kabisat'
        } else {
            if ((tahun % 400) === 0){
                output = 'Tahun Kabisat'
            } else {
                output = 'Bukan Tahun Kabisat'
            }
        }
    } else {
        output = 'Bukan Tahun Kabisat'
    }
    return output
}

function CheckTahun(from, to){
    for (let i = from; i <= to; i++){
        var tahun = `${i} : ${Kabisat(i)}`
        console.log(tahun);       
    }
}

CheckTahun(2000,2010)