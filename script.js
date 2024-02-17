// ACCESS TOKEN SUPERHERO API - 3361517490737379

const token = "3361517490737379";

const baseUrl = `https://www.superheroapi.com/api.php/${token}`;

const randomBtn = document.getElementById("random-btn");

const searchBtn = document.getElementById("search-btn");

const apearanceBtn = document.getElementById("apr-btn");
const bioBtn = document.getElementById("bio-btn");
const powerBtn = document.getElementById("pow-btn");
const conectionBtn = document.getElementById("con-btn");
const workBtn = document.getElementById("wrk-btn");

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️‍♂️",
  power: "📊",
  combat: "⚔️",
};

const randomHero = (id) => {
  fetch(`${baseUrl}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json;
      console.log(hero);
      showHeroInfo(hero);
    });
};

const randomNum = () => {
  return Math.floor(Math.random() * 731) + 1;
};

const serachHero = (name) => {
  fetch(`${baseUrl}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      console.log(hero);
      showHeroInfo(hero);
    });
};

const getSearchInput = () => {
  let input = document.getElementById("searchInput");
  let inputText = input.value;

  return inputText;
};

const showHeroInfo = (character) => {
  const name = `<h1 style="font-size: 4.5rem;">${character.name}</h1>`;

  const img = `<img src="${character.image.url}" class="c-img" />`;

  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${statToEmoji[stat]} ${stat}: ${
        character.powerstats[stat]
      }</p>`;
    })
    .join("");

  const basicInfo = Object.keys(character.biography)
    .map((detail) => {
      return `<p>${detail}: ${character.biography[detail]}</p>`;
    })
    .join("");

    const apearance = Object.keys(character.appearance)
    .map((detail) => {
      return `<p>${detail}: ${character.appearance[detail]}</p>`;
    })
    .join("");

    const con = Object.keys(character.connections)
    .map((detail) => {
      return `<p>${detail}: ${character.connections[detail]}</p>`;
    })
    .join("");

    const job = Object.keys(character.work)
    .map((detail) => {
      return `<p>${detail}: ${character.work[detail]}</p>`;
    })
    .join("");

  document.getElementById("character-name").innerHTML = `${name}`;
  document.getElementById("banner-img").src = `${character.image.url}`;
  document.getElementById("powers").innerHTML = `${stats}`;
  document.getElementById("apr").innerHTML = `${apearance}`;
  document.getElementById("bio").innerHTML = `${basicInfo}`;
  document.getElementById("connect").innerHTML = `${con}`;
  document.getElementById("work").innerHTML = `${job}`;
};

randomBtn.onclick = () => randomHero(randomNum());
searchBtn.onclick = () => serachHero(getSearchInput());
apearanceBtn.onclick = () => { 
  document.getElementById("apr").style.display = "block"
  document.getElementById("bio").style.display = "none"
  document.getElementById("powers").style.display = "none"
  document.getElementById("work").style.display = "none"
  document.getElementById("connect").style.display = "none"
}
bioBtn.onclick = () => { 
  document.getElementById("apr").style.display = "none"
  document.getElementById("bio").style.display = "block"
  document.getElementById("powers").style.display = "none"
  document.getElementById("work").style.display = "none"
  document.getElementById("connect").style.display = "none"
}
powerBtn.onclick = () => { 
  document.getElementById("apr").style.display = "none"
  document.getElementById("bio").style.display = "none"
  document.getElementById("powers").style.display = "block"
  document.getElementById("work").style.display = "none"
  document.getElementById("connect").style.display = "none"
}
conectionBtn.onclick = () => { 
  document.getElementById("apr").style.display = "none"
  document.getElementById("bio").style.display = "none"
  document.getElementById("powers").style.display = "none"
  document.getElementById("work").style.display = "none"
  document.getElementById("connect").style.display = "block"
}
workBtn.onclick = () => { 
  document.getElementById("apr").style.display = "none"
  document.getElementById("bio").style.display = "none"
  document.getElementById("powers").style.display = "none"
  document.getElementById("work").style.display = "block"
  document.getElementById("connect").style.display = "none"
}
window.onload = () => randomHero(randomNum());


const openSideBar = document.getElementById("open-sidebar")
const closeSideBar = document.getElementById("close-sidebar")

function showSideBar() {
  document.querySelector(".side-bar").style.display = "flex"
}
function hideSideBar() {
  document.querySelector(".side-bar").style.display = "none"
}