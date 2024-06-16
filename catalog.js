const catalogList = document.getElementById("catalog");

const shoots = [
  {
    name: "Nike Vapor 15 Club Futsal",
    desc: "Para quadras",
    price: 246,
  },
  {
    name: "Nike React Gato Futsal",
    desc: "Para quadras",
    price: 749,
  },
  {
    name: "Nike Zoom Superfly 9 Elite XXV Campo",
    desc: "Para campo",
    price: 1999,
  },
  {
    name: "Nike Phantom GX II Club Futsal",
    desc: "Para quadras",
    price: 299,
  },
  {
    name: "Nike CTR360 Maestri III Campo",
    desc: "Para campo",
    price: 399,
  },
  {
    name: "Nike Tiempo Legend 10 Elite 30 SE Masculina Campo",
    desc: "Para campo",
    price: 1299,
  },
  {
    name: "Nike Zoom Mercurial Superfly 9 Elite Campo",
    desc: "Para campo",
    price: 1499,
  },
  {
    name: "Nike Phantom GX II Academy Society",
    desc: "Para society",
    price: 549,
  },
  {
    name: "Nike Phantom GX Club Futsal",
    desc: "Para quadras",
    price: 399,
  },
  {
    name: "Nike Phantom GX Academy Campo",
    desc: "Para campo",
    price: 699,
  },
];

let currentIndex = 1;

const addProductView = shoot => {
  const a = document.createElement("a");
  a.classList.add("product");
  a.setAttribute("href", `pages/product-view/product-view.html?bootId=${currentIndex + 3}`)

  const img = document.createElement("img");
  img.setAttribute("src", `./images/chuteiras/${currentIndex}.png`);

  const name = document.createElement("p");
  name.innerHTML = shoot.name;
  name.classList.add("p-name");

  const desc = document.createElement("p");
  desc.innerHTML = shoot.desc;
  desc.classList.add("p-desc");

  const price = document.createElement("p");
  price.innerHTML = `R$${shoot.price},00`;
  price.classList.add("p-price");

  const elements = [img, name, desc, price];

  elements.forEach((e) => a.appendChild(e));
  catalogList.appendChild(a);
  currentIndex += 1;
}

const fillList = () => {
  shoots.forEach(shoot => addProductView(shoot))
}


fillList();