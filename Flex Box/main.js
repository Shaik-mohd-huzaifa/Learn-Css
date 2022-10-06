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
      document.querySelector("#propertyName").textContent = " row";
    } else if (userinput === "RR") {
      document.querySelector(".FDcontainer").className =
        "row-reverse " + classi;
      //select element by data-set
      console.log(document.querySelector(".FDcontainer").className);
      document.querySelector("#propertyName").textContent = " row-reverse";
    } else if (userinput === "C") {
      document.querySelector(".FDcontainer").className = "column " + classi;
      console.log(document.querySelector(".FDcontainer").className);
      document.querySelector("#propertyName").textContent = " column";
    } else if (userinput === "CR") {
      document.querySelector(".FDcontainer").className =
        "column-reverse " + classi;
      console.log(document.querySelector(".FDcontainer").className);
      document.querySelector("#propertyName").textContent = " column-reverse";
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
    document.querySelector("#propertyNameJC").textContent = " " + Dataid;
  });
});

// Event Listener for Align Items
document.querySelectorAll("#AI").forEach((AI) => {
  AI.addEventListener("click", function (AI) {
    // Here we get the id of the Clicked element
    const Dataid = AI.target.dataset.id;
    console.log(Dataid);
    const classi = "container containerAI";
    // classi = classi.replace("", ",");
    // console.log(classi);
    document.querySelector(".containerAI").className = Dataid + " " + classi;
    document.querySelector("#propertyNameAI").textContent = " " + Dataid;
  });
});

// Event Listener for Align Content
// Event Listener for Align Items
document.querySelectorAll("#AC").forEach((AC) => {
  AC.addEventListener("click", function (AC) {
    // Here we get the id of the Clicked element
    const Dataid = AC.target.dataset.id;
    console.log(Dataid);
    const classi = "container containerAC";
    // classi = classi.replace("", ",");
    // console.log(classi);
    document.querySelector(".containerAC").className = Dataid + " " + classi;
    document.querySelector("#propertyNameAC").textContent = " " + Dataid;
  });
});
