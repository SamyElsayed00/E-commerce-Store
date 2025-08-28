import { Outlet } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import SellerHeader from "./SellerHeader";

const SellerLayout = () => {
  return (
    <div>
      <SellerHeader />
      <div className="flex min-h-screen">
        {/* Sidebar on the left */}
        <SellerSidebar />

        {/* Main content */}
        <div className="flex-1 p-6">
          <Outlet /> {/* Nested pages render here */}
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
