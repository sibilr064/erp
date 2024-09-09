import { Box, Button, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import ProductForm from "../Inventory/ProductForm";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "jobTitle", headerName: "Job Title", width: 150 },
  { field: "degree", headerName: "Degree", width: 200 },
  { field: "salary", headerName: "Salary", width: 130, type: "number" },
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

export default function PurchaseList() {
  const [isFormOpen, setIsFormOpen] = useState(false);

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
          {isFormOpen ? "Purchase Form" : "Purchase List"}
        </Typography>

        {isFormOpen ? (
          ""
        ) : (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setIsFormOpen((e) => !e)}
          >
            Add Purchase
          </Button>
        )}
      </Box>
      <Box sx={{ marginTop: "32px" }}>
        {isFormOpen ? (
          <ProductForm setIsFormOpen={setIsFormOpen} />
        ) : (
          <DataGridDemo />
        )}
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
