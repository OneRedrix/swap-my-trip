import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Train, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const companies = [
  "Trenitalia",
  "Italo", 
  "Flixbus",
  "MarinoBus",
  "BlaBlaBus",
  "Trenord",
  "Freccialink"
];

const offerTypes = [
  "Economy",
  "Flex",
  "Super Economy", 
  "eXtra Summer",
  "Promo",
  "Carnet"
];

const SellTicket = () => {
  const [formData, setFormData] = useState({
    company: "",
    offerType: "",
    ticketCode: "",
    trainNumber: "",
    departure: "",
    arrival: "",
    date: "",
    time: "",
    price: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Vendi il tuo biglietto
          </h1>
          <p className="text-muted-foreground">
            Compila tutti i campi per mettere in vendita il tuo biglietto
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Train className="h-5 w-5 text-primary" />
              <span>Dettagli del biglietto</span>
            </CardTitle>
            <CardDescription>
              Inserisci tutte le informazioni del tuo biglietto di viaggio
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company and Offer Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Compagnia *</Label>
                  <Select value={formData.company} onValueChange={(value) => 
                    setFormData(prev => ({ ...prev, company: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona compagnia" />
                    </SelectTrigger>
                    <SelectContent>
                      {companies.map((company) => (
                        <SelectItem key={company} value={company}>
                          {company}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="offerType">Tipo di offerta *</Label>
                  <Select value={formData.offerType} onValueChange={(value) => 
                    setFormData(prev => ({ ...prev, offerType: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {offerTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Ticket Code and Train Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ticketCode">Codice biglietto *</Label>
                  <Input
                    id="ticketCode"
                    placeholder="es. ABC123456789"
                    value={formData.ticketCode}
                    onChange={(e) => setFormData(prev => ({ ...prev, ticketCode: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trainNumber">Numero treno/bus *</Label>
                  <Input
                    id="trainNumber"
                    placeholder="es. FR 9542"
                    value={formData.trainNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, trainNumber: e.target.value }))}
                  />
                </div>
              </div>

              {/* Departure and Arrival */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="departure">Stazione di partenza *</Label>
                  <Input
                    id="departure"
                    placeholder="es. Milano Centrale"
                    value={formData.departure}
                    onChange={(e) => setFormData(prev => ({ ...prev, departure: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="arrival">Stazione di arrivo *</Label>
                  <Input
                    id="arrival"
                    placeholder="es. Roma Termini"
                    value={formData.arrival}
                    onChange={(e) => setFormData(prev => ({ ...prev, arrival: e.target.value }))}
                  />
                </div>
              </div>

              {/* Date, Time and Price */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Data partenza *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Orario partenza *</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Prezzo di vendita (€) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="50.00"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label>Upload biglietto *</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Trascina qui il PDF o screenshot del biglietto
                  </p>
                  <Button variant="outline" type="button">
                    Scegli file
                  </Button>
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="hero" className="w-full" size="lg">
                Pubblica biglietto
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellTicket;