function calculateTotal() {
  const osamaQuantity = parseFloat(document.getElementById("osama").value);
  const hitlerQuantity = parseFloat(document.getElementById("hitler").value);
  const changezQuantity = parseFloat(document.getElementById("changez").value);
  const extraOptions = document.getElementById("glitter");
  const extraOptions2 = document.getElementById("eyes");

  const hitlerPrice = 5.0;
  const osamaPrice = 12.0;
  const changezPrice = 10.0;

  var totalCost =
    osamaQuantity * osamaPrice + hitlerQuantity * hitlerPrice + changezQuantity * changezPrice;

  if (extraOptions.checked) {
    totalCost = totalCost + 1.5;
  }

  if (extraOptions2.checked) {
    totalCost = totalCost + 1.5;
  }

  document.getElementById("total-cost").textContent = "$" + totalCost.toFixed(2);
}
