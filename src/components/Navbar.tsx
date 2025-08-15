import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plane, Search, Plus, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Plane className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SwapTrip</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/search">
              <Button variant="ghost" className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Cerca</span>
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="hero" className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>Vendi</span>
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>I miei biglietti</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/search" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <Search className="h-4 w-4 mr-2" />
                Cerca biglietti
              </Button>
            </Link>
            <Link to="/sell" className="block">
              <Button variant="hero" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Vendi biglietto
              </Button>
            </Link>
            <Link to="/dashboard" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                I miei biglietti
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;