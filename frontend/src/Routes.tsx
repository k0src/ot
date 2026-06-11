import { Routes, Route } from "react-router-dom";
// import * as Pages from "@pages";
// import { AppLayout, ProtectedRoute } from "@components";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Pages.LoginPage />} /> */}
      <Route path="*" element={null} />
    </Routes>
  );
}
