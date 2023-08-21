import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? product?.images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === product?.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {Object.keys(product).length && (
        <Card>
          <Container>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              height='70vh'
            >
              <Card>
                <CardMedia
                  component='img'
                  height='300'
                  image={product.images[currentSlide]}
                  alt={`Slide ${currentSlide}`}
                />
              </Card>
            </Box>
            <Box display='flex' justifyContent='center'>
              <Button onClick={prevSlide}><ChevronLeftIcon/></Button>
              <Button onClick={nextSlide}><ChevronRightIcon/></Button>
            </Box>
          </Container>
          <CardContent>
            <Typography variant='h5' component='div'>
              {product.title}
            </Typography>
            <Typography color='textSecondary' gutterBottom>
              {product.category} - {product.brand}
            </Typography>
            <Typography variant='body2' component='p'>
              {product.description}
            </Typography>
            <Typography variant='h6' component='div' sx={{ mt: 2 }}>
              Price: ${product.price}
            </Typography>
            <Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
              Rating: {product.rating}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              In Stock: {product.stock} units
            </Typography>
            <Box mt={2}>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  style={{ marginRight: "8px", maxWidth: "100px" }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ProductDetails;

// ProductDetail.js

// function ProductDetail({ product }) {
//   const { title, description, price, rating, stock, brand, category, thumbnail, images } = product;

//   return (

//   );
// }

// export default ProductDetail;
