import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/public/MainPage";
import AdminList from "./pages/admin/AdminList";
import AddAdmin from "./pages/admin/AddAdmin";
import EditAdmin from "./pages/admin/EditAdmin";
import BuildingList from "./pages/building/BuildingList";
import AddBuilding from "./pages/building/AddBuilding";
import EditBuilding from "./pages/building/EditBuilding";
import Login from "./pages/public/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/GlobalStyle.scss";
import AdminPage from "./pages/admin/AdminPage";
import Structure from "./pages/public/Structure";
import Documentation from "./pages/public/Documentation";
import Tour from "./pages/public/tour/index.htm";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="structure" element={<Structure />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="tour" element={<Tour />} />
        {/* building */}
        <Route path="building" element={<BuildingList />} />
        <Route path="building/add" element={<AddBuilding />} />
        <Route path="building/edit/:id" element={<EditBuilding />} />
        {/* admin */}
        <Route path="admin-page" element={<AdminPage />} />
        <Route path="admin" element={<AdminList />} />
        <Route path="admin/add" element={<AddAdmin />} />
        <Route path="admin/edit/:id" element={<EditAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
