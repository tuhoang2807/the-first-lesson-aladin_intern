const products = [
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
  {
    imgSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    title: "Dây chuyền bia hơi",
    description:
      "Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ",
  },
];


let currentPage = 1;

function displayProducts(page) {
    const productsPerPage = window.innerWidth > 992 ? 9 : 8;
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = products.slice(start, end);

  paginatedProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("sp");
    productDiv.innerHTML = `
            <img class = "tuhoang" src="${product.imgSrc}" alt="">
            <h2>${product.title}</h2>
            <p class="text">Mô tả sản phẩm:</p>
            <p class="dc">${product.description}</p>
            <button class = "button_click"><img src="icon-pc/lienhe.png" alt="">Nhận tư vấn về sản phẩm</button>
        `;
    productContainer.appendChild(productDiv);

    const button = productDiv.querySelector(".button_click");
    button.addEventListener("click", function () {
      window.location.href = "product.html";
    });
  });
}

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
  update();
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-list");
  const businessList = document.getElementById("business-list");
  const closeButton = document.getElementById("close-list");

  toggleButton.addEventListener("click", function () {
    businessList.classList.toggle("visible");
  });

  closeButton.addEventListener("click", function () {
    businessList.classList.remove("visible");
  });

  update();
});

function update() {
  displayProducts(currentPage);
}
