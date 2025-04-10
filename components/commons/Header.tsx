"use client";
import { Car, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    // navigation
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center space-x-3">
            <Car className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-600">AutoLoc</span>
          </a>
          {/* Menu bureau */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/cars"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Voitures
            </a>
            <a
              href="/how-it-works"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Comment ça marche
            </a>
            <a
              href="/map"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Carte
            </a>
            <a
              href="/faq"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              FAQ
            </a>
            <a
              href="/signin"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Se Connecter
            </a>
            <a
              href="/rent-your-car"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Louer sa voiture
            </a>
          </div>

          {/* Menu Mobile bouton */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-4">
              <a
                href="/cars"
                className="text-gray-600 hover:text-blue-600 font-medium py-2"
              >
                Voitures
              </a>
              <a
                href="/how-it-works"
                className="text-gray-600 hover:text-blue-600 font-medium py-2"
              >
                Comment ça marche
              </a>
              <a
                href="/map"
                className="text-gray-600 hover:text-blue-600 font-medium py-2"
              >
                Carte
              </a>
              <a
                href="/faq"
                className="text-gray-600 hover:text-blue-600 font-medium py-2"
              >
                FAQ
              </a>
              <a
                href="/signin"
                className="text-gray-600 hover:text-blue-600 font-medium py-2"
              >
                Se connecter
              </a>
              <a
                href="/rent-your-car"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition text-center mb-2"
              >
                Louer sa voiture
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
