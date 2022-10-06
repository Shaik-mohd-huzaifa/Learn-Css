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

// Event Listener for Flex Direction
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
      //select element by data-set
      console.log(document.querySelector(".FDcontainer").className);
    } else if (userinput === "C") {
      document.querySelector(".FDcontainer").className = "column " + classi;
      console.log(document.querySelector(".FDcontainer").className);
    } else if (userinput === "CR") {
      document.querySelector(".FDcontainer").className =
        "column-reverse " + classi;
      console.log(document.querySelector(".FDcontainer").className);
    }
  });
});

// Event Listener for Justify Content
document.querySelectorAll("#JC").forEach((JC) => {
  JC.addEventListener("click", function (JC) {
    // Here we get the id of the Clicked element
    const Dataid = JC.target.dataset.id;
    console.log(Dataid);
    const classi = "container containerJC";
    // classi = classi.replace("", ",");
    // console.log(classi);
    document.querySelector(".containerJC").className = Dataid + " " + classi;
  });
});
