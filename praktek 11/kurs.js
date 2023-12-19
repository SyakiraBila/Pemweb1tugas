// Kurs perhitungan dolar ke rupiah
function kurs(){
    let masuk = document.getElementById("masuk").value
    let Keluar = document.getElementById("Keluar")
    let angka = 14650

    let perhitungan = masuk * angka

    Keluar.innerHTML = perhitungan
}

// Penjumlahan 2 bilangan
function penjumlahan(){
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    let Jadi = parseInt(number1) + parseInt(number2)

    hasil.innerHTML = Jadi
}