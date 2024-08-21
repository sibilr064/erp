import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Inventory/Product";
import ProductList from "./pages/Inventory/ProductList";
import BillingHome from "./pages/Billing/BillingHome";
import Invoice from "./pages/Billing/Invoice";
import PurchaseHome from "./pages/Purchase/PurchaseHome";
import PurchaseList from "./pages/Purchase/PurchaseList";
import SalesHome from "./pages/Sales/SalesHome";
import SalesList from "./pages/Sales/SalesList";
import StockHome from "./pages/Stock/StockHome";
import StockList from "./pages/Stock/StockList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory/product" element={<Product />} />
          <Route path="/inventory/product-list" element={<ProductList />} />
          <Route path="/billing/home" element={<BillingHome />} />
          <Route path="/billing/invoice-list" element={<Invoice />} />
          <Route path="/purchase/home" element={<PurchaseHome />} />
          <Route path="/purchase/purchase-list" element={<PurchaseList />} />
          <Route path="/sales/home" element={<SalesHome />} />
          <Route path="/sales/sales-list" element={<SalesList />} />
          <Route path="/stock/home" element={<StockHome />} />
          <Route path="/stock/stock-list" element={<StockList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
