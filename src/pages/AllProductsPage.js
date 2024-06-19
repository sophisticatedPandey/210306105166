// src/pages/AllProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import FilterPanel from '../components/FilterPanel';
import Pagination from '../components/Pagination';
import { Grid, CircularProgress } from '@material-ui/core';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Replace with your actual API fetch logic
        const response = await fetch(`http://api.example.com/products?page=${page}`);
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [page]);

  // Handler for page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Handler for filter change
  const handleFilterChange = (event) => {
    // Implement filter change logic
    console.log('Filter changed:', event.target.value);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <FilterPanel categories={[]} companies={[]} onFilterChange={handleFilterChange} />
      </Grid>
      <Grid item xs={9}>
        <ProductList products={products} />
        <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </Grid>
    </Grid>
  );
};

export default AllProductsPage;
