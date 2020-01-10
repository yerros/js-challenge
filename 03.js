const formater = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
});

var regex = /\s/g;

const product = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

//product = product.replace(regex, '')

const prodArr = product.split('\n')
function addArr(a){
    let prodAdd = []
    for(let i = 1; i < a.length; i++){
        var b = a[i].split(',')
        prodAdd.push({name: b[0], price: formater.format(b[2]), category: b[1]})
    }
    return prodAdd
}

console.log(addArr(prodArr));
