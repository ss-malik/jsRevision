const listOfProduct = document.querySelector(".list_of_product");

listOfProduct.textContent = "yo babe";
console.log(listOfProduct);

function renderProducts(getProducts) {
  listOfProduct.innerHTML = getProducts
    .map((item) => `<p>${item.title}</p>`)
    .join(" ");
}

async function listOfProductsElement() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const res = await apiResponse.json();
    console.log(res);
    res && renderProducts(res.products);
  } catch (error) {
    console.log(error);
  }
}

listOfProductsElement();
