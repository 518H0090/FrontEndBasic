// Build-in function
/**
 * Alert
 * Console
 * Confirm
 * Prompt
 * Set Timeout
 * Set Interval
 */

console.log("Test");
alert("Thông báo");
confirm("Trên 18 tuổi");
prompt("Nhập giá trị");

setTimeout(function () {
  console.log("Day la log tu setTimeout");
}, 1000);

setInterval(function () {
  console.log("Day la log tu setInterval" + Math.random());
}, 1000);
