function pow(a, b) {
    let result = a;
  
    for (let i = 1; i < n; i++) {
      result *= a;
    }
  
    return result;
  }
  
  let a = prompt("a?", '')
  let b = prompt("b?", '');
  
  if (b < 1) {
    alert(`Число ${b} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(a, b) );
  }

  //test test test

  //marakesh