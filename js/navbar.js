function openNav(navName) {
  if (navName == "leftSidenav") {
    document.getElementById(navName).style.width = "25%";
  } else {
    document.getElementById(navName).style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
  }
}

function closeNav(navName) {
  if (navName == "leftSidenav") {
    document.getElementById(navName).style.width = "0";
  } else {
    document.getElementById(navName).style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
