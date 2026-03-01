import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import GalleryPage from "@/pages/GalleryPage";
import Home from "@/pages/Home";
import LegalNoticePage from "@/pages/LegalNoticePage";
import NotFound from "@/pages/not-found";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";

function Router() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/about'
        component={AboutPage}
      />
      <Route
        path='/gallery'
        component={GalleryPage}
      />
      <Route
        path='/galerie'
        component={GalleryPage}
      />
      <Route
        path='/contact'
        component={ContactPage}
      />
      {/* Legal Pages */}
      <Route
        path='/mentions-legales'
        component={LegalNoticePage}
      />
      <Route
        path='/politique-de-confidentialite'
        component={PrivacyPolicyPage}
      />
      <Route
        path='/conditions-utilisation'
        component={TermsOfServicePage}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className='min-h-screen bg-background'>
            <Navigation />
            <main role='main'>
              <Router />
            </main>
            <Footer />
            <ScrollToTop />
            <CookieBanner />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
