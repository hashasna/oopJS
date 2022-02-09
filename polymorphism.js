class Hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    makan() {
      return "Hewan sedang makan";
    }
  }
  
  // Buat kode kamu di bawah ini
  class Harimau extends Hewan{
    
    makan(){
      return `${this.nama} makan daging`
    }
  }
  
  var harimauSumatra = new Harimau("Harimau Sumatra")
  console.log(harimauSumatra.makan());