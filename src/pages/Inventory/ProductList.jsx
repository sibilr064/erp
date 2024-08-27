import { Box, Button, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const columns = [
  {
    field: "id",
    headerName: "Product ID",
    // width: 90
    flex: 0.1,
  },
  {
    field: "productName",
    headerName: "Product Name",
    // width: 150,
    flex: 0.1,
    // editable: true,
  },
  {
    field: "category",
    headerName: "Category",
    // width: 150,
    flex: 0.1,
    // editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    // width: 110,
    flex: 0.1,
    // editable: true,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    // width: 110,
    flex: 0.1,
    // editable: true,
  },
  {
    field: "reorder",
    headerName: "Reorder Level",
    type: "number",
    // width: 110,
    flex: 0.1,
    // editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    // width: 150,
    flex: 0.1,
    renderCell: (params) => (
      <Box>
        <IconButton
          sx={{ fontSize: 15 }}
          onClick={() => handleEdit(params.row.id)}
        >
          <EditOutlined />
        </IconButton>
        <IconButton
          sx={{ fontSize: 15 }}
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteOutlined />
        </IconButton>
      </Box>
    ),
  },
];

const handleEdit = (id) => {
  console.log("Edit product with id:", id);
  // Implement your edit logic here
};

const handleDelete = (id) => {
  console.log("Delete product with id:", id);
  // Implement your delete logic here
};

export default function ProductList() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h2">
          Product List
        </Typography>

        <Button
          component={Link}
          to="/inventory/product/product-form"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add Product
        </Button>
      </Box>
      <Box sx={{ marginTop: "32px" }}>
        <DataGridDemo />
      </Box>
    </>
  );
}

function DataGridDemo() {
  const products = useSelector((state) => state.product.products);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          '& .MuiDataGrid-container--top [role="row"], & .MuiDataGrid-container--bottom [role="row"]':
            {
              backgroundColor: "#ffffff", // Replace with your desired color
            },
          '& .MuiDataGrid-container--top [role="row"]:hover, & .MuiDataGrid-container--bottom [role="row"]:hover':
            {
              backgroundColor: "#f5f5f5", // Replace with your desired hover color
            },
        }}
      />
    </Box>
  );
}
