import { PrismaClient } from '@prisma/client'
import { addDays } from 'date-fns'

const prisma = new PrismaClient()

async function main() {
  // Création d'une adresse
  const address = await prisma.address.create({
    data: {
      street: '123 rue du Surf',
      complement: 'Résidence Teahupo’o',
      postalCode: '98719',
      city: 'Teahupo’o',
      country: 'Polynésie Française',
    },
  })

  // Création d’un utilisateur propriétaire
  const owner = await prisma.user.create({
    data: {
      id: 'owner-1',
      email: 'owner@example.com',
      name: 'Moana Pro',
      emailVerified: true,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: address.id,
      dateOfBirth: new Date('1988-01-01'),
      phone_number: 877000000,
      role: 'OWNER',
      userType: 'PROFESSIONAL',
    },
  })

  // Création d’un utilisateur locataire
  const user = await prisma.user.create({
    data: {
      id: 'user-1',
      email: 'user@example.com',
      name: 'Tane Locataire',
      emailVerified: true,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      addressId: address.id,
      dateOfBirth: new Date('1995-05-10'),
      phone_number: 877111111,
      role: 'USER',
      userType: 'INDIVIDUAL',
    },
  })

  // Création d’une localisation
  const location = await prisma.location.create({
    data: {
      street: 'PK 15.3 côte ouest',
      postalCode: '98718',
      city: 'Papeete',
      country: 'Polynésie Française',
      complement: 'Garage privé',
    },
  })

  // Création d'une voiture
  const car = await prisma.car.create({
    data: {
      model: 'Toyota Hilux',
      type: 'Pick-up',
      price: 8500,
      description: 'Parfait pour explorer les spots de surf reculés.',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
      ],
      plateNumber: 'AB-123-CD',
      country: 'Polynésie Française',
      registrationYear: 2020,
      fuel: 'Diesel',
      Kilometres: '45000',
      doorsNumber: 4,
      seatsNumber: 5,
      ownerId: owner.id,
      locationId: location.id,
      isMaintained: true,
    },
  })

  // Ajout de disponibilités
  await prisma.availability.create({
    data: {
      carId: car.id,
      startDate: new Date(),
      endDate: addDays(new Date(), 10),
      status: 'disponible',
    },
  })

  // Ajout d'une réservation
  await prisma.booking.create({
    data: {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 5),
      status: 'confirmée',
      userId: user.id,
      carId: car.id,
    },
  })

  console.log('✅ Données de seed insérées avec succès.')
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
