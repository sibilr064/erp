import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      productName: "Widget A",
      category: "Gadgets",
      price: 20.0,
      quantity: 100,
      reorder: 10,
    },
    {
      id: 2,
      productName: "Widget B",
      category: "Tools",
      price: 35.0,
      quantity: 50,
      reorder: 5,
    },
    {
      id: 3,
      productName: "Gadget C",
      category: "Gadgets",
      price: 15.0,
      quantity: 200,
      reorder: 15,
    },
    {
      id: 4,
      productName: "Tool D",
      category: "Tools",
      price: 45.0,
      quantity: 30,
      reorder: 8,
    },
    {
      id: 5,
      productName: "Accessory E",
      category: "Accessories",
      price: 10.0,
      quantity: 150,
      reorder: 20,
    },
    {
      id: 6,
      productName: "Gadget F",
      category: "Gadgets",
      price: 25.0,
      quantity: 75,
      reorder: 12,
    },
    {
      id: 7,
      productName: "Tool G",
      category: "Tools",
      price: 60.0,
      quantity: 20,
      reorder: 5,
    },
    {
      id: 8,
      productName: "Accessory H",
      category: "Accessories",
      price: 12.0,
      quantity: 120,
      reorder: 25,
    },
    {
      id: 9,
      productName: "Gadget I",
      category: "Gadgets",
      price: 30.0,
      quantity: 40,
      reorder: 10,
    },
    {
      id: 10,
      productName: "Tool J",
      category: "Tools",
      price: 55.0,
      quantity: 10,
      reorder: 4,
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Example reducer: add a new product
    addProduct: (state, action) => {
      const maxId = state.products.reduce(
        (max, product) => (product.id > max ? product.id : max),
        0
      );
      const newProduct = {
        ...action.payload,
        id: maxId + 1, // Assign the next available ID
      };
      state.products.push(newProduct);
    },
    // Example reducer: delete a product by id
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

// Export the actions
export const { addProduct, deleteProduct } = productSlice.actions;

// Export the reducer
export default productSlice.reducer;
