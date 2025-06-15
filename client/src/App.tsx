import {
  HashRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import WhoPage from "@/pages/WhoPage";
import CalendarPage from "@/pages/CalendarPage";
import MaterialPage from "@/pages/MaterialPage";
import LinksPage from "@/pages/LinksPage";
import NotFound from "@/pages/not-found";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppRoutes() {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/+$/, "") || "/";

  const knownRoutes = [
    "/",
    "/que-es",
    "/quien-es",
    "/calendario",
    "/material",
    "/enlaces"
  ];

  const isNotFound = !knownRoutes.includes(pathname);

  if (isNotFound) {
    return (
      <main className="flex-grow">
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/que-es" element={<AboutPage />} />
          <Route path="/quien-es" element={<WhoPage />} />
          <Route path="/calendario" element={<CalendarPage />} />
          <Route path="/material" element={<MaterialPage />} />
          <Route path="/enlaces" element={<LinksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
