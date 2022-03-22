const x = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 10);
  });
  const y = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 10);
  });

Promise.all([x, y]).then((values) => {
  let a = console.log(values[0] );
  let b = console.log(values[1]);

  let c = a+b;
  console.log(c);

});