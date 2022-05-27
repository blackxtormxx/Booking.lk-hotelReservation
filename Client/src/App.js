import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Index from './components/index';
import Super_admin_dashboard from './components/super_admin/super_admin_dashboard.js';
import Super_admin_hotel from './components/super_admin/hotel.js';
import Super_admin_AddHotel from './components/super_admin/addHotel.js';
import EditSuperAdminHotel from './components/super_admin/editHotel.js';
import Login from './components/login.js';
import PackageDashboard from './components/admin/package_dashboard.js';
import AddHotelPackage from './components/admin/addHotelPackage.js';
import Admin_view_package from './components/admin/admin_view_package.js';
import AdminDashboard from './components/admin/admin_dashboard.js';
import EditHotelPackage from './components/admin/editHotelPackage.js';
import Cus_login from './components/cus_login.js';
import CusReg from './components/cus_registration.js';
import Client_dashboard from './components/client/client_dashboard.js';
import SelectPackage from './components/client/selectHotelPackages.js';
import Package_for_hotel from './components/client/package_for_hotel.js';
import ClientPayment from './components/client/client_payment.js';
import Payment_dashboard from './components/admin/payment_page.js';

import AdminBookedPackagesView from './components/admin/view_booked_packages.js';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Super_admin_dashboard" element={<Super_admin_dashboard />} />
        <Route path="/Super_admin_hotel" element={<Super_admin_hotel />} />
        <Route path="/Super_admin_AddHotel" element={<Super_admin_AddHotel />} />
        <Route path="/EditSuperAdminHotel" element={<EditSuperAdminHotel />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PackageDashboard" element={<PackageDashboard />} />
        <Route path="/AddHotelPackage" element={<AddHotelPackage />} />
        <Route path="/Admin_view_package" element={<Admin_view_package />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/EditHotelPackage" element={<EditHotelPackage />} />
        <Route path="/Cus_login" element={<Cus_login />} />
        <Route path="/CusReg" element={<CusReg />} />
        <Route path="/Client_dashboard" element={<Client_dashboard />} />
        <Route path="/SelectPackage" element={<SelectPackage />} />
        <Route path="/Package_for_hotel" element={<Package_for_hotel />} />
        <Route path="/ClientPayment" element={<ClientPayment />} />
        <Route path="/Payment_dashboard" element={<Payment_dashboard />} />
        <Route path="/AdminBookedPackagesView" element={<AdminBookedPackagesView />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

