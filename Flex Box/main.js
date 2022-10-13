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

// Event Listener for Flex Wrap
document.querySelectorAll("#FW").forEach((FW) => {
  FW.addEventListener("click", function (FW) {
    // Here we get the id of the Clicked element
    const Dataid = FW.target.dataset.id;
    console.log(Dataid);
    const classi = "container containerFW";
    // classi = classi.replace("", ",");
    // console.log(classi);
    document.querySelector(".containerFW").className = Dataid + " " + classi;
    document.querySelector("#propertyNameFW").textContent = " " + Dataid;

    if (Dataid === "nowrap") {
      document.querySelector(".containerFW").className += " nowrap";
    } else {
      document.querySelector(".containerFW").className += " ";
    }
  });
});

// Event Listener for Align Self
document.querySelectorAll("#AS").forEach((AS) => {
  AS.addEventListener("click", function (AS) {
    // Here we get the id of the Clicked element
    const Dataid = AS.target.dataset.id;
    console.log(Dataid);
    const classi = "container containerAS";
    // classi = classi.replace("", ",");
    // console.log(classi);
    document.querySelector(".containerAS").className = Dataid + " " + classi;

    document.querySelector("#propertyNameAS").textContent = " " + Dataid;
    if (Dataid === "Baseline") {
      document.querySelector(
        ".Baseline .elements:nth-child(3)"
      ).style.fontSize = "5rem";
      document.querySelector(
        ".Baseline .elements:nth-child(1)"
      ).style.fontSize = "6rem";
    }
    if (Dataid !== "Baseline") {
      document.querySelector(
        `.${Dataid} .elements:nth-child(3)`
      ).style.fontSize = "";
      document.querySelector(
        `.${Dataid} .elements:nth-child(1)`
      ).style.fontSize = "";
    }
  });
});

// ToggleButton Function for FlexDirection
const toggleButtonsFD = document.querySelectorAll(".toggleButtonFD");

toggleButtonsFD.forEach((toggleButtonFD) => {
  toggleButtonFD.addEventListener("click", (e) => {
    // here we get the id of the clicked button
    const id = e.target.dataset.id;
    removeactiveClassesFD();
    toggleButtonFD.classList.add("active");
  });
});

function removeactiveClassesFD() {
  toggleButtonsFD.forEach((toggleButtonFD) => {
    toggleButtonFD.classList.remove("active");
  });
}

// ToggleButton Function for Justify Content

const toggleButtonsJC = document.querySelectorAll(".toggleButtonJC");

toggleButtonsJC.forEach((toggleButtonJC) => {
  toggleButtonJC.addEventListener("click", (e) => {
    // here we get the id of the clicked button
    const id = e.target.dataset.id;
    removeactiveClassesJC();
    toggleButtonJC.classList.add("active");
  });
});

function removeactiveClassesJC() {
  toggleButtonsJC.forEach((toggleButtonJC) => {
    toggleButtonJC.classList.remove("active");
  });
}

// ToggleButton Function for Align Items

const toggleButtonsAI = document.querySelectorAll(".toggleButtonAI");

toggleButtonsAI.forEach((toggleButtonAI) => {
  toggleButtonAI.addEventListener("click", (e) => {
    // here we get the id of the clicked button
    const id = e.target.dataset.id;
    removeactiveClassesAI();
    toggleButtonAI.classList.add("active");
  });
});

function removeactiveClassesAI() {
  toggleButtonsAI.forEach((toggleButtonAI) => {
    toggleButtonAI.classList.remove("active");
  });
}

// ToggleButton Function for Align Content

const toggleButtonsAC = document.querySelectorAll(".toggleButtonAC");

toggleButtonsAC.forEach((toggleButtonAC) => {
  toggleButtonAC.addEventListener("click", (e) => {
    // here we get the id of the clicked button
    const id = e.target.dataset.id;
    removeactiveClassesAC();
    toggleButtonAC.classList.add("active");
  });
});

function removeactiveClassesAC() {
  toggleButtonsAC.forEach((toggleButtonAC) => {
    toggleButtonAC.classList.remove("active");
  });
}

// ToggleButton Function for Flex-Wrap
const toggleButtonsFW = document.querySelectorAll(".toggleButtonFW");

toggleButtonsFW.forEach((toggleButtonFW) => {
  toggleButtonFW.addEventListener("click", (e) => {
    // here we get the id of the clicked button
    const id = e.target.dataset.id;
    removeactiveClassesFW();
    toggleButtonFW.classList.add("active");
  });
});

function removeactiveClassesFW() {
  toggleButtonsFW.forEach((toggleButtonFW) => {
    toggleButtonFW.classList.remove("active");
  });
}

// ToggleButton Function for Align Self
const toggleButtonsAS = document.querySelectorAll(".toggleButtonAS");

toggleButtonsAS.forEach((toggleButtonAS) => {
  toggleButtonAS.addEventListener("click", (e) => {
    // here we get the id of the clicked button
    const id = e.target.dataset.id;
    removeactiveClassesAS();
    toggleButtonAS.classList.add("active");
  });
});

function removeactiveClassesAS() {
  toggleButtonsAS.forEach((toggleButtonAS) => {
    toggleButtonAS.classList.remove("active");
  });
}
