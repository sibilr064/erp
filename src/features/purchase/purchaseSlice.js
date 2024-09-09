import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchase: [
    {
      id: 1,
      name: "John Doe",
      jobTitle: "Software Engineer",
      degree: "B.Sc. in Computer Science",
      salary: 85000,
    },
    {
      id: 2,
      name: "Jane Smith",
      jobTitle: "Data Analyst",
      degree: "M.Sc. in Data Science",
      salary: 75000,
    },
    {
      id: 3,
      name: "Alice Johnson",
      jobTitle: "Project Manager",
      degree: "MBA",
      salary: 95000,
    },
    {
      id: 4,
      name: "Michael Brown",
      jobTitle: "UX Designer",
      degree: "B.A. in Graphic Design",
      salary: 70000,
    },
    {
      id: 5,
      name: "Emily Davis",
      jobTitle: "Marketing Specialist",
      degree: "B.B.A. in Marketing",
      salary: 65000,
    },
    {
      id: 6,
      name: "David Wilson",
      jobTitle: "Financial Analyst",
      degree: "B.Com. in Finance",
      salary: 80000,
    },
    {
      id: 7,
      name: "Sarah Lee",
      jobTitle: "Human Resources Manager",
      degree: "M.A. in Human Resources",
      salary: 90000,
    },
    {
      id: 8,
      name: "James White",
      jobTitle: "Network Administrator",
      degree: "B.Sc. in Information Technology",
      salary: 72000,
    },
    {
      id: 9,
      name: "Jessica Taylor",
      jobTitle: "Content Strategist",
      degree: "B.A. in English Literature",
      salary: 68000,
    },
    {
      id: 10,
      name: "Robert Harris",
      jobTitle: "Cybersecurity Specialist",
      degree: "M.Sc. in Cybersecurity",
      salary: 88000,
    },
  ],
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    // Example reducer: add a new product
    addPurchase: (state, action) => {
      const maxId = state.purchases.reduce(
        (max, purchase) => (purchase.id > max ? purchase.id : max),
        0
      );
      const newPurchase = {
        ...action.payload,
        id: maxId + 1, // Assign the next available ID
      };
      state.purchases.push(newPurchase);
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
export const { addPurchase, deletePurchase } = purchaseSlice.actions;

// Export the reducer
export default purchaseSlice.reducer;
