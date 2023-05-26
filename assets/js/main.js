console.log("WOrking");

// <!---------- SPECIFICATIONS ---------!>

var specNavLink = document.getElementById("specificationsNavLink");

if (window.matchMedia("(max-width: 1015px)").matches) {
  console.log("under 524px");
  specNavLink.href = "#SpecificationsMobile";
  console.log("mobile -> " + specNavLink.href);
} else {
  specNavLink.href = "#Specifications";
  console.log("specs -> " + specNavLink.href);
}

var optionsNavLink = document.getElementById("optionsNavLink");

if (window.matchMedia("(max-width: 1015px)").matches) {
  console.log("under 524px");
  optionsNavLink.href = "#OptionsMobile";
  console.log("mobile -> " + optionsNavLink.href);
} else {
  optionsNavLink.href = "#Options";
  console.log("specs -> " + optionsNavLink.href);
}
