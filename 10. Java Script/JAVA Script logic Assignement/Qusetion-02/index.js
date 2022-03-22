let number = prompt("Enter the value of n: ");

let sum = 0;
let arr = [];

for (let i = 1; i <= number; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    arr.push(i);
    sum += i;
  } else if (i % 3 == 0) {
    arr.push(i);
    sum += i;
  } else if (i % 5 == 0) {
    arr.push(i);
    sum += i;
  }
}

let h3node = document.getElementById("pop");
h3node.innerText = sum;
