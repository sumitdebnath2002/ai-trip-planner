import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import CreateTrip from "./create-trip/index";
import Header from "./components/ui/custom/Header";
import { Toaster } from "sonner";
import ViewTrip from "./view-trip/[tripId]/index";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MyTrips from "./my-trips";
import Footer from "./view-trip/[tripId]/components/Footer";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="546455134250-qd5npgfpeq5v14eivlmhl9i3fn0gafcv.apps.googleusercontent.com">
      <Header />
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App></App>}></Route>
          <Route
            path="/create-trip"
            element={<CreateTrip></CreateTrip>}
          ></Route>
          <Route
            path="/view-trip/:tripId"
            element={<ViewTrip></ViewTrip>}
          ></Route>
          <Route path="/my-trips" element={<MyTrips />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </GoogleOAuthProvider>
  </StrictMode>
);
