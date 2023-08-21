import React, { useEffect, useState } from "react";
import axios from "axios";
import BCard from "../Components/Card";
import "./HomePage.css";
import { useParams, useNavigate } from "react-router-dom";
const HomePage = () => {
  const [xdata, setData] = useState([]);
  const { category_name } = useParams();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")

      .then((a) => {
        if (category_name) {
          setData(
            a.data.products.filter((item) => item.category === category_name)
          );
        } else {
          setData(a.data.products);
        }
      });
  }, [category_name]);

  return (
    <div className='grid1'>
      {xdata.map((item) => (
        <BCard
          className='card'
          id={item.id}
          key={item.id}
          title={item.title}
          imag={item.images[0]}
          brand={item.brand}
          category={item.category}
          description={item.description}
          discout={item.discount}
          price={item.price}
          rating={item.rating}
          stock={item.stock}
        />
      ))}
    </div>
  );
};

export default HomePage;
