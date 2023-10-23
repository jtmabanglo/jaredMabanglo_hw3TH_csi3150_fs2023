//To create dropdown box for Hero Section
const heroSectionArrow = document.querySelector("#heroSectionArrow");
const heroSection = document.querySelector("#heroSection");
const firstInfoSection = document.querySelector("#firstInfoSection");
// To access document body: https://www.w3schools.com/jsref/prop_doc_body.asp
const body = document.body;

// creates dropdown displaying extra info when arrow is clicked
heroSectionArrow.addEventListener("click", (e) => {
  // inserting DOM elements: https://www.w3schools.com/js/js_htmldom_nodes.asp
  // https://www.w3schools.com/jsref/met_document_createelement.asp
  // https://www.w3schools.com/jsref/met_node_insertbefore.asp
  const heroSectionDropdown = document.createElement("section");
  // set attributes of new elements: https://www.educative.io/answers/how-to-add-an-id-to-element-in-javascript
  heroSectionDropdown.setAttribute("class", "Dropdown");
  body.insertBefore(heroSectionDropdown, firstInfoSection);
  const HSDropdownText = document.createElement("p");
  HSDropdownText.innerText =
    "This is Extra Information about the Philippines in a dropdown menu.";
  heroSectionDropdown.appendChild(HSDropdownText);
  const HSClose = document.createElement("button");
  HSClose.setAttribute("class", "button");
  HSClose.innerText = "CLOSE";
  heroSectionDropdown.appendChild(HSClose);

  HSClose.addEventListener("click", (e) => {
    //to remove a DOM element, same references as above
    heroSectionDropdown.remove();
  });
});

//To create Dropdown box for the First Informational Section
const firstSectionButton = document.querySelector("#firstSectionButton");
const destGallery = document.querySelector("#destGallery");

firstSectionButton.addEventListener("click", (e) => {
  const firstSectionDropdown = document.createElement("section");
  firstSectionDropdown.setAttribute("class", "Dropdown");
  body.insertBefore(firstSectionDropdown, destGallery);

  const FSDropdownText = document.createElement("p");
  FSDropdownText.innerText =
    "This is extra information about the First Section in a dropdown menu.";
  firstSectionDropdown.appendChild(FSDropdownText);

  const FSClose = document.createElement("button");
  FSClose.setAttribute("class", "button");
  FSClose.innerText = "CLOSE";
  firstSectionDropdown.appendChild(FSClose);

  FSClose.addEventListener("click", (e) => {
    firstSectionDropdown.remove();
  });
});

//To create dropdown info for Palawan
const img1Container = document.querySelector("#img1Container");
const img1Arrow = document.querySelector("#img1Arrow");

img1Arrow.addEventListener("click", (e) => {
  const img1Dropdown = document.createElement("section");
  img1Dropdown.setAttribute("class", "smallDropdown");
  img1Container.appendChild(img1Dropdown);

  const img1DropdownText = document.createElement("p");
  img1DropdownText.innerText = "This is extra info about Palawan. ";
  img1Dropdown.appendChild(img1DropdownText);

  const img1Close = document.createElement("button");
  img1Close.setAttribute("class", "button");
  img1Close.innerText = "CLOSE";
  img1Dropdown.appendChild(img1Close);

  img1Close.addEventListener("click", (e) => {
    //to remove a DOM element, same references as above
    img1Dropdown.remove();
  });
});

//To create dropdown info for Manila
const img2Container = document.querySelector("#img2Container");
const img2Arrow = document.querySelector("#img2Arrow");

img2Arrow.addEventListener("click", (e) => {
  const img2Dropdown = document.createElement("section");
  img2Dropdown.setAttribute("class", "smallDropdown");
  img2Container.appendChild(img2Dropdown);

  const img2DropdownText = document.createElement("p");
  img2DropdownText.innerText = "This is extra info about Manila. ";
  img2Dropdown.appendChild(img2DropdownText);

  const img2Close = document.createElement("button");
  img2Close.setAttribute("class", "button");
  img2Close.innerText = "CLOSE";
  img2Dropdown.appendChild(img2Close);

  img2Close.addEventListener("click", (e) => {
    img2Dropdown.remove();
  });
});

//To create dropdown info for Mt. Mayon
const img3Container = document.querySelector("#img3Container");
const img3Arrow = document.querySelector("#img3Arrow");

img3Arrow.addEventListener("click", (e) => {
  const img3Dropdown = document.createElement("section");
  img3Dropdown.setAttribute("class", "smallDropdown");
  img3Container.appendChild(img3Dropdown);

  const img3DropdownText = document.createElement("p");
  img3DropdownText.innerText = "This is extra info about Mt. Mayon. ";
  img3Dropdown.appendChild(img3DropdownText);

  const img3Close = document.createElement("button");
  img3Close.setAttribute("class", "button");
  img3Close.innerText = "CLOSE";

  img3Dropdown.appendChild(img3Close);
  img3Close.addEventListener("click", (e) => {
    img3Dropdown.remove();
  });
});

//To create Dropdown box for the Destination Gallery Section
const DGButton = document.querySelector("#destGalleryButton");
const tourSection = document.querySelector("#tourSection");

DGButton.addEventListener("click", (e) => {
  const DGDropdown = document.createElement("section");
  DGDropdown.setAttribute("class", "Dropdown");
  body.insertBefore(DGDropdown, tourSection);

  const DGDropdownText = document.createElement("p");
  DGDropdownText.innerText =
    "This is extra information about the Destination Gallery in a dropdown menu.";
  DGDropdown.appendChild(DGDropdownText);

  const DGClose = document.createElement("button");
  DGClose.setAttribute("class", "button");
  DGClose.innerText = "CLOSE";
  DGDropdown.appendChild(DGClose);

  DGClose.addEventListener("click", (e) => {
    DGDropdown.remove();
  });
});

//To create Dropdown box for the Testimonial Section
const testimonialArrow = document.querySelector("#testimonialArrow");
const testimonial = document.querySelector("#testimonial");
const bottomGallery = document.querySelector("#bottomGallery");

testimonialArrow.addEventListener("click", (e) => {
  const testimonialDropdown = document.createElement("section");
  testimonialDropdown.setAttribute("class", "Dropdown");
  body.insertBefore(testimonialDropdown, bottomGallery);

  const testDropdownText = document.createElement("p");
  testDropdownText.innerText =
    "This is extra Testimonial Information in a dropdown menu.";
  testimonialDropdown.appendChild(testDropdownText);

  const testClose = document.createElement("button");
  testClose.setAttribute("class", "button");
  testClose.innerText = "CLOSE";
  testimonialDropdown.appendChild(testClose);

  testClose.addEventListener("click", (e) => {
    testimonialDropdown.remove();
  });
});
