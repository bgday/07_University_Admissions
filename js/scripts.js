// inject year into footer
const curYear = new Date();
document.querySelector("#year").textContent = curYear.getFullYear();

const btnElement = document.querySelector('#primaryNav > button');
const navElement = document.querySelector('#primaryNav > ul');

btnElement.addEventListener('click', () => {
  btnElement.classList.toggle('open');
  navElement.classList.toggle('open');

});

/*const hamburgerElement = document.querySelector("#navButton");
const navElement = document.querySelector(".navLinks");
hamburgerElement.addEventListener("click", () => {
  hamburgerElement.classList.toggle("open");
  navElement.classList.toggle("open");
});

import { reviews } from "./reviews.js";
console.log(reviews);

//create an empty card
const myTarget = document.querySelector("#cards");

for (let x = 0; x < reviews.length; x++) {
  //create a section
  const mySection = document.createElement("section");
  const myName = document.createElement("h3");
  myName.textContent = reviews[x].author;

  const myReview = document.createElement("p");
  myReview.textContent = reviews[x].text;

  const myRating = document.createElement("div");

 

  console.log(reviews[x].rating);

  for (let step = 0; step < reviews[x].rating; step++) {
    const rateIndicator = document.createElement("img");
    rateIndicator.src = "/05_Car_Dealership/images/star-svgrepo-com.svg";
    rateIndicator.alt = "star rating"
    myRating.appendChild(rateIndicator);
  }

  //build the figure with child elements
  mySection.appendChild(myName);
  mySection.appendChild(myRating);
  mySection.appendChild(myReview);
  //add a new card to page
  myTarget.appendChild(mySection);
}*/
