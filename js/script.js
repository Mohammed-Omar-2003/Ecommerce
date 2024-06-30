// -----start header in all file
let bar = document.getElementById("bar");
let nav = document.getElementById("navbar");
let close = document.getElementById("close");

bar.onclick = function () {
  nav.classList.add("active");
  console.log(bar);
  console.log(nav);
};
close.onclick = function () {
  nav.classList.remove("active");
};
// end header
//delete
document.querySelectorAll(".x").forEach(function (element) {
  element.addEventListener("click", function () {
    // حذف الصف الأب (tr)
    this.closest("tr").remove();
  });
});
let prices = document.querySelectorAll(".price");
let numbers = document.querySelectorAll(".number");
let totals = document.querySelectorAll(".total");

numbers.forEach((input, index) => {
  if (prices[index] && totals[index]) {
    // التأكد من وجود العناصر
    input.addEventListener("mouseleave", function () {
      // الحصول على السعر وإزالة علامة الدولار
      let price = parseFloat(prices[index].textContent.replace("$", ""));
      // الحصول على قيمة الإدخال (العدد)
      let number = parseFloat(input.value);
      // حساب الإجمالي
      let total = price * number;
      // تحديث حقل الإجمالي بالقيمة الجديدة
      totals[index].innerHTML = `$${total.toFixed(2)}`;
      console.log(totals[index].innerHTML);
    });
  }
});
