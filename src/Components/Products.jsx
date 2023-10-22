/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="text-center mt-20 lg:mt-32">
        <h2 className="text-primary-color font-semibold">Products</h2>
        <div className="space-y-2 mt-5">
          <h2 className="text-4xl font-bold">Browse Our Products</h2>
          <p className="text-[#737373] text-sm lg:w-1/2 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            veritatis obcaecati deserunt porro, repudiandae doloribus cum.
            Quibusdam excepturi pariatur eligendi!
          </p>
        </div>
        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          {products.map((product) => (
            <ProductCards key={product.id} product={product}></ProductCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

const ProductCards = ({ product }) => {
  const { img, title, price, rating } = product;
  return (
    <div>
      <div className="card w-4/5 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt={title} className="rounded-lg h-[200px]" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center">
            <ReactStars count={rating} size={30} color="primary-color" />
          </div>

          <div className="flex justify-center">
            <h2 className="card-title text-2xl font-bold">{title}</h2>
          </div>
          <p className="text-primary-color font-semibold">Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};
