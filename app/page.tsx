"use client";
import { useSession } from "@/lib/auth-client";
import { Calendar, Car, CarFront, Clock, Key, Search, Shield, Star } from "lucide-react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative min-h-[90vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero content - unchanged */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Votre voiture idéale
              <br />à portée de clic
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed">
              Location de voitures entre particuliers.
              <br />
              Simple, sécurisé et économique.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Où ?
                  </label>
                  <input
                    type="text"
                    placeholder="Entrez une ville"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Du
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Au
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition transform hover:scale-[1.02]">
                Rechercher une voiture
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comment ça marche */}
      <div className="py-24">
        {/* Comment ça marche content - unchanged */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Comment ça marche
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Location de voiture simple et sécurisée en 3 étapes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center relative">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 hover:rotate-0 transition-transform">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">1. Recherchez</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Trouvez la voiture parfaite parmi notre large sélection de
                véhicules vérifiés
              </p>
            </div>
            <div className="text-center relative">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 hover:rotate-0 transition-transform">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">2. Réservez</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Réservez instantanément et recevez une confirmation immédiate
              </p>
            </div>
            <div className="text-center relative">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 hover:rotate-0 transition-transform">
                <Key className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">3. Roulez</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Récupérez votre voiture et profitez de votre trajet en toute
                liberté
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Nos avantages */}
      <div className="py-24 bg-gray-50">
        {/* Nos avantages content - unchanged */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Pourquoi nous choisir
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Des avantages exclusifs pour une expérience unique
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Prix compétitifs</h3>
              <p className="text-gray-600 leading-relaxed">
                Jusqu'à 30% moins cher que les agences traditionnelles
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Assurance premium</h3>
              <p className="text-gray-600 leading-relaxed">
                Protection tous risques incluse avec assistance 24/7
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Réservation rapide</h3>
              <p className="text-gray-600 leading-relaxed">
                Confirmation instantanée et prise en main en 5 minutes
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <CarFront className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Véhicules vérifiés</h3>
              <p className="text-gray-600 leading-relaxed">
                Contrôle technique et entretien régulier garantis
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Avis clients */}
      <div className="py-24">
        {/* Avis clients content - unchanged */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Découvrez l'expérience de nos clients satisfaits
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Martin",
                role: "Utilisatrice régulière",
                comment:
                  "Une expérience exceptionnelle ! La voiture était impeccable et le processus de location vraiment simple. Je recommande vivement !",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
              },
              {
                name: "Thomas Dubois",
                role: "Voyageur d'affaires",
                comment:
                  "Service premium à prix abordable. La flexibilité des locations et la qualité des véhicules sont incomparables.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
              },
              {
                name: "Marie Lambert",
                role: "Première location",
                comment:
                  "Agréablement surprise par la simplicité du processus. Le support client est très réactif et professionnel.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-xl">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="relative py-24 overflow-hidden">
        {/* CTA Final content - unchanged */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=2000")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Prêt à prendre la route ?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Des milliers de voitures vous attendent. Trouvez celle qui vous
            convient.
          </p>
          <a
            href="/cars"
            className="inline-block bg-blue-600 text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-xl"
          >
            Découvrir les voitures disponibles
          </a>
        </div>
      </div>
    </div>
  );
}
