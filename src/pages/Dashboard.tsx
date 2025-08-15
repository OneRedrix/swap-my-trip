import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Train, Plus, Edit, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

// Mock user data
const userData = {
  name: "Marco Rossi",
  email: "marco.rossi@email.com",
  totalSold: 3,
  totalEarned: 127.30
};

// Mock tickets data
const myTickets = [
  {
    id: 1,
    company: "Trenitalia",
    trainNumber: "FR 9542",
    departure: "Milano Centrale",
    arrival: "Roma Termini",
    date: "2024-08-25",
    time: "14:25",
    price: 45.90,
    status: "active",
    type: "sold"
  },
  {
    id: 2,
    company: "Italo", 
    trainNumber: "IT 9923",
    departure: "Roma Termini",
    arrival: "Napoli Centrale",
    date: "2024-08-20",
    time: "09:15",
    price: 28.50,
    status: "sold",
    type: "sold"
  },
  {
    id: 3,
    company: "Flixbus",
    trainNumber: "FB 1205", 
    departure: "Milano Lampugnano",
    arrival: "Torino",
    date: "2024-08-15",
    time: "16:30",
    price: 15.90,
    status: "expired",
    type: "sold"
  }
];

const purchasedTickets = [
  {
    id: 4,
    company: "Trenitalia",
    trainNumber: "FR 8534",
    departure: "Firenze SMN",
    arrival: "Milano Centrale", 
    date: "2024-08-28",
    time: "11:45",
    price: 52.90,
    status: "active",
    type: "purchased"
  }
];

const Dashboard = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Attivo</Badge>;
      case "sold":
        return <Badge className="bg-blue-100 text-blue-800">Venduto</Badge>;
      case "expired":
        return <Badge variant="destructive">Scaduto</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              I miei biglietti
            </h1>
            <p className="text-muted-foreground">
              Gestisci i tuoi biglietti in vendita e acquistati
            </p>
          </div>
          
          <Link to="/sell">
            <Button variant="hero" className="mt-4 md:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Vendi nuovo biglietto
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <User className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Profilo</p>
                  <p className="font-semibold">{userData.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Train className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Biglietti venduti</p>
                  <p className="text-2xl font-bold text-primary">{userData.totalSold}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-success rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">€</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Totale guadagnato</p>
                  <p className="text-2xl font-bold text-secondary">€{userData.totalEarned}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                  <Eye className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visualizzazioni</p>
                  <p className="text-2xl font-bold text-primary">247</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tickets Tabs */}
        <Tabs defaultValue="selling" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="selling">In vendita</TabsTrigger>
            <TabsTrigger value="purchased">Acquistati</TabsTrigger>
          </TabsList>

          <TabsContent value="selling" className="space-y-4">
            {myTickets.map((ticket) => (
              <Card key={ticket.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{ticket.company}</Badge>
                        {getStatusBadge(ticket.status)}
                        <span className="text-sm text-muted-foreground">
                          {ticket.trainNumber}
                        </span>
                      </div>

                      <div className="text-sm space-y-1">
                        <div>
                          <span className="font-medium">{ticket.departure}</span>
                          <span className="text-muted-foreground"> → </span>
                          <span className="font-medium">{ticket.arrival}</span>
                        </div>
                        <div className="text-muted-foreground">
                          {ticket.date} alle {ticket.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          €{ticket.price.toFixed(2)}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="purchased" className="space-y-4">
            {purchasedTickets.map((ticket) => (
              <Card key={ticket.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{ticket.company}</Badge>
                        {getStatusBadge(ticket.status)}
                        <span className="text-sm text-muted-foreground">
                          {ticket.trainNumber}
                        </span>
                      </div>

                      <div className="text-sm space-y-1">
                        <div>
                          <span className="font-medium">{ticket.departure}</span>
                          <span className="text-muted-foreground"> → </span>
                          <span className="font-medium">{ticket.arrival}</span>
                        </div>
                        <div className="text-muted-foreground">
                          {ticket.date} alle {ticket.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          €{ticket.price.toFixed(2)}
                        </div>
                      </div>

                      <Button variant="hero">
                        Scarica biglietto
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;