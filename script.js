// const title = document.querySelector("h1");
// title.innerHTML = "hehe sd31";

// setInterval(() => {
//   title.innerHTML = title.innerHTML += "1";
// }, 1000);

// makes a window appear that says hello with opt to close
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   dialog.close()
// })

// const dialog = document.querySelector("#MyDialog");
// setTimeout(() => {
//   dialog.showModal();
// }, 5000);

const PythonDialog = document.querySelector("#python");

const python = document.querySelector("#PythonButton");
python.addEventListener("click", () => {
  PythonDialog.showModal();
});

const PythonButton = document.querySelector("#ClosePython");
PythonButton.addEventListener("click", () => {
  PythonDialog.close();
});


const HtmlDialog = document.querySelector("#html");

const Html = document.querySelector("#HtmlButton");
Html.addEventListener("click", () => {
  HtmlDialog.showModal();
});

const HtmlButton = document.querySelector("#CloseHtml");
HtmlButton.addEventListener("click", () => {
  HtmlDialog.close();
});


const CssDialog = document.querySelector("#css");

const Css = document.querySelector("#cssButton");
Css.addEventListener("click", () => {
  CssDialog.showModal();
});

const CssButton = document.querySelector("#CloseCss");
CssButton.addEventListener("click", () => {
  CssDialog.close();
});


const jsDialog = document.querySelector("#js");

const js = document.querySelector("#jsButton");
js.addEventListener("click", () => {
  jsDialog.showModal();
});

const jsButton = document.querySelector("#Closejs");
jsButton.addEventListener("click", () => {
  jsDialog.close();
});

