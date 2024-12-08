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

/*card carroussel*/

function selectedCarrousselItem(selectedButtonElement) {
  const carrousselItem = selectedButtonElement.id;
  const carrousselItems = document.querySelector(".ms-cards__carroussel");
  const transform = carrousselItems.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYValue = -120 * (Number(carrousselItem - 1));
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYValue}deg)`);

  carrousselItems.style.transform = newTransform;

  const activeSelectedButton = document.querySelector(".fs-control__button--active");
  activeSelectedButton.classList.remove("fs-control__button--active");
  selectedButtonElement.classList.add("fs-control__button--active");
}


