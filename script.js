const row = document.querySelector(".row");

const team = [
  {
    name: "Wayne Barnett",
    position: "Founder & CEO",
    picture: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    position: "Chief Editor ",
    picture: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    position: "Office Manager",
    picture: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    position: "Social Media Manager",
    picture: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    position: "Developer",
    picture: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    position: "Graphic Designer",
    picture: "barbara-ramos-graphic-designer.jpg",
  },
];

for (let i = 0; i < team.length; i++) {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";

  const card = document.createElement("div");
  card.classList.add("card", "my-5", "p-2", "text-center", "shadow");

  card.innerHTML = `
  <img src="img/${team[i].picture}"> 
  <h4 class="mt-3">${team[i].name}</h4>
  <p>${team[i].position}</p>
   `;

  col.appendChild(card);
  row.appendChild(col);
}
