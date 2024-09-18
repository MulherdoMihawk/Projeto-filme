let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de ação?");
  campoAventura = createCheckbox("Gosta de fantasia?");
}

function draw() {
  background("pink");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(300, 59, 200));
  textAlign(CENTER, CENTER);
  textSize(52);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 5) {
      return "Avatar";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Ladybug";          
        } else{
         return "Cinderela";
        }
      } else {
        if (gostaDeFantasia) {
          return "Meu malvado favorito";
        } else {
          return "Enrolados";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "As branquelas";
    } else {
      return "Ponyo";
    }
  }
}
