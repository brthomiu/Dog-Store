import dog1 from "./assets/dog1.png"
import dog2 from "./assets/dog2.png"
import dog3 from "./assets/dog3.png"



export const productsArray = [
  {
    id: "price_1LztAeLDMQ89ZmzgVyzBvAxP",
    title: "Bad Dog",
    price: "100.00",
    image: dog1,
  },
  {
    id: "price_1Lzt8aLDMQ89Zmzgq2uEg1am",
    title: "Standard Dog",
    price: "200.00",
    image: dog2,
  },
  {
    id: "price_1Lzt6NLDMQ89ZmzgNGXC9m8c",
    title: "Good Dog",
    price: "300.00",
    image: dog3,
  },
];

export const getProductData = (id) => {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
  }

  return productData;
};
