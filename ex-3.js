//Задание 3
//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


function reverseString(str) {
    let arr;
    arr = str.split("");
    arr.reverse();
    let newStr;
    newStr = arr.join("");
    console.log (newStr);
    
  }
  
  reverseString('Hello')