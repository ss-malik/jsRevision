import React, { useState } from "react";

const Props = () => {
  const initialStage = {
    name: "",
    email: "",
    motherName: "",
    petName: "",
  };

  const nameChange = (e) => {
    return setForm({ ...form, name: e.target.value });
  };

  const emailChange = (e) => {
    return setForm({ ...form, email: e.target.value });
  };

  const [form, setForm] = useState(initialStage);
  console.log(form);
  return (
    <>
      <input
        type="text"
        placeholder="please enter your Name"
        onChange={nameChange}
      />
      <p></p>
      <input
        type="text"
        placeholder="please enter your Email"
        onChange={emailChange}
      />
      <p></p>
      <input type="text" placeholder="please enter your Mother's Name" />
      <p></p>
      <input type="text" placeholder="please enter pet Name" />
      <p></p>
    </>
  );
};

export default Props;

const allBrand = [
  { id: "1", brandName: "puma" },
  { id: "2", brandName: "nike" },
  { id: "3", brandName: "sparx" },
  { id: "4", brandName: "reebok" },
  { id: "5", brandName: "adidas" },
];

const Shoes = () => {
  const [brand, setBrand] = useState(allBrand);

  let input = "";
  const searchElement = (e) => {
    input = e.target.value;
    const filteredArray =
      input.length > 0
        ? brand.filter((ele) =>
            ele.brandName.includes(input.toLocaleLowerCase().trim(" "))
          )
        : allBrand;
    setBrand(filteredArray);
  };

  return (
    <>
      <br /> <br />
      <input
        type="text"
        placeholder="enter the brand"
        onChange={searchElement}
      />
      <ul>
        {brand.map((ele) => {
          return <li>{ele.brandName}</li>;
        })}
      </ul>
    </>
  );
};

const Cart = () => {
  const [inCart, setInCart] = useState([]);
  const addToCart = (identifier) => {
    const cartArray = allBrand.filter((ele) => ele.id === identifier);

    setInCart([...inCart, { cartArray }]);
    console.log(cartArray);
  };
  return (
    <>
      {allBrand.map((ele) => (
        <div>
          <span key={ele.id}>{ele.brandName}</span>
          <button onClick={() => addToCart(ele.id)}>add to cart</button>
        </div>
      ))}
      <div>
        <p>in Cart</p>
        {inCart.map((ele) => (
          <div>{ele.brandName} </div>
        ))}
      </div>
    </>
  );
};

export { Shoes, Cart };
