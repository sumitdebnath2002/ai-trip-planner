import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import CreateTrip from "./create-trip/index";
import Header from "./components/ui/custom/Header";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
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
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
