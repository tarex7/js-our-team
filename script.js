//Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
//Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
//Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
//Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
//Scott Estrada |	Developer            |	scott-estrada-developer.jpg
//Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg

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
  for (let key in team[i]) {
    console.log(key, ":", team[i][key]);
  }
}
