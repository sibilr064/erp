import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List } from "@mui/material";
import SellIcon from "@mui/icons-material/Sell";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PaymentIcon from "@mui/icons-material/Payment";
import StorageIcon from "@mui/icons-material/Storage";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

export default function ListItems() {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  const handleSectionClick = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <ListItemButton
        sx={{ py: 0.5 }}
        onClick={() => handleNavigation("/dashboard")}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton
        sx={{ py: 0.5 }}
        onClick={() => handleSectionClick("inventory")}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Inventory" />
        {openSection === "inventory" ? (
          <ExpandLess sx={{ color: "text.secondary" }} />
        ) : (
          <ExpandMore sx={{ color: "text.secondary" }} />
        )}
      </ListItemButton>
      <Collapse in={openSection === "inventory"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 6, py: 0 }}
            onClick={() => handleNavigation("/inventory/product")}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary="Product" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 6, py: 0 }}
            onClick={() => handleNavigation("/inventory/product-list")}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary="Product List" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        sx={{ py: 0.5 }}
        onClick={() => handleSectionClick("billing")}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="Billing" />
        {openSection === "billing" ? (
          <ExpandLess sx={{ color: "text.secondary" }} />
        ) : (
          <ExpandMore sx={{ color: "text.secondary" }} />
        )}
      </ListItemButton>
      <Collapse in={openSection === "billing"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 6, py: 0 }}
            onClick={() => handleNavigation("/billing/home")}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 6, py: 0 }}
            onClick={() => handleNavigation("/billing/invoice-list")}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary="Invoice List" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        sx={{ py: 0.5 }}
        onClick={() => handleSectionClick("stock")}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
          <TrendingUpIcon />
        </ListItemIcon>
        <ListItemText primary="Stock" />
        {openSection === "stock" ? (
          <ExpandLess sx={{ color: "text.secondary" }} />
        ) : (
          <ExpandMore sx={{ color: "text.secondary" }} />
        )}
      </ListItemButton>
      <Collapse in={openSection === "stock"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 6, py: 0 }}
            onClick={() => handleNavigation("/stock/home")}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 6, py: 0 }}
            onClick={() => handleNavigation("/stock/stock-list")}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary="Stock List" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        sx={{ py: 0.5 }}
        onClick={() => handleSectionClick("purchase")}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Purchase" />
        {openSection === "purchase" ? (
          <ExpandLess sx={{ color: "text.secondary" }} />
        ) : (
          <ExpandMore sx={{ color: "text.secondary" }} />
        )}
      </ListItemButton>
      <Collapse in={openSection === "purchase"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 6, py: 0 }}
            onClick={() => handleNavigation("/purchase/home")}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 6, py: 0 }}
            onClick={() => handleNavigation("/purchase/purchase-list")}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary="Purchase List" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        sx={{ py: 0.5 }}
        onClick={() => handleSectionClick("sales")}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
          <SellIcon />
        </ListItemIcon>
        <ListItemText primary="Sales" />
        {openSection === "sales" ? (
          <ExpandLess sx={{ color: "text.secondary" }} />
        ) : (
          <ExpandMore sx={{ color: "text.secondary" }} />
        )}
      </ListItemButton>
      <Collapse in={openSection === "sales"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 6, py: 0 }}
            onClick={() => handleNavigation("/sales/home")}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 6, py: 0 }}
            onClick={() => handleNavigation("/sales/sales-list")}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <HorizontalRuleIcon />
            </ListItemIcon>
            <ListItemText primary="Sales List" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
