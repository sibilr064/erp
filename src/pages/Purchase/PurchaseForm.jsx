import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/product/productSlice";

export default function PurchaseForm({ setIsFormOpen }) {
  const dispatch = useDispatch();

  // State to hold form input values
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    price: "",
    quantity: "",
    reorder: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Dispatch the addProduct action with formData
    dispatch(addProduct(formData));
    setIsFormOpen((e) => !e);

    // Optionally reset the form
    /*
    setFormData({
      productName: "",
      category: "",
      price: "",
      quantity: "",
      reorderLevel: "",
    });
*/
    console.log("Form submitted:", formData);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Product Name"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              margin="normal"
              label="Reorder Level"
              name="reorder"
              type="number"
              value={formData.reorder}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
