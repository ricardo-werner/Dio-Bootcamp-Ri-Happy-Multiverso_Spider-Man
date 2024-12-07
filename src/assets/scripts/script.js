/*card home animation*/
function handleMouseEnter() {
  this.classList.add("ms-card--hover");
  document.body.id = `${this.id}-hover`;
}

function handleMouseLeave() {
  this.classList.remove("ms-card--hover");
  document.body.id = "";
}

function addEventListenersToCard() {
  const card = document.getElementsByClassName("ms-card");

  for (let i = 0; i < card.length; i++) {
    const cardElement = card[i]; 
    cardElement.addEventListener("mouseenter", handleMouseEnter);
    cardElement.addEventListener("mouseleave", handleMouseLeave);
}
}

document.addEventListener("DOMContentLoaded", addEventListenersToCard, false);


