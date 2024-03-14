// function yang dipanggil oleh button "Hitung BMI"
function BMI(){
  // mendapatkan nilai input dan menyimpannya dalam variabel
  let weight = parseInt(document.getElementById("weight").value);
  let height = parseInt(document.getElementById("height").value);
  let age = parseInt(document.getElementById("age").value);
  let sex = document.getElementById("sex-option").value;
  
  let bmi = calculateBMI(weight,height); //memanggil func calculateBMI untuk menghitung BMI dan menyimpannya dalam variabel
  // Mengecek apakah bmi dan input tidak kosong
  if (!isNaN(bmi) && !isNaN(age)) { 
    // jika tidak kosong jalankan func dibawah
    animateElement("result-box", "animate-pop-up")
    resultBMI(bmi);
  } else { 
    // jika kosong jalankan func ini
    errorInput();
  }  
  console.log(weight, height, age, sex, bmi);
  return false;
}
// func yang dipanggil oleh button "Reset" untuk me-reset semua input yang sudah dimasukkan
function Reset(){
  document.getElementById("sex-option").selectedIndex = 0;
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("age").value = "";
}

// function untuk validasi input yang dimasukkan
function validateInput(input) { 
  input.value = input.value.replace(/^0+/, '');  // Hapus nol dan +- di depan
}
// function untuk mengatasi error karna aksi menekan tombol "Hitung BMI" saat input kosong
function errorInput(){
  animateElement("result", "animate-pop-up");
  document.getElementById("result").innerHTML = "Tolong masukkan inputnya terlebih dahulu!";
  document.getElementById("result").style.color = "red";
  console.log("Input Kosong!")
};

// function untuk menentukan status berat badan
function resultBMI(bmi){
  
  document.getElementById("result").innerHTML = "Hasil";
  document.getElementById("result").style.color = "black";
  // inisialisasi variabel 
  let result = document.getElementById("result-1");
  let resultBMI = document.getElementById("result-2");
  let resultStatus = document.getElementById("result-3");
  let resultStatusBMI = document.getElementById("result-4");
  let resultTips = document.getElementById("result-5");

  if(bmi < 18.5){ // jika nilai bmi kurang dari 18.5, tampilkan hasil "Underweight"
    result.innerHTML = "Underweight!"; 
    resultBMI.innerHTML = bmi; resultBMI.style.color = "blue";
    resultStatus.innerHTML = "Anda memiliki berat badan yang kurang";
    resultStatusBMI.innerHTML = "Hasil BMI kurang dari 18.5"; resultStatusBMI.style.color = "orange";
    resultTips.innerHTML = "Cara terbaik untuk menaikkan berat badan adalah dengan memperbanyak konsumsi makanan berserat dan berlemak.";
    console.log("Kekurangan berat badan!")
  }else if(bmi >= 18.5 && bmi <= 24.9){ // jika nilai bmi diantara 18.5 dan 24.9, tampilkan hasil "Ideal" 
    result.innerHTML = "Ideal!"; 
    resultBMI.innerHTML = bmi; resultBMI.style.color = "green";
    resultStatus.innerHTML = "Selamat! Anda memiliki berat badan ideal";
    resultStatusBMI.innerHTML = "Hasil BMI diantara 18.5 dan 24.9"; resultStatusBMI.style.color = "orange";
    resultTips.innerHTML = "Cara terbaik mempertahankan berat badan adalah dengan menjaga pola makan dan berolahraga.";
    console.log("Normal Ideal!")
  }else if(bmi >= 25.0 && bmi <= 29.9){ // jika nilai bmi diantara 25 dan 29.9, tampilkan hasil "Overweight" 
    result.innerHTML = "Overweight!"; 
    resultBMI.innerHTML = bmi; resultBMI.style.color = "blue";
    resultStatus.innerHTML = "Anda memiliki berat badan berlebih";
    resultStatusBMI.innerHTML = "Hasil BMI diantara 25 dan 29.9"; resultStatusBMI.style.color = "orange";
    resultTips.innerHTML = "Cara terbaik menurunkan berat badan adalah dengan mengatur konsumsi makanan dan sering berolahraga.";
    console.log("Kelebihan berat badan!")
  }else if(bmi => 30.0){ // jika nilai bmi lebih dari 30, tampilkan hasil "Obesitas" 
    result.innerHTML = "Obesity!"; 
    resultBMI.innerHTML = bmi; resultBMI.style.color = "red";
    resultStatus.innerHTML = "Anda memiliki obesitas berlebih";
    resultStatusBMI.innerHTML = "Hasil BMI lebih dari 30"; resultStatusBMI.style.color = "orange";
    resultTips.innerHTML = "Dianjurkan menemui dokter atau ahli gizi yang terpercaya untuk konsultasi lebih lanjut";
    console.log("Obesitas!")
  }
  animateText(resultTips);
  
}
// function untuk menjalankan animasi text muncul satu persatu
function animateText(element) {
  var text = element.innerHTML;
  element.innerHTML = '';
  
  // looping untuk memunculkan karakter
  for (let i = 0; i < text.length; i++) {
    setTimeout(function() {
      element.innerHTML += text[i];
    }, i * 20); 
  }
}
// function untuk menjalankan animasi beberapa elemen
function animateElement(IdName, className) {
  let element = document.getElementById(IdName);
  element.classList.add(className);
  setTimeout(function() {
    element.classList.remove(className);
  }, 500);
}

// function untuk menghitung nilai bmi
function calculateBMI(weight, height){
  height = height / 100;
  let result = weight / (height*height);
  return result.toFixed(1);
}