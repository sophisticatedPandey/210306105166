// src/components/FilterPanel.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const FilterPanel = ({ categories, companies, onFilterChange }) => {
  return (
    <div>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select onChange={onFilterChange}>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Add similar controls for company, rating, price range, and availability */}
    </div>
  );
};

export default FilterPanel;
