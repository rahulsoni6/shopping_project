import React from "react";
import ProductList from "./Product";
import PaginationLink from "./Pagination";
let arr = [];
const Home = () => {
  let product = [
    {
      name: "Fila",
      price: 2999,
      src:
        "https://images-na.ssl-images-amazon.com/images/I/81IFty2actL._UL1500_.jpg",
      description: "more Comfortness",
    },
    {
      name: "Rebook",
      price: 1199,
      src:
        "https://s3-eu-west-1.amazonaws.com/images.linnlive.com/81aa2c7ffaa39a9a24df3fdf9bbf4420/1284c786-b4cb-4fb8-8165-280764b54c0b.jpg",
      description: "Light weight",
    },
  ];
  let pro = product.map((p) => {
    return (
      <ProductList
        name={p.name}
        price={p.price}
        src={p.src}
        description={p.description}
        added={() => {
          added(p.name, p.price, p.src, p.description);
        }}
      />
    );
  });
  let added = (id, price, src, description) => {
    alert("Successfully added to cart");
    arr.push({
      name: id,
      price: price,
      src: src,
      description: description,
    });
  };

  return (
    <div>
      <div>{pro}</div>
      {/* <div>
        <PaginationLink />
      </div> */}
    </div>
  );
};

export default Home;
export { arr };
