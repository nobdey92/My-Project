// When clicks on the menu button, opens up DropDownMenu options
// and can toggle between hiding and showing the DropDownMenu content

function buttonDropDown() {
  document.getElementById("menuDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".buttonDrop")) {
    let dropdowns = document.getElementsByClassName("dropMenuItems");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
