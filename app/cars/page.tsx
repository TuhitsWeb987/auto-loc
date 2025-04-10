"use client";
import React, { useState } from "react";
import { Search, Car as CarIcon } from "lucide-react";

// Types
type CarType = "citadine" | "suv" | "4x4" | "berline" | "utilitaire";

interface Car {
  id: string;
  model: string;
  type: CarType;
  price: number;
  city: string;
  image: string;
}

// Mock data
const cities = ["Nouméa", "Dumbéa", "Mont-Dore", "Païta"];
const carTypes = ["citadine", "suv", "4x4", "berline", "utilitaire"];

const cars: Car[] = [
  {
    id: "1",
    model: "Toyota Yaris 2022",
    type: "citadine",
    price: 5900,
    city: "Nouméa",
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    model: "Hyundai Tucson 2023",
    type: "suv",
    price: 8900,
    city: "Dumbéa",
    image:
      "https://images.unsplash.com/photo-1670512216912-a61709fc49b8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    model: "Ford Ranger 2022",
    type: "4x4",
    price: 12900,
    city: "Mont-Dore",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    model: "Mercedes Classe C 2023",
    type: "berline",
    price: 15900,
    city: "Nouméa",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    model: "Renault Kangoo 2022",
    type: "utilitaire",
    price: 6900,
    city: "Païta",
    image:
      "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    model: "Peugeot 208 2023",
    type: "citadine",
    price: 5500,
    city: "Nouméa",
    image:
      "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?auto=format&fit=crop&q=80&w=800",
  },
];

function Cars() {
  // Filter states
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  // Filter cars based on criteria
  const filteredCars = cars.filter((car) => {
    if (selectedCity && car.city !== selectedCity) return false;
    if (selectedType && car.type !== selectedType) return false;
    if (minPrice && car.price < parseInt(minPrice)) return false;
    if (maxPrice && car.price > parseInt(maxPrice)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto bg-white shadow-sm flex justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
           Les voitures disponibles
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Trouvez le véhicule parfait pour votre prochain trajet
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto bg-white shadow-md mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Ville
              </label>
              <select
                className="w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">Toutes les villes</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Type de véhicule
              </label>
              <select
                className="w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">Tous les types</option>
                {carTypes.map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Prix (XPF/jour)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Dates de location
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                  type="date"
                  className="w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition flex items-center space-x-2"
              onClick={() => {
                /* Implement search logic */
              }}
            >
              <Search className="w-5 h-5" />
              <span>Rechercher</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                  {car.type.charAt(0).toUpperCase() + car.type.slice(1)}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {car.model}
                  </h3>
                  <div className="flex items-center text-blue-600">
                    <CarIcon className="w-5 h-5 mr-1" />
                    <span>{car.city}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {car.price.toLocaleString()} XPF
                    </p>
                    <p className="text-sm text-gray-500">par jour</p>
                  </div>
                  <a
                    href={`/cars/${car.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
                  >
                    Voir détails
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cars;
