import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import WhoPage from "@/pages/WhoPage";
import CalendarPage from "@/pages/CalendarPage";
import MaterialPage from "@/pages/MaterialPage";
import LinksPage from "@/pages/LinksPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

// Hook personalizado para hash-based routing (GitHub Pages friendly)
const useHashLocation = () => {
  const [loc, setLoc] = useState(() => {
    const raw = window.location.hash.slice(1) || "/";
    return raw.startsWith("/") ? raw : "/" + raw;
  });

  useEffect(() => {
    const handler = () => {
      const raw = window.location.hash.slice(1) || "/";
      setLoc(raw.startsWith("/") ? raw : "/" + raw);
    };

    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [loc, navigate];
};

function Router() {
  // Configurar Wouter para usar rutas basadas en hash
  // @ts-ignore
  useLocation.use = useHashLocation;

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/que-es" component={AboutPage} />
      <Route path="/quien-es" component={WhoPage} />
      <Route path="/calendario" component={CalendarPage} />
      <Route path="/material" component={MaterialPage} />
      <Route path="/enlaces" component={LinksPage} />
      {/* Página 404 por defecto */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const normalizedLocation = location.replace(/\/+$/, "") || "/";

  const knownRoutes = [
    "/",
    "/que-es",
    "/quien-es",
    "/calendario",
    "/material",
    "/enlaces"
  ];

  const isNotFound = !knownRoutes.includes(normalizedLocation);

  return (
    <QueryClientProvider client={queryClient}>
      {isNotFound ? (
        <main className="flex-grow">
          <Router />
        </main>
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
            <Router />
          </main>
          <Footer />
        </div>
      )}
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
