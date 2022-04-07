const { Question } = require("../db");

const questions = [
  {
    questionTitle: "¿Qué famosa banda formaron Lennon, McCartney, Harrison y Starr?",
    answerOptions: [
      { answer: "The Beatles", correct: true },
      { answer: "Kiss", correct: false },
      { answer: "Guns and Roses", correct: false },
      { answer: "Kansas", correct: false },
    ],
    level: 1,
    categoryId: 5,
  },
  {
    questionTitle: "¿Qué cantante es reconocido por éxitos como Thriller, Beat It y Smooth Criminal?",
    answerOptions: [
      { answer: "David Bowie", correct: false },
      { answer: "Michael Jackson", correct: true },
      { answer: "Roy Orbison", correct: false },
      { answer:" Elton John", correct: false },
    ],
    level: 2,
    categoryId: 5,
  },
  {
    questionTitle: "¿Qué famoso compositor italiano se dice que hizo un pacto con el diablo?",
    answerOptions: [
      { answer: "Johann Sebastian Bach", correct: false },
      { answer: "Ludwig van Beethoven", correct: false },
      { answer: "Niccolò Paganini", correct: true },
      { answer:" Wolfgang Amadeus Mozart", correct: false },
    ],
    level: 3,
    categoryId: 5,
  },
  {
    questionTitle: "¿Qué cantante es considerado “El Rey del Rock and Roll”?",
    answerOptions: [
      { answer: "Ozzy Osbourne", correct: false },
      { answer: "Elvis Presley", correct: true },
      { answer:"Roger Waters", correct: false },
      { answer: "Bob Dylan", correct: false },
    ],
    level: 4,
    categoryId: 5,
  },
  {
    questionTitle: "¿Qué compositor es responsable de El lago de los cisnes y El cascanueces?",
    answerOptions: [
      { answer: "Chaikovski", correct: true },
      { answer: "Vivaldi", correct: false },
      { answer: "Schubert", correct: false },
      { answer: "Wolfgang Amadeus Mozart", correct: false },
    ],
    level: 5,
    categoryId: 5,
  },
  {
    questionTitle: "¿Cómo se llama el centro de un átomo?",
    answerOptions: [
      { answer: "Núcleo", correct: true },
      { answer: "Proton", correct: false },
      { answer: "Neutron", correct: false },
      { answer: "Electrón", correct: false },
    ],
    level: 1,
    categoryId: 4,
  },
  {
    questionTitle: "¿Cuál es el animal más grande que habita la Tierra?",
    answerOptions: [
      { answer: "Cachalote", correct: false },
      { answer: "Ballena azul", correct: true },
      { answer: "Ballena gris", correct: false },
      { answer: "Elefante africano", correct: false },
    ],
    level: 2,
    categoryId: 4,
  },
  {
    questionTitle: "¿Cuál es el único satélite natural de la Tierra?",
    answerOptions: [
      { answer: "Marte", correct: false },
      { answer: "Venus", correct: false },
      { answer: "Luna", correct: true },
      { answer: "Titan", correct: false },
    ],
    level: 3,
    categoryId: 4,
  },
  {
    questionTitle: "¿Qué órgano del cuerpo humano consume más energía?",
    answerOptions: [
      { answer: "Corazón", correct: false },
      { answer: "Cerebro", correct: true },
      { answer: "Riñón", correct: false },
      { answer: "Hígado", correct: false },
    ],
    level: 4,
    categoryId: 4,
  },
  {
    questionTitle: "¿Qué biólogo propuso la teoría de la evolución a través de la selección natural?",
    answerOptions: [
      { answer: "Gregor Mendel", correct: false },
      { answer: "Galeno de Pérgamo", correct: false },
      { answer: "Hipócrates de Cos", correct: false },
      { answer: "Charles Darwin", correct: true },
    ],
    level: 5,
    categoryId: 4
  },
  {
    questionTitle: "¿Qué país tiene el mayor número de habitantes? ",
    answerOptions: [
      { answer: "China", correct: true },
      { answer: "Rusia", correct: false },
      { answer: "India", correct: false },
      { answer: "EE. UU", correct: false },
    ],
    level: 1,
    categoryId: 3,
  },
  {
    questionTitle: "¿Qué río pasa por París?",
    answerOptions: [
      { answer: "Garona", correct: false },
      { answer: "Sena", correct: true },
      { answer: "Mosa", correct: false },
      { answer: "Saona", correct: false },
    ],
    level: 2,
    categoryId: 3,
  },
  {
    questionTitle: "¿Cuál es la capital de Nicaragua?",
    answerOptions: [
      { answer: "Granada", correct: false },
      { answer: "León", correct: false },
      { answer: "Matagalpa", correct: false },
      { answer: "Managua", correct: true },
    ],
    level: 3,
    categoryId: 3,
  },
  {
    questionTitle: "¿Qué dos países de América del sur no tienen litoral?",
    answerOptions: [
      { answer: "Bolivia y Paraguay", correct: true },
      { answer: "Bolivia y Argentina", correct: false },
      { answer: "Perú y Venezuela", correct: false },
      { answer: "Colombia y Brasil", correct: false },
    ],
    level: 4,
    categoryId: 3,
  },
  {
    questionTitle: "¿De qué país es capital Bratislava?",
    answerOptions: [
      { answer: "Rusia", correct: false },
      { answer: "Eslovaquia", correct: true },
      { answer: "Serbia", correct: false },
      { answer: "Ucrania", correct: false },
    ],
    level: 5,
    categoryId: 3,
  },
  {
    questionTitle: "¿Qué ciclista latinoamericano ganó por primera vez el Giro de Italia?",
    answerOptions: [
      { answer: "Egan Bernal", correct: false },
      { answer: "Nairo Quintana", correct: true },
      { answer: "Sergio Luis Henao", correct: false },
      { answer: "Sebastián Henao", correct: false },
    ],
    level: 1,
    categoryId: 1,
  },
  {
    questionTitle: "¿En qué equipo jugó Carles Puyol durante su carrera como futbolista?",
    answerOptions: [
      { answer: "Juventus", correct: false },
      { answer: "Manchester City", correct: false },
      { answer: "Real Madrid", correct: false },
      { answer: "F.C. Barcelona", correct: true },
    ],
    level: 2,
    categoryId: 1,
  },
  {
    questionTitle: "¿En qué equipo de la NBA jugó Kobe Bryant desde 1996?",
    answerOptions: [
      { answer: "Los Angeles Lakers", correct: true },
      { answer: "Chicago Bulls", correct: false },
      { answer: "Miami Heat", correct: false },
      { answer: "New york Knicks", correct: false },
    ],
    level: 3,
    categoryId: 1,
  },
  {
    questionTitle: "¿En qué año se jugaron los Juegos Olímpicos de México?",
    answerOptions: [
      { answer: "1964", correct: false },
      { answer: "1968", correct: true },
      { answer: "1956", correct: false },
      { answer: "1972", correct: false },
    ],
    level: 4,
    categoryId: 1,
  },
  {
    questionTitle: "¿Quién fue el boxeador más joven de la historia en conseguir un título mundial de los pesos pesados?",
    answerOptions: [
      { answer: "Saul Álvarez", correct: false },
      { answer: "Joe Frazier", correct: false },
      { answer: "Mike Tyson", correct: true },
      { answer: "Muhammad Ali", correct: false },
    ],
    level: 5,
    categoryId: 1,
  },
  {
    questionTitle: "¿En qué año descubrió Cristóbal Colón, América?",
    answerOptions: [
      { answer: "En 1492", correct: true },
      { answer: "En 1592", correct: false },
      { answer: "En 1498", correct: false },
      { answer: "En 1489", correct: false },
    ],
    level: 1,
    categoryId: 2,
  },
  {
    questionTitle: "¿Dónde se han encontrado principalmente pinturas del período Paleolítico?",
    answerOptions: [
      { answer: "No existen pinturas procedentes del Paleolítico", correct: false },
      { answer: "En cuevas.", correct: true },
      { answer: "En vasijas decoradas", correct: false },
      { answer: "En altas montañas", correct: false },
    ],
    level: 2,
    categoryId: 2,
  },
  {
    questionTitle: "¿De qué nacionalidad era Juana de Arco?",
    answerOptions: [
      { answer: "Inglesa", correct: false },
      { answer: "Italiana", correct: false },
      { answer: "Francesa", correct: true },
      { answer: "Española", correct: false },
    ],
    level: 3,
    categoryId: 2,
  },
  {
    questionTitle: "¿Quién fue el último zar de Rusia?",
    answerOptions: [
      { answer: "Nicolas II", correct: true },
      { answer: "Pedro I el Grande", correct: false },
      { answer: "Alejandro II", correct: false },
      { answer: "Pablo I", correct: false },
    ],
    level: 4,
    categoryId: 2,
  },
  {
    questionTitle: "¿De qué año es la primera Constitución española, la Pepa?",
    answerOptions: [
      { answer: "1978", correct: false },
      { answer: "1812", correct: true },
      { answer: "1931", correct: false },
      { answer: "1895", correct: false },
    ],
    level: 5,
    categoryId: 2,
  },
];

async function seedQuestion() {
  try {
    await Question.bulkCreate(questions);
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  seedQuestion,
};
