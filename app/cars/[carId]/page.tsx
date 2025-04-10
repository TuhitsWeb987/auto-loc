"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  Calendar,
  MapPin,
  Car as CarIcon,
  Fuel,
  Users,
  DoorOpen,
  Gauge,
  Flag,
  CheckCircle,
  XCircle,
  CalendarRange,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Types
interface Availability {
  start: string;
  end: string;
}

interface Car {
  id: number;
  model: string;
  type: string;
  price: number;
  description: string;
  images: string[];
  plateNumber: string;
  country: string;
  registrationYear: number;
  fuel: string;
  kilometres: string;
  doorsNumber: number;
  seatsNumber: number;
  isMaintained: boolean;
  location: string;
  availableDates: Availability[];
}

// Mock data
const carData: Car = {
  id: 1,
  model: "Mercedes Classe C 2023",
  type: "berline",
  price: 15900,
  description:
    "Découvrez le luxe et le confort avec notre Mercedes Classe C 2023. Cette berline haut de gamme offre une expérience de conduite exceptionnelle avec ses équipements modernes et son intérieur raffiné. Parfaite pour les voyages d'affaires ou les occasions spéciales.",
  images: [
    "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1800",
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1800",
    "https://images.unsplash.com/photo-1595558898774-bbf30516f364?auto=format&fit=crop&q=80&w=1800",
  ],
  plateNumber: "AB-123-CD",
  country: "France",
  registrationYear: 2023,
  fuel: "Diesel",
  kilometres: "15 000 km",
  doorsNumber: 4,
  seatsNumber: 5,
  isMaintained: true,
  location: "Nouméa",
  availableDates: [
    { start: "2024-03-20", end: "2024-03-25" },
    { start: "2024-04-01", end: "2024-04-15" },
    { start: "2024-04-20", end: "2024-04-30" },
  ],
};

function CarDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="aspect-[4/3]"
              >
                {carData.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${carData.model} - Vue ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Car Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Caractéristiques</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Année</p>
                    <p className="font-medium">{carData.registrationYear}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Kilométrage</p>
                    <p className="font-medium">{carData.kilometres}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Fuel className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Carburant</p>
                    <p className="font-medium">{carData.fuel}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <DoorOpen className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Portes</p>
                    <p className="font-medium">{carData.doorsNumber}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Places</p>
                    <p className="font-medium">{carData.seatsNumber}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Flag className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Immatriculation</p>
                    <p className="font-medium">{carData.plateNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {carData.model}
                </h1>
                <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
                  {carData.type}
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">{carData.location}</span>
              </div>

              <div className="mb-8">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {carData.price.toLocaleString()} XPF
                </div>
                <div className="text-gray-500">par jour</div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {carData.description}
              </p>

              <div className="flex items-center space-x-3 mb-8">
                {carData.isMaintained ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-green-700 font-medium">
                      Entretien à jour
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-500" />
                    <span className="text-red-700 font-medium">
                      Entretien non à jour
                    </span>
                  </>
                )}
              </div>

              <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition transform hover:scale-[1.02] mb-6">
                Réserver maintenant
              </button>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <CalendarRange className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Disponibilités</h2>
              </div>
              <div className="space-y-4">
                {carData.availableDates.map((period, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">
                          Du {formatDate(period.start)}
                        </p>
                        <p className="text-gray-500">
                          Au {formatDate(period.end)}
                        </p>
                      </div>
                    </div>
                    <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition">
                      Sélectionner
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
