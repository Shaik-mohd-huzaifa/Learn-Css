const toggleButtons = document.querySelectorAll(".toggleButton");

const content = document.querySelectorAll(".content");

toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener("click", (e) => {
    // here we get the id of the clicked button
    const id = e.target.dataset.id;

    // what we need to do is showing the content of this id
    // and hiding the content that has an id !== of the targetted one
    content.forEach((text) => {
      text.classList.remove("active-content");
    });

    const targettedText = document.getElementById(id);
    targettedText.classList.add("active-content");

    removeactiveClasses();
    toggleButton.classList.add("active");
  });
});
function removeactiveClasses() {
  toggleButtons.forEach((toggleButton) => {
    toggleButton.classList.remove("active");
  });
}

// Event Listener for FD

document.querySelectorAll("#FD").forEach((FD) => {
  FD.addEventListener("click", function (FD) {
    // Here we get the id of the Clicked element
    const userinput = FD.target.dataset.id;
    console.log(userinput);
    const classi = "container FDcontainer";
    // classi = classi.replace("", ",");
    // console.log(classi);
    if (userinput === "R") {
      document.querySelector(".FDcontainer").className = "row " + classi;
      console.log(document.querySelector(".FDcontainer").className);
    } else if (userinput === "RR") {
      document.querySelector(".FDcontainer").className =
        "row-reverse " + classi;
      console.log(document.querySelector(".FDcontainer").className);
    } else if (userinput === "C") {
      document.querySelector(".FDcontainer").className = "column " + classi;
      console.log(document.querySelector(".FDcontainer").className);
    } else if (userinput === "CR") {
      document.querySelector(".FDcontainer").className =
        "column-reverse" + classi;
      console.log(document.querySelector(".FDcontainer").className);
    }
  });
});

// // for the Justify-content:  List items
// const toggleButtonsforDirection = document.querySelectorAll(".toggleButtonD");

// toggleButtonsforDiretion.forEach((toggleButtonD) => {
//   toggleButtonD.addEventListener("click", (e) => {
//     const targettedText = document.getElementById(id);
//     targettedText.classList.add("active-content");

//     removeactiveClasses();
//     toggleButtonD.classList.add("active");
//   });
// });
// function removeactiveClasses() {
//   toggleButtonsforDiretion.forEach((toggleButtonD) => {
//     toggleButtonD.classList.remove("active");
//   });
// }

// // for the Justify Content List items
// const toggleButtonsforJustifyContent =
//   document.querySelectorAll(".toggleButtonJ");

// toggleButtonsforJustifyContent.forEach((toggleButtonJ) => {
//   toggleButtonJ.addEventListener("click", () => {
//     const targettedText = document.getElementById(id);
//     targettedText.classList.add("active-content");
//     removeactiveClasses();
//     toggleButtonJ.classList.add("active");
//   });
// });
// function removeactiveClasses() {
//   toggleButtonsforJustifyContent.forEach((toggleButtonJ) => {
//     toggleButtonJ.classList.remove("active");
//   });
// }
