import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import { AuthProvider } from "@contexts";
import AppRoutes from "./Routes";

function App() {
  return (
    <HelmetProvider>
      {/* <AuthProvider> */}
      <Router>
        <AppRoutes />
      </Router>
      {/* </AuthProvider> */}
    </HelmetProvider>
  );
}

export default App;
