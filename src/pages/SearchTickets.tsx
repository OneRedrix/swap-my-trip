import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Train, Clock, MapPin, Euro } from "lucide-react";
import Navbar from "@/components/Navbar";

// Import company logos
import trenitaliaLogo from "@/assets/logos/trenitalia-logo.png";
import italoLogo from "@/assets/logos/italo-logo.png";
import flixbusLogo from "@/assets/logos/flixbus-logo.png";

// Mock data for demonstration
const mockTickets = [
  {
    id: 1,
    company: "Trenitalia",
    offerType: "Super Economy",
    trainNumber: "FR 9542",
    departure: "Milano Centrale",
    arrival: "Roma Termini",
    date: "2024-08-20",
    time: "14:25",
    price: 35.90,
    originalPrice: 59.90
  },
  {
    id: 2,
    company: "Italo",
    offerType: "Economy",
    trainNumber: "IT 9923",
    departure: "Roma Termini",
    arrival: "Napoli Centrale",
    date: "2024-08-21",
    time: "09:15",
    price: 25.50,
    originalPrice: 39.90
  },
  {
    id: 3,
    company: "Flixbus",
    offerType: "Flex",
    trainNumber: "FB 1205",
    departure: "Milano Lampugnano",
    arrival: "Torino",
    date: "2024-08-22", 
    time: "16:30",
    price: 12.90,
    originalPrice: 18.90
  }
];

const SearchTickets = () => {
  const [filters, setFilters] = useState({
    departure: "",
    arrival: "",
    date: "",
    company: "",
    maxPrice: ""
  });

  const [results, setResults] = useState(mockTickets);

  const handleSearch = () => {
    // TODO: Implement real search logic
    console.log("Searching with filters:", filters);
  };

  const getCompanyLogo = (company: string) => {
    switch (company.toLowerCase()) {
      case 'trenitalia':
        return trenitaliaLogo;
      case 'italo':
        return italoLogo;
      case 'flixbus':
        return flixbusLogo;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Trova il tuo biglietto
          </h1>
          <p className="text-muted-foreground">
            Cerca tra migliaia di biglietti in vendita da altri viaggiatori
          </p>
        </div>

        {/* Search Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-primary" />
              <span>Filtri di ricerca</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label htmlFor="departure">Da</Label>
                <Input
                  id="departure"
                  placeholder="Milano Centrale"
                  value={filters.departure}
                  onChange={(e) => setFilters(prev => ({ ...prev, departure: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="arrival">A</Label>
                <Input
                  id="arrival"
                  placeholder="Roma Termini"
                  value={filters.arrival}
                  onChange={(e) => setFilters(prev => ({ ...prev, arrival: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Data</Label>
                <Input
                  id="date"
                  type="date"
                  value={filters.date}
                  onChange={(e) => setFilters(prev => ({ ...prev, date: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Compagnia</Label>
                <Select value={filters.company} onValueChange={(value) => 
                  setFilters(prev => ({ ...prev, company: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Tutte" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutte</SelectItem>
                    <SelectItem value="trenitalia">Trenitalia</SelectItem>
                    <SelectItem value="italo">Italo</SelectItem>
                    <SelectItem value="flixbus">Flixbus</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxPrice">Prezzo max (€)</Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="100"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                />
              </div>
            </div>

            <Button onClick={handleSearch} variant="hero" className="w-full mt-4">
              <Search className="h-4 w-4 mr-2" />
              Cerca biglietti
            </Button>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            {results.length} biglietti trovati
          </h2>

          {results.map((ticket) => (
            <Card key={ticket.id} className="hover:shadow-card transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <img 
                        src={getCompanyLogo(ticket.company)} 
                        alt={`${ticket.company} logo`}
                        className="h-12 w-12 object-contain"
                      />
                    </div>

                    {/* Ticket Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{ticket.company}</Badge>
                        <Badge variant="secondary">{ticket.offerType}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {ticket.trainNumber}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-medium">{ticket.departure}</span>
                          <span className="text-muted-foreground">→</span>
                          <span className="font-medium">{ticket.arrival}</span>
                        </div>

                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{ticket.date} alle {ticket.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Euro className="h-4 w-4 text-primary" />
                        <span className="text-2xl font-bold text-primary">
                          {ticket.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground line-through">
                        Originale: €{ticket.originalPrice.toFixed(2)}
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        Risparmi €{(ticket.originalPrice - ticket.price).toFixed(2)}
                      </div>
                    </div>

                    <Button variant="hero">
                      Contatta
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchTickets;