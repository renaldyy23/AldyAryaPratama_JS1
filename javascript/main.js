let nama = 'Aldy Arya Pratama'
let umur = 20

alert(`Nama saya adalah ${nama}, umur saya adalah ${umur}`)

// // if, else, nested if

const game = 'Mobile Legends'

if (game == 'Mobile Legends') {
    console.log('Mobile Legends');
}

let mobil = prompt('Apakah kamu memiliki mobil?')

if (mobil == 1){
    mobil = 'punya mobil'
}else {
    mobil = 'tidak punya mobil'
}
alert(`Nama saya adalah ${nama}, umur saya adalah ${umur}, saya ${mobil}`)

let angka = prompt('Masukkan angka')

if (angka >=3 && angka <=5){
    if (angka >3){
        console.log('Clash of Clans');
    }else{
        console.log('PUBG');
    }
}else if (angka <3){
    console.log('Mobile Legends');
}else{
    console.log('Free Fire');
}


// // switch case

let motor = 2
switch(motor) {
    case 1:
        motor = 'hanya punya 1 motor'
    break
    case 2:
        motor = 'punya 2 motor'
    break
    default:
        motor = 'tidak punya motor'
    break
}
alert(`Nama saya adalah ${nama}, umur saya adalah ${umur}, saya ${motor}`)


// // for statement

for (let x = 0; x < 10; x = x + 1){
    console.log('ALDY ARYA PRATAMA', x)
}

// // while, do while

let a = 0
while (a < 10){
    a++
    console.log('RENALDY', a)
}

let s = 0
do {
    s++
    console.log('PRATAMA', s)
}while(s < 10)

// function

function addName(namadepan, namabelakang){
    console.log('Nama Depan: ', namadepan)
    console.log('Nama Belakang: ', namabelakang)
}
addName('ALDY', 'PRATAMA')

function fullname(){
    return 'Aldy Arya Pratama'
}
alert(fullname())