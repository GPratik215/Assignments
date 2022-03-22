class MyClass{
    private previousNo: number;
    private currentNo: number;
    constructor(current: any) {
      this.previousNo = fibonacci(this.currentNo - 1);
      this.currentNo = this.currentNo;
    }
    next() {
      return fibonacci(this.currentNo + 1);
    }
  }
    fibonacci = function (num: number) {
    var a = 0,
      b = 1,
      f = 1;
    for (var i = 2; i <= num; i++) {
      f = a + b;
      a = b;
      b = f;
    }
    return f;

    console.log(myClass.next());
  };