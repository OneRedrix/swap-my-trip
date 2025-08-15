import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-background to-primary/5">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Treno moderno in viaggio" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Vendi i tuoi{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            biglietti di viaggio
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          La piattaforma P2P per rivendere biglietti di treno e bus inutilizzati. 
          Semplice, veloce e sicuro.
        </p>

        {/* Quick search */}
        <div className="bg-card p-6 rounded-2xl shadow-card max-w-2xl mx-auto mb-8">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Cerca biglietti</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              placeholder="Da dove parti? (es. Milano Centrale)"
              className="flex-1"
            />
            <Input 
              placeholder="Dove vai? (es. Roma Termini)"
              className="flex-1"
            />
            <Link to="/search">
              <Button variant="hero" className="w-full sm:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Cerca
              </Button>
            </Link>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/sell">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Vendi un biglietto
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <Link to="/search">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Sfoglia biglietti
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-card/50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Sicuro</div>
          </div>
          <div className="bg-card/50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">0€</div>
            <div className="text-sm text-muted-foreground">Commissioni</div>
          </div>
          <div className="bg-card/50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Supporto</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;