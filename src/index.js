console.log(data);

// WRITE YOUR CODE BELOW!

// Instructions
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// Tips
// - Take advantage of scope in JS to have access to the data you need
// - Remember you can add event listeners to any element on the page

//dogsListEl = ul
{/* <li class="dogs-list__button">Mr. Bonkers</li>  */}

const dogsListEl  = document.querySelector(".dogs-list");
const mainSectionEl = document.querySelector(".main__dog-section");


function renderDogsList(dogs){

for (let i = 0; i < dogs.length; i++){

    const liEl = document.createElement("li");
    liEl.className = "dogs-list__button";

    let dogsName = dogs[i].name;

    liEl.innerText = `${dogsName}`;



    liEl.addEventListener("click", () => {

        renderMainCard(dog);

      });
          dogsListEl.append(liEl);

}

return dogsListEl;
}

const dogsList = renderDogsList(data);


function renderMainCard(dog){
    mainSectionEl.innerHTML = "";
    const headingEl = document.createElement("h2");
    headingEl.innerText = dog.name;

    mainSectionEl.append(headingEl);

    const imgEl = document.createElement("img");
    imgEl.setAttribute("height", 300);
    imgEl.setAttribute("width", 400);
    imgEl.src = dog.image;

    mainSectionEl.append(imgEl);
}
renderMainCard(data[2]);

function renderBioSection(bio){

    const divEl = document.createElement("div");
    divEl.className = "main__dog-section__desc";

    const headingEl = document.createElement("h3");
    headingEl.innerText = "Bio";

    divEl.append(headingEl);

    const paragraphEl = document.createElement("p");
    paragraphEl.innerText = "Lorem, ipsum dolor sit amet...";

    divEl.append(paragraphEl);

    return divEl;
}

function renderBehaviourSection(behaviour) {
  
    const divEl = document.createElement("div");
    divEl.className = "main__dog-section__btn";
  
    return divEl;
  }
  