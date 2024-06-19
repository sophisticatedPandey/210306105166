// src/components/Pagination.js
import React from 'react';
import { Pagination as MuiPagination } from '@material-ui/lab';

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <MuiPagination
      count={totalPages}
      page={page}
      onChange={(event, value) => onPageChange(value)}
    />
  );
};

export default Pagination;
