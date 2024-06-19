// src/pages/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details from API
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // Replace with your actual API fetch logic
        const response = await fetch(`http://api.example.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!product) {
    return <Typography>Product not found.</Typography>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3">{product.name}</Typography>
        <Typography>Company: {product.company}</Typography>
        <Typography>Category: {product.category}</Typography>
        <Typography>Price: ${product.price}</Typography>
        <Typography>Rating: {product.rating}</Typography>
        <Typography>Discount: {product.discount}%</Typography>
        <Typography>Availability: {product.availability}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProductDetailPage;
