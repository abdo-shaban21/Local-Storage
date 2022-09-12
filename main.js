// start catch the element
let p = document.getElementById("prag");
// catch body
let body = document.getElementsByTagName("body");
// for select type the font
let selectFont = document.getElementById("select-font");
let optionsFont = document.querySelectorAll("#select-font option");
// for select type the font
// for color
let selectColor = document.getElementById("select-color");
let optionsColor = document.querySelectorAll("#select-color option");
// for color
// for size
let selectSize = document.getElementById("select-size");
let optionsSize = document.querySelectorAll("#select-size option");
// for size
// end catch the element
// ******************* for fonts***********************************
// do this statment if user dont do any events 
if (window.localStorage.getItem("font-family")) {
  // add font to paragraph
  p.style.fontFamily = window.localStorage.getItem("font-family");
  // remove attribute name selected
  optionsFont.forEach((op, i, arr) => {
    op.removeAttribute("selected");
    // catch the element === the value in local storage to be selected element 
    document
      .querySelector(`[value="${window.localStorage.getItem("font-family")}"]`)
      .setAttribute("selected", "selected");
  });
}
// if user do event change do this steatment 
selectFont.addEventListener("change", function () {
  // add in local storge key = font-family value 
  window.localStorage.setItem("font-family", selectFont.value);
  // add the font family to p
  p.style.fontFamily = window.localStorage.getItem("font-family");
  // 
  optionsFont.forEach((op, i, arr) => {
    // remove attribute name selected 
    op.removeAttribute("selected");
    // add attribute name selected to the element user changed
    if (op.value === selectFont.value) {
      optionsFont[i].setAttribute("selected", "selected");
    }
  });
});

// ********************************************************
// ******************* for color***********************************
// do this statment if user dont do any events 
if (window.localStorage.getItem("color")) {
  // add font to paragraph
  p.style.color = window.localStorage.getItem("color");
  // remove attribute name selected
  optionsColor.forEach((op, i, arr) => {
    op.removeAttribute("selected");
    // catch the element === the value in local storage to be selected element 
    document
      .querySelector(`[value="${window.localStorage.getItem("color")}"]`)
      .setAttribute("selected", "selected");
  });
}
// if user do event change do this steatment 
selectColor.addEventListener("change", function () {
  // add in local storge key = font-family value 
  window.localStorage.setItem("color", selectColor.value);
  // add the font family to p
  p.style.color = window.localStorage.getItem("color");
  // 
  optionsColor.forEach((op, i, arr) => {
    // remove attribute name selected 
    op.removeAttribute("selected");
    // add attribute name selected to the element user changed
    if (op.value === selectColor.value) {
      optionsColor[i].setAttribute("selected", "selected");
    }
  });
});
// ******************* for size***********************************
// do this statment if user dont do any events 
if (window.localStorage.getItem("font-size")) {
  // add font to paragraph
  p.style.fontSize= window.localStorage.getItem("font-size");
  // remove attribute name selected
  optionsSize.forEach((op, i, arr) => {
    op.removeAttribute("selected");
    // catch the element === the value in local storage to be selected element 
    document
      .querySelector(`[value="${window.localStorage.getItem("font-size")}"]`)
      .setAttribute("selected", "selected");
  });
}
// if user do event change do this steatment 
selectSize.addEventListener("change", function () {
  // add in local storge key = font-family value 
  window.localStorage.setItem("font-size", selectSize.value);
  // add the font family to p
  p.style.fontSize = window.localStorage.getItem("font-size");
  // 
  optionsSize.forEach((op, i, arr) => {
    // remove attribute name selected 
    op.removeAttribute("selected");
    // add attribute name selected to the element user changed
    if (op.value === selectSize.value) {
      optionsSize[i].setAttribute("selected", "selected");
    }
  });
});
// {{{{{{{{{{{{{{{{ this is long solving to task}}}}}}}}}}}}}}}}
// ********************************************************
// *******************for color**********************************
// if (window.localStorage.getItem("color")) {
//   console.log("true");
//   p.style.color = localStorage.getItem("color");
// }
// selectColor.addEventListener("change", function () {
//   console.log(selectColor.value);
//   switch (selectColor.value) {
//     case "red":
//       localStorage.setItem("color", "red");
//       p.style.color = localStorage.getItem("color");
//       break;
//     case "blue":
//       localStorage.setItem("color", "blue");
//       p.style.color = localStorage.getItem("color");
//       break;
//     case "green":
//       localStorage.setItem("color", "green");
//       p.style.color = localStorage.getItem("color");
//       break;
//     case "yellow":
//       localStorage.setItem("color", "yellow");
//       p.style.color = localStorage.getItem("color");
//       break;
//     case "black":
//       localStorage.setItem("color", "black");
//       p.style.color = localStorage.getItem("color");
//       break;
//     case "orange":
//       localStorage.setItem("color", "orange");
//       p.style.color = localStorage.getItem("color");
//       break;

//     default:
//       break;
//   }
// });
// // ******************************************************
// selectSize.addEventListener("change", function () {
//   console.log(selectSize.value);
//   switch (selectSize.value) {
//     case "16":
//       p.style.cssText = "font-size:16px";
//       break;
//     case "18":
//       p.style.cssText = "font-size:18px";
//       break;
//     case "20":
//       p.style.cssText = "font-size:20px";
//       break;
//     case "24":
//       p.style.cssText = "font-size:24px";
//       break;
//     case "28":

//       p.style.cssText = "font-size:28px";
//       break;
//     case "30":
//       p.style.cssText = "font-size:30px";
//       break;

//     default:
//       break;
//   }
// });
// *****************************************************************
