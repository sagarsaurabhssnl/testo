var pressed = {
  tarikSl: false,
  nedimSl: false,
  amarSl: false,
};

var i = 0;
function slideLeft(name1, name2, name3) {
  document.getElementById("leftSidenav").style.width = "35%";
  if (!pressed[name1]) {
    document.getElementById(name1).animate(
      [
        // keyframes
        { transform: "translateX(0px)" },
        { transform: "translateX(-30px)" },
      ],
      {
        // timing options
        duration: 500,
        easing: "ease",
      }
    );
    document.getElementById(name2).animate(
      [
        // keyframes
        { transform: "translateX(0px)" },
        { transform: "translateX(-30px)" },
      ],
      {
        // timing options
        duration: 600,
        easing: "ease",
      }
    );
    document.getElementById(name1).style.transform = "translateX(-30px)";
    document.getElementById(name2).style.transform = "translateX(-30px)";
    document.getElementById(name3).animate(
      [
        // keyframes
        { width: "0px" },
        { width: "270px" },
      ],
      {
        // timing options
        duration: 150,
        easing: "ease",
      }
    );

    document.getElementById(name3).animate(
      [
        // keyframes
        { opacity: "0%" },
        { opacity: "100%" },
      ],
      {
        // timing options
        duration: 1500,
        easing: "ease",
      }
    );
    document.getElementById(name3).style.opacity = "100%";
    document.getElementById(name3).style.width = "270px";
    document.getElementById(name3).style.visibility = "visible";
    pressed[name1] = true;
  } else {
    document.getElementById(name1).animate(
      [
        // keyframes
        { transform: "translateX(-30px)" },
        { transform: "translateX(0px)" },
      ],
      {
        // timing options
        duration: 500,
        easing: "ease",
      }
    );
    document.getElementById(name2).animate(
      [
        // keyframes
        { transform: "translateX(-30px)" },
        { transform: "translateX(0px)" },
      ],
      {
        // timing options
        duration: 530,
        easing: "ease",
      }
    );
    document.getElementById(name1).style.transform = "translateX(0px)";
    document.getElementById(name2).style.transform = "translateX(0px)";
    document.getElementById(name3).style.visibility = "hidden";
    document.getElementById(name3).animate(
      [
        // keyframes
        { width: "270px" },
        { width: "0px" },
      ],
      {
        // timing options
        duration: 150,
        easing: "ease",
      }
    );

    document.getElementById(name3).style.width = "0px";
    pressed[name1] = false;
    i = 0;
    for (element in pressed) {
      console.log(pressed[element]);
      if (pressed[element]) i++;
    }

    if (i == 0) document.getElementById("leftSidenav").style.width = "20%";
  }
}

function resetPic() {
  pressed["tarikSl"] = false;
  pressed["nedimSl"] = false;
  pressed["amarSl"] = false;
  document.getElementById("tarikSl").style.transform = "translateX(0px)";
  document.getElementById("nedimSl").style.transform = "translateX(0px)";
  document.getElementById("amarSl").style.transform = "translateX(0px)";
  document.getElementById("tarikTxt").style.transform = "translateX(0px)";
  document.getElementById("nedimTxt").style.transform = "translateX(0px)";
  document.getElementById("amarTxt").style.transform = "translateX(0px)";
  document.getElementById("aboutTarik").style.opacity = "0%";
  document.getElementById("aboutNedim").style.opacity = "0%";
  document.getElementById("aboutAmar").style.opacity = "0%";
  document.getElementById("aboutTarik").style.visibility = "hidden";
  document.getElementById("aboutNedim").style.visibility = "hidden";
  document.getElementById("aboutAmar").style.visibility = "hidden";
  document.getElementById("aboutTarik").style.width = "0px";
  document.getElementById("aboutNedim").style.width = "0px";
  document.getElementById("aboutAmar").style.width = "0px";
}
