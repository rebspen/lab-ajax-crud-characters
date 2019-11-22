const charactersAPI = new APIHandler('http://localhost:8000');

const $container = document.querySelector(".character-info");


//DOM find by id
const $inputSearchId = document.querySelector("input[name=character-id]");
// DOM delete
const $inputDeleteId = document.querySelector("input[name=character-id-delete]");
const $deleteButton =  document.querySelector("#delete-one");
//DOM new character form
const $newInputName = document.querySelector("#new-character-form [name=name]");
const $newInputOccupation = document.querySelector("#new-character-form [name=occupation]");
const $newInputWeapon = document.querySelector("#new-character-form [name=weapon]");
const $newInputCartoon = document.querySelector("#new-character-form [name=cartoon]");
const $newButton = document.querySelector("#new-character-form #new-data");
//DOM edit character form
const $inputId = document.querySelector("#edit-character-form [name=chr-id]");
const $inputName = document.querySelector("#edit-character-form [name=name]");
const $inputOccupation = document.querySelector("#edit-character-form [name=occupation]");
const $inputWeapon = document.querySelector("#edit-character-form [name=weapon]");
const $inputCartoon = document.querySelector("#edit-character-form [name=cartoon]");
const $updateButton = document.querySelector("#edit-character-form #update-data");
window.addEventListener('load', () => {
  
  // cRud --- READ in CRUD operations
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    console.log(event)
    console.log(charactersAPI.getFullList());
    charactersAPI.getFullList()
    .then(characters => {
      $container.innerHTML = ""; // Remove all the content of the container
      for (let i = 0; i < characters.length; i++) {
        $container.innerHTML += `
        <div class="character-info">
          <div class="name"><p><b>Name</b>: ${characters[i].name}</p></div>
          <div class="occupation"><p><b>Occupation</b>: ${characters[i].occupation}</p></div>
          <div class="cartoon"> <p><b>Is a Cartoon</b>:${
            characters[i].cartoon ? "Cartoon" : "Not a cartoon"
          }</p></div>
          <div class="weapon"><p><b>Weapon</b>: ${characters[i].weapon}</p></div>
        </div>
        `;
      }
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
