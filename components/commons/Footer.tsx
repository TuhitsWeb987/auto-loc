import { Car, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Car className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">AutoLoc</span>
            </div>
            <p className="text-gray-400 mb-6">
              Location de voitures entre particuliers. Simple, sécurisé et
              économique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Liens rapides
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/cars"
                  className="text-gray-400 hover:text-white transition"
                >
                  voitures
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  className="text-gray-400 hover:text-white transition"
                >
                  Comment ça marche
                </a>
              </li>
              <li>
                <a
                  href="/map"
                  className="text-gray-400 hover:text-white transition"
                >
                  Carte
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Légal</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition"
                >
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a
                  href="/insurance"
                  className="text-gray-400 hover:text-white transition"
                >
                  Assurance
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-gray-400 hover:text-white transition"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>123 rue de Paris, 75000 Paris</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contact@autoloc.fr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AutoLoc. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
