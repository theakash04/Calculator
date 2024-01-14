//DOM selection
let numButtons = document.querySelector(".nums");
let operator = document.querySelector(".operators");
let fnbtn = document.querySelector(".ex-btn");
let currentNum = document.querySelector(".current");
let prev = document.querySelector(".prev");

// variable declaration which will be using below
let allNum = [];
let currNum = [];
let result = 0;
let change;
let temp = false;
let fromResult = false;

// Calculator operator fumctions

// Addition function
const add = () => {
  if (change === "substract") {
    result -= allNum[0];
    prev.textContent = `${result} +`;
    currentNum.textContent = ``;
    currNum = [];
    change = "Add";
  } else if (change === "multiply") {
    result *= allNum[0];

    prev.textContent = `${result} +`;
    currentNum.textContent = ``;
    currNum = [];
    change = "Add";
  } else if (change === "divide") {
    result /= allNum[0];

    prev.textContent = `${result} +`;
    currentNum.textContent = ``;
    currNum = [];
    change = "Add";
  } else {
    // Adding inputed number
    result += allNum[0];

    // printing it on screen
    prev.textContent = `${result} + `;

    currentNum.textContent = ``;
    currNum = [];
    result = result;
    change = "Add";
  }
};

// subtraction fuction
const substract = () => {
  if (change === "Add") {
    result += allNum[0];

    prev.textContent = `${result} -`;
    currentNum.textContent = ``;
    currNum = [];
    change = "substract";
  } else if (change === "Multiply") {
    result *= allNum[0];

    prev.textContent = `${result} -`;
    currentNum.textContent = ``;
    currNum = [];
    change = "substract";
  } else if (change === "divide") {
    result /= allNum[0];

    prev.textContent = `${result} -`;
    currentNum.textContent = ``;
    currNum = [];
    change = "substract";
  } else {
    if(allNum> result){
      result = allNum[0] - result;
    } else{
      result = result - allNum[0];
    }
    prev.textContent = `${result} -`;
    currentNum.textContent = ``;
    currNum = [];
    change = "substract";
  }
};

// Multiplication function
const multiply = () => {
  if (result === 0 && !fromResult) {
    result = 1;
  }

  if (change === "Add") {
    result += allNum[0];

    prev.textContent = `${result} * `;
    currentNum.textContent = ``;
    currNum = [];
    change = "Multiply";
  } else if (change === "substract") {
    result -= allNum[0];

    prev.textContent = `${result} * `;
    currentNum.textContent = ``;
    currNum = [];
    change = "Multiply";
  } else if (change === "divide") {
    result /= allNum[0];

    prev.textContent = `${result} * `;
    currentNum.textContent = ``;
    currNum = [];
    change = "Multiply";
  } else {
    result *= allNum[0];

    prev.textContent = `${result} * `;
    currentNum.textContent = ``;
    currNum = [];
    change = "Multiply";
  }
};

//division function
const divide = () => {
  if (change === "Add") {
    result += allNum[0];

    prev.textContent = `${result} / `;
    currentNum.textContent = ``;
    currNum = [];
    change = "divide";
  } else if (change === "substract") {
    result -= allNum[0];

    prev.textContent = `${result} / `;
    currentNum.textContent = ``;
    currNum = [];
    change = "divide";
  } else if (change === "Multiply") {
    result *= allNum[0];

    prev.textContent = `${result} / `;
    currentNum.textContent = ``;
    currNum = [];
    change = "divide";
  } else {
    if (result === 0) {
      prev.textContent = `${allNum[0]} / `;
      currentNum.textContent = ``;
      result = allNum[0];
      change = "divide";
      fromResult = false;
    } else if(temp){
      prev.textContent = `${result} /`
      currentNum.textContent = '';
      currNum = [];
      change = "divide"
      temp = false;
    } else {
      result = allNum[0] / currNum;
      prev.textContent = `${result} /`;  
      currentNum.textContent = ``;
      currNum = [];
      change = "divide";
    }
  }
};

// result function
const resultbtn = () => {
  if (change === "Add") {
    result += allNum[0];
    currentNum.textContent = result;
  } else if (change === "substract") {
    result -= allNum[0];
    currentNum.textContent = result;
  } else if (change === "Multiply") {
    result *= allNum[0];
    currentNum.textContent = result;
  } else if (change === "divide") {
    result /= allNum[0];
    currentNum.textContent = result;
  } else {
    currentNum.textContent = "Error";
  }
};



