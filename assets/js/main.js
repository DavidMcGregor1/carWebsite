console.log("WOrking");

// <!---------- SPECIFICATIONS ---------!>

var specNavLink = document.getElementById("specificationsNavLink");

if (window.matchMedia("(max-width: 775px)").matches) {
  console.log("under 524px");
  specNavLink.href = "#SpecificationsMobile";
  console.log("mobile -> " + specNavLink.href);
} else {
  specNavLink.href = "#Specifications";
  console.log("specs -> " + specNavLink.href);
}
