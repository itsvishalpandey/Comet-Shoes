import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    totalproducts: 0,
    totalprice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { id, image, name, price, size } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, image, name, price, size, quantity: 1 });
      }

      state.totalproducts = state.items.length;
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items.splice(existingItem, 1);
      }
      state.totalproducts = state.items.length;
    },
  },
});

export const { addProduct, removeProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