//Mouse click function
const clickfnc = () => {
  //numbers
  for (let i = 0; i < numButtons.children.length; i++) {
    numButtons.children[i].addEventListener("click", () => {
      currentNum.textContent = `${currentNum.textContent}${9 - i}`;
      currNum.push(currentNum.textContent);
    });
  }

  // Delete btn
  operator.children[0].addEventListener("click", () => {
    currNum.pop();
    currentNum.textContent = currNum[currNum.length - 1];
  });

  //operators

  // Add
  operator.children[1].addEventListener("click", () => {
    if (fromResult) {
      allNum[0] = 0;
      fromResult = false;
    } else {
      allNum[0] = Number(currNum[currNum.length - 1]);
    }
    add();
  });

  // substract
  operator.children[2].addEventListener("click", () => {
    if (fromResult) {
      allNum[0] = 0;
      fromResult = false;
    } else {
      allNum[0] = Number(currNum[currNum.length - 1]);
    }
    substract();
  });

  //multiplication
  operator.children[3].addEventListener("click", () => {
    if (fromResult) {
      allNum[0] = 1;
      fromResult = false;
    } else {
      allNum[0] = Number(currNum[currNum.length - 1]);
    }
    multiply();
  });

  //divide
  operator.children[4].addEventListener("click", () => {
    if (fromResult) {
      prev.textContent = `${allNum[0]} / `;
      currentNum.textContent = ``;
      result = allNum[0];
      change = "divide";
      fromResult = false;
    } else {
      allNum[0] = Number(currNum[currNum.length - 1]);
    }
    divide();
  });

  //result btn
  fnbtn.children[1].addEventListener("click", () => {
    allNum[0] = Number(currNum[currNum.length - 1]);
    resultbtn();
    prev.textContent = "";
    change = "";
    allNum[0] = result;
    fromResult = true;
    temp = true;
  });

  // Reset btn
  fnbtn.children[0].addEventListener("click", () => {
    currentNum.textContent = ``;
    prev.textContent = "";
    allNum = [];
    currNum = [];
    result = 0;
    change = null;
    fromResult = false;
  });
};

//keyboard press event function
const keypressfnc = () => {
  document.addEventListener("keydown", (e) => {
    let digit = e.key;
    //numbers
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(digit)) {
      e.preventDefault();
      currentNum.textContent += digit;
      currNum.push(currentNum.textContent);
    }
    // Delete btn
    else if (e.key === "Backspace") {
      e.preventDefault();
      currNum.pop();
      currentNum.textContent = currNum[currNum.length - 1];
    }
    //Add
    else if (e.key === "+") {
      e.preventDefault();
      if (fromResult) {
        allNum[0] = 0;
        fromResult = false;
      } else {
        allNum[0] = Number(currNum[currNum.length - 1]);
      }
      add();
    }
    //substract
    else if (e.key === "-") {
      e.preventDefault();
      if (fromResult) {
        allNum[0] = 0;
        fromResult = false;
      } else {
        allNum[0] = Number(currNum[currNum.length - 1]);
      }
      substract();
    }
    //multiplication
    else if (e.key === "*") {
      e.preventDefault();
      if (fromResult) {
        allNum[0] = 1;
        fromResult = false;
      } else {
        allNum[0] = Number(currNum[currNum.length - 1]);
      }
      multiply();
    }
    //division
    else if (e.key === "/") {
      e.preventDefault();
      if (fromResult) {
        allNum[0] = 0;
        fromResult = false;
      } else {
        allNum[0] = Number(currNum[currNum.length - 1]);
      }
      divide();
    }

    //result btn
    else if (e.key === "Enter") {
      e.preventDefault();
      allNum[0] = Number(currNum[currNum.length - 1]);
      resultbtn();
      prev.textContent = "";
      change = "";
      fromResult = true;
      temp = true;
    }

    //reset button
    else if (e.key === "f") {
      e.preventDefault();
      currentNum.textContent = ``;
      prev.textContent = "";
      allNum = [];
      currNum = [];
      result = 0;
      change = null;
      fromResult = false;
    }
  });
};


clickfnc();
keypressfnc();