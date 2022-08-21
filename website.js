//global variable

let counter = 0;

window.onload = (event) => {
  console.log("page is fully loaded");
  let erfaring = document.getElementById("arbeidserfaring");
  let utdanning = document.getElementById("utdanning-Header");
  let profil = document.getElementById("profil-image");
  utdanning.addEventListener("click", display_education);
  erfaring.addEventListener("click", display_work_experience);
  profil.addEventListener("click", resize);
};

let div_Erfaring = document.getElementById("erfaring-informasjon");

function display_work_experience() {
  let div_Erfaring = document.getElementById("erfaring-informasjon");

  if (div_Erfaring.style.display === "flex") {
    div_Erfaring.style.display = "none";
    profil.style.transition = "transform 0.25s ease";
  } else {
    div_Erfaring.style.display = "flex";
    profil.style.transition = "transform 0.25s ease";
  }
}

function display_education() {
  let utdanning = document.getElementById("utdanning");

  if (utdanning.style.display === "flex") {
    utdanning.style.display = "none";

    console.log("display flex");
  } else {
    utdanning.style.display = "flex";
    console.log("display none");
  }
}

function resize() {
  let profil = document.getElementById("profil-image");
  console.log(counter);
  if (counter % 2 == 0) {
    profil.style.transform = "scale(4)";
    profil.style.transition = "transform 0.25s ease";
    counter++;
  } else {
    profil.style.transform = "scale(1)";
    profil.style.transition = "transform 0.25s ease";
    counter++;
  }
}
