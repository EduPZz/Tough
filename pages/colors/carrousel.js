const imagesElements = Array.from(
  document.getElementsByClassName("carrousel-image")
);

const imagesDescriptionsElements = Array.from(
  document.getElementsByClassName("description")
);

const imagesNamesElements = Array.from(
  document.getElementsByClassName("name")
);

const imagesDescriptions = [
  "Feita para futsal, leve e rente ao chão, proporciona melhor controle de bola e tração multidirecional. Tem cabedal moldado em material sintético com textura para dribles, gaiola de velocidade, e um design sem costuras para conforto.",
  "Oferece um nível avançado de toque e amortecimento com cápsulas de borracha flexíveis e amortecimento Nike React. O Flyknit combinado com composto moldado proporciona toque preciso e durabilidade, ideal para futsal.",
  "Comemora o 25º aniversário da linha Mercurial, com um design icônico e cores marcantes. Apresenta unidade Zoom Air para sensação de flexibilidade e velocidade, cabedal Vaporposite+ para controle de bola, e ajuste aprimorado com Flyknit. Ideal para campos com gramado curto e levemente úmidos.",
  "Projetada para jogadores de futsal, oferece tração confiável e ajuste confortável. Possui textura aderente na área de impacto para melhorar o controle de bola e solado de borracha para desempenho em superfícies internas. Ideal para iniciantes ou jogos recreativos.",
  "Réplica do modelo clássico com couro sintético Kanga-Lite e tecnologia All Conditions Control (ACC), ideal para controle em condições secas ou úmidas. Possui almofadas de controle 3D para otimizar a precisão ao passar e receber, além de travas de 360 graus que oferecem flexibilidade e resposta rápida.",
  "Edição especial que celebra os 30 anos da linha Tiempo, combinando elementos clássicos com inovações modernas. Possui cabedal em couro FlyTouch Plus para toque excepcional, tecnologia All Conditions Control para controle em qualquer clima, e ajuste confortável com Flyknit ao redor do tornozelo. A sola com pinos cônicos garante tração e estabilidade.",
  "Inspirada pela ciência da conectividade e gravidade, esta chuteira possui uma unidade Zoom Air específica para futebol, proporcionando maior flexibilidade e velocidade. O cabedal em Vaporposite+ oferece excelente controle de bola. A gaiola de velocidade interna e as travas multidirecionais garantem tração e estabilidade. O Flyknit envolve o tornozelo para um ajuste seguro e natural.",
  "Projetada para jogos em superfícies curtas e sintéticas, possui a tecnologia NikeSkin ampliada para melhor controle de bola. O padrão de tração Nike Cyclone 360 proporciona agilidade e segurança em movimentos rápidos. Oferece ajuste confortável com cabedal macio e palmilha acolchoada.",
  "Projetada para toque preciso e controle de bola em jogos de futsal. O cabedal é feito de material sintético para maior proximidade e toque com a bola. O colarinho de mesh proporciona conforto e respirabilidade. A amarração assimétrica oferece uma área mais limpa para driblar, fazer passes e marcar gols. Ideal para uso em quadras e superfícies indoor.",
  "Proporciona precisão e controle com tecnologia NikeSkin e uma zona de toque em mesh, oferecendo ajuste confortável e suporte com um calcanhar assimétrico. A mistura de travas cônicas e em estrela de três pontas permite mudança rápida de direção. Ideal para uso em superfícies naturais e sintéticas.",
  "Incline instantaneamente o campo com o design arrojado do Superfly 9 Academy TF. Com uma unidade Zoom Air e NikeSkin flexível na parte de cima para toque excepcional, para que você possa dominar nos minutos finais de uma partida - quando mais importa. A velocidade está no Air."
];

const shoeNames = [
  "Chuteira Nike Vapor 15 Club Futsal",
  "Chuteira Nike React Gato Futsal",
  "Chuteira Nike Zoom Superfly 9 Elite XXV Campo",
  "Chuteira Nike Phantom GX II Club Futsal",
  "Chuteira Nike CTR360 Maestri III Campo",
  "Chuteira Nike Tiempo Legend 10 Elite 30 SE Masculina Campo",
  "Chuteira Nike Zoom Mercurial Superfly 9 Elite Campo",
  "Chuteira Nike Phantom GX II Academy Society",
  "Chuteira Nike Phantom GX Club Futsal",
  "Chuteira Nike Phantom GX Academy Campo",
  "Chuteira Nike Zoom Mercurial Superfly 9 Academy Society"
];


let currentPage = 0;

const buildImageSrc = (index) => {
  return `../../images/chuteiras/${index}.png`;
};

const updateImagesSrc = () => {
  for (const element of imagesElements) {
    const newId = +element.id + currentPage;
    element.src = buildImageSrc(newId);
  }
};

const updateimagesDescriptions = () => {
  for (const element of imagesDescriptionsElements) {
    const newId = +element.id + currentPage;
    element.innerHTML = imagesDescriptions[newId];
  }
};

const updateimagesNames = () => {
  for (const element of imagesNamesElements) {
    const newId = +element.id + currentPage;
    element.innerHTML = shoeNames[newId];
  }
};


const moveLeft = () => {
  if (currentPage > 0) {
    currentPage -= 1;
    updateImagesSrc();
    updateimagesDescriptions();
    updateimagesNames();
  }
};

const moveRight = () => {
  if (currentPage < 6) {
    currentPage += 1;
    updateImagesSrc();
    updateimagesNames();
    updateimagesDescriptions();
  }
};

updateimagesDescriptions();
updateimagesNames();