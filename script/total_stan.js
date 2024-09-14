let totalAmount = document.getElementById('total');
let totall = localStorage.getItem('totalll');

if (totall) {
  totalAmount.textContent = `${totall}`;
} else {
  totalAmount.textContent = '$500000';
}
