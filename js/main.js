function addName() {
    var node = document.createElement("li");

    var person = prompt("Please enter your name", "Your Name");
    var textnode = document.createTextNode(person);

    node.appendChild(textnode);
    node.classList.add("name");

    var numbernode = document.createElement("INPUT");
    numbernode.setAttribute("type", "number");
    numbernode.setAttribute("min", 1);
    numbernode.setAttribute("step", 1);
    numbernode.setAttribute("placeholder", 1);
    node.appendChild(numbernode);

    if (person != null) {
      document.getElementById("names").appendChild(node);
    }
  }
  
  function removeName() {
    var x = document.getElementsByClassName("name");
    x[x.length - 1].remove();
  }
  
  function selectName() {
    var select = document.getElementById("names").lastElementChild.innerHTML;
    if (select != null) {
    document.getElementById("display").innerHTML = select;
    }
  }
  
  function unSelectName() {
    document.getElementById("display").innerHTML = "";
  }

  // Add an editing feature
  // If deleting a selected node, also unselect it
  // Save the list as a pdf