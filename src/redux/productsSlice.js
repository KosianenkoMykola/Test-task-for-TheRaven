import { createSlice } from '@reduxjs/toolkit';
import products from '../products.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: products,
  }
});

export const selectProducts = (state) => state.products.items;
export default productsSlice.reducer;
