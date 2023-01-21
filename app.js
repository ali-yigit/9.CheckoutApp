const bagPrice = 25.98;
const shoesPrice = 45.99;
const clockPrice = 74.99;

const minus = document.querySelector(".minus");
const amount = document.querySelector(".amount");
const plus = document.querySelector(".plus");

const minusS = document.querySelector(".minusS");
const amountS = document.querySelector(".amountS");
const plusS = document.querySelector(".plusS");

const minusC = document.querySelector(".minusC");
const amountC = document.querySelector(".amountC");
const plusC = document.querySelector(".plusC");

const bagSection = document.querySelector(".bag");
const removeBagBtn = document.querySelector(".removeBagBtn");
const bagToplam = document.querySelector(".toplam");

const shoesSection = document.querySelector(".shoes");
const removeShoesBtn = document.querySelector(".removeShoesBtn");
const shoesToplam = document.querySelector(".toplamS");

const clockSection = document.querySelector(".clock");
const removeClockBtn = document.querySelector(".removeClockBtn");
const clockToplam = document.querySelector(".toplamC");

let bagAmount = +amount.textContent;
let shoesAmount = +amountS.textContent;
let clockAmount = +amountC.textContent;

const taxRate = 0.18;
const grandTotalContainer = document.querySelector(".grand-total");
const sumSubtotal = document.querySelector(".subtotal");

const shipping = 15.0;

function decBag() {
  let urunFiyati = ((bagAmount - 1) * bagPrice).toFixed(2);
  if (bagAmount > 1) {
    bagAmount--;
    amount.innerText--;
    bagToplam.innerText = `Product Total: $ ${urunFiyati}`;
  }
  calculateTotal();
}
function incBag() {
  let urunFiyati = ((bagAmount + 1) * bagPrice).toFixed(2);
  if (bagAmount > 0) {
    bagAmount++;
    amount.innerText++;
    bagToplam.innerText = `Product Total: $ ${urunFiyati}`;
  }
  calculateTotal();
}
removeBagBtn.addEventListener("click", () => {
  bagAmount = 0;
  bagSection.remove();
  calculateTotal();
});

function decShoes() {
  let urunFiyati2 = ((shoesAmount - 1) * shoesPrice).toFixed(2);
  if (shoesAmount > 1) {
    shoesAmount--;
    amountS.innerText--;
    shoesToplam.innerText = `Product Total: $ ${urunFiyati2}`;
  }
  calculateTotal();
}
function incShoes() {
  let urunFiyati2 = ((shoesAmount + 1) * shoesPrice).toFixed(2);
  if (shoesAmount > 0) {
    shoesAmount++;
    amountS.innerText++;
    shoesToplam.innerText = `Product Total: $ ${urunFiyati2}`;
  }
  calculateTotal();
}
removeShoesBtn.addEventListener("click", () => {
  shoesAmount = 0;
  shoesSection.remove();
  calculateTotal();
});

function decClock() {
  let urunFiyati3 = ((clockAmount - 1) * clockPrice).toFixed(2);
  if (clockAmount > 1) {
    clockAmount--;
    amountC.innerText--;
    clockToplam.innerText = `Product Total: $ ${urunFiyati3}`;
  }
  calculateTotal();
}
function incClock() {
  let urunFiyati3 = ((clockAmount + 1) * clockPrice).toFixed(2);
  if (clockAmount > 0) {
    clockAmount++;
    amountC.innerText++;
    clockToplam.innerText = `Product Total: $ ${urunFiyati3}`;
  }
  calculateTotal();
}
removeClockBtn.addEventListener("click", () => {
  clockAmount = 0;
  clockSection.remove();
  calculateTotal();
});

//calculate and update the total sectıon

function calculateTotal() {
  console.log("calculate");
  let subTotal =
    bagAmount * bagPrice + shoesAmount * shoesPrice + clockAmount * clockPrice;
  let tax = subTotal * taxRate;
  sumSubtotal.innerText = subTotal.toFixed(2);
  let grandTotal = subTotal + tax + shipping;

  grandTotalContainer.innerText = `$${grandTotal.toFixed(2)}`;
}
