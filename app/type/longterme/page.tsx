import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import CardHouse from "@/components/ui/cardhouse";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Search, CheckCircle, Clock, Heart } from "lucide-react";
import Footer from "@/components/ui/footer";
import photo15 from "@/public/image/photo15.png";
import toronto2 from "@/public/image/toronto2.jpg";
import vancouver1 from "@/public/image/vancouver1.jpg";
import montreal1 from "@/public/image/montreal1.jpg";
import calgary1 from "@/public/image/calgary1.jpg";

import m1_p1 from "@/public/image/house/m1_p1.jpg";
import m1_p2 from "@/public/image/house/m1_p2.jpg";
import m1_p3 from "@/public/image/house/m1_p3.jpg";
import m1_p4 from "@/public/image/house/m1_p4.jpg";
import m2_p1 from "@/public/image/house/m2_p1.jpg";
import m2_p2 from "@/public/image/house/m2_p2.jpg";
import m2_p3 from "@/public/image/house/m2_p3.jpg";
import m2_p4 from "@/public/image/house/m2_p4.jpg";
import m2_p5 from "@/public/image/house/m2_p5.jpg";
import m2_p6 from "@/public/image/house/m2_p6.jpg";
import m3_p1 from "@/public/image/house/m3_p1.jpg";
import m3_p2 from "@/public/image/house/m3_p2.jpg";
import m3_p3 from "@/public/image/house/m3_p3.jpg";
import m3_p4 from "@/public/image/house/m3_p4.jpg";
import m3_p5 from "@/public/image/house/m3_p5.jpg";
import m3_p6 from "@/public/image/house/m3_p6.jpg";
import m3_p7 from "@/public/image/house/m3_p7.jpg";
import m3_p8 from "@/public/image/house/m3_p8.jpg";
import m4_p1 from "@/public/image/house/m4_p1.jpg";
import m4_p2 from "@/public/image/house/m4_p2.jpg";
import m4_p3 from "@/public/image/house/m4_p3.jpg";
import m4_p4 from "@/public/image/house/m4_p4.jpg";
import m4_p5 from "@/public/image/house/m4_p5.jpg";
import m5_p1 from "@/public/image/house/m5_p1.jpg";
import m5_p2 from "@/public/image/house/m5_p2.jpg";
import m5_p3 from "@/public/image/house/m5_p3.jpg";
import m5_p4 from "@/public/image/house/m5_p4.jpg";
import m5_p5 from "@/public/image/house/m5_p5.jpg";
import m5_p6 from "@/public/image/house/m5_p6.jpg";
import m6_p1 from "@/public/image/house/m6_p1.jpg";
import m6_p2 from "@/public/image/house/m6_p2.jpg";
import m6_p3 from "@/public/image/house/m6_p3.jpg";
import m7_p1 from "@/public/image/house/m7_p1.jpg";
import m7_p2 from "@/public/image/house/m7_p2.jpg";
import m7_p3 from "@/public/image/house/m7_p3.jpg";
import m7_p4 from "@/public/image/house/m7_p4.jpg";
import m8_p1 from "@/public/image/house/m8_p1.jpg";
import m8_p2 from "@/public/image/house/m8_p2.jpg";
import m8_p3 from "@/public/image/house/m8_p3.jpg";
import m8_p4 from "@/public/image/house/m8_p4.jpg";
import m8_p5 from "@/public/image/house/m8_p5.jpg";
import m9_p1 from "@/public/image/house/m9_p1.jpg";
import m9_p2 from "@/public/image/house/m9_p2.jpg";
import m9_p3 from "@/public/image/house/m9_p3.jpg";
import m9_p4 from "@/public/image/house/m9_p4.jpg";
import m9_p5 from "@/public/image/house/m9_p5.jpg";
import m9_p6 from "@/public/image/house/m9_p6.jpg";
import m9_p7 from "@/public/image/house/m9_p7.jpg";
import m9_p8 from "@/public/image/house/m9_p8.jpg";
import m10_p1 from "@/public/image/house/m10_p1.jpg";
import m10_p2 from "@/public/image/house/m10_p2.jpg";
import m10_p3 from "@/public/image/house/m10_p3.jpg";
import m10_p4 from "@/public/image/house/m10_p4.jpg";
import m11_p1 from "@/public/image/house/m11_p1.jpg";
import m11_p2 from "@/public/image/house/m11_p2.jpg";
import m11_p3 from "@/public/image/house/m11_p3.jpg";
import m11_p4 from "@/public/image/house/m11_p4.jpg";
import m11_p5 from "@/public/image/house/m11_p5.jpg";
import m11_p6 from "@/public/image/house/m11_p6.jpg";
import m12_p1 from "@/public/image/house/m12_p1.jpg";
import m12_p2 from "@/public/image/house/m12_p2.jpg";
import m12_p3 from "@/public/image/house/m12_p3.jpg";
import m12_p4 from "@/public/image/house/m12_p4.jpg";
import m12_p5 from "@/public/image/house/m12_p5.jpg";
import m12_p6 from "@/public/image/house/m12_p6.jpg";
import m12_p7 from "@/public/image/house/m12_p7.jpg";
import m12_p8 from "@/public/image/house/m12_p8.jpg";
import m12_p9 from "@/public/image/house/m12_p9.jpg";
import m12_p10 from "@/public/image/house/m12_p10.jpg";
import m13_p1 from "@/public/image/house/m13_p1.jpg";
import m13_p2 from "@/public/image/house/m13_p2.jpg";
import m13_p3 from "@/public/image/house/m13_p3.jpg";
import m13_p4 from "@/public/image/house/m13_p4.jpg";
import m13_p5 from "@/public/image/house/m13_p5.jpg";

import m17_p1 from "@/public/image/house/m17_p1.jpg";
import m17_p2 from "@/public/image/house/m17_p2.jpg";
import m17_p3 from "@/public/image/house/m17_p3.jpg";
import m17_p4 from "@/public/image/house/m17_p4.jpg";
import m17_p5 from "@/public/image/house/m17_p5.jpg";
import m17_p6 from "@/public/image/house/m17_p6.jpg";
import m17_p7 from "@/public/image/house/m17_p7.jpg";
import m17_p8 from "@/public/image/house/m17_p8.jpg";
import m17_p9 from "@/public/image/house/m17_p9.jpg";
import m17_p10 from "@/public/image/house/m17_p10.jpg";
import m18_p1 from "@/public/image/house/m18_p1.jpg";
import m18_p2 from "@/public/image/house/m18_p2.jpg";
import m18_p3 from "@/public/image/house/m18_p3.jpg";
import m18_p4 from "@/public/image/house/m18_p4.jpg";
import m18_p5 from "@/public/image/house/m18_p5.jpg";
import m19_p1 from "@/public/image/house/m19_p1.jpg";
import m19_p2 from "@/public/image/house/m19_p2.jpg";
import m19_p3 from "@/public/image/house/m19_p3.jpg";
import m19_p4 from "@/public/image/house/m19_p4.jpg";
import m19_p5 from "@/public/image/house/m19_p5.jpg";
import m19_p6 from "@/public/image/house/m19_p6.jpg";
import m20_p1 from "@/public/image/house/m20_p1.jpg";
import m20_p2 from "@/public/image/house/m20_p2.jpg";
import m20_p3 from "@/public/image/house/m20_p3.jpg";
import m20_p4 from "@/public/image/house/m20_p4.jpg";
import m20_p5 from "@/public/image/house/m20_p5.jpg";
import m20_p6 from "@/public/image/house/m20_p6.jpg";
import m20_p7 from "@/public/image/house/m20_p7.jpg";
import m20_p8 from "@/public/image/house/m20_p8.jpg";
import m20_p9 from "@/public/image/house/m20_p9.jpg";
import m20_p10 from "@/public/image/house/m20_p10.jpg";
import m20_p11 from "@/public/image/house/m20_p11.jpg";
import m20_p12 from "@/public/image/house/m20_p12.jpg";

const houseInfo = [
  {
    id: "id_1-longterme",
    images: [m1_p1, m1_p2, m1_p3, m1_p4],
    type: "Populaire",
    price: "$1300/mois",
    name: "Suite rénovée d'une chambre",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "500 sq.ft",
    commentary:
      "située au 4ème étage de l'immeuble, eau, chauffage inclus dans le loyer",
  },
  {
    id: "id_2-longterme",
    images: [m2_p2, m2_p3, m2_p4, m2_p1, m2_p5, m2_p6],
    type: "Populaire",
    price: "$1400/mois",
    name: "Suite rénovée d'une chambre",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "500 sq.ft",
    commentary:
      "située au 1er étage de l'immeuble, eau, chauffage inclus dans le loyer",
  },
  {
    id: "id_3-longterme",
    images: [m3_p1, m3_p2, m3_p3, m3_p4, m3_p5, m3_p6, m3_p7, m3_p8],
    type: "Populaire",
    price: "$1850/mois",
    name: "rez-de-chaussée de deux chambres",
    available: true,
    location: "Montreal, Canada",
    bed: 2,
    bath: 2,
    size: "970 sq.ft",
    commentary: "eau, chauffage inclus dans le loyer",
  },
  {
    id: "id_4-longterme",
    images: [m4_p1, m4_p2, m4_p3, m4_p4, m4_p5],
    type: "Populaire",
    price: "$1900/mois",
    name: "suite a deux chambre",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "650 sq.ft",
    commentary: "situé au 5eme étage",
  },
  {
    id: "id_5-longterme",
    images: [m5_p1, m5_p2, m5_p3, m5_p4, m5_p5, m5_p6],
    type: "Populaire",
    price: "$1500/mois",
    name: "suite a deux chambre",
    available: true,
    location: "Montreal, Canada",
    bed: 2,
    bath: 1,
    size: " sq.ft",
    commentary:
      "Condo avec salon de bonne taille, Grand salon avec rangement dans l'unité. Nouvelle peinture en 2025. Loyer comprenant place de parking, chauffage et eau.",
  },
  {
    id: "id_6-longterme",
    images: [m6_p1, m6_p2, m6_p3],
    type: "Populaire",
    price: "$1100/mois",
    name: "studio",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "236 sq.ft",
    commentary: "Loyer comprenant chauffage et eau. situé au 2eme étage",
  },
  {
    id: "id_7-longterme",
    images: [m7_p1, m7_p2, m7_p3, m7_p4],
    type: "Populaire",
    price: "$1140/mois",
    name: "studio",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "236 sq.ft",
    commentary: "Loyer comprenant chauffage et eau",
  },
  {
    id: "id_8-longterme",
    images: [m8_p1, m8_p2, m8_p3, m8_p4, m8_p5],
    type: "Populaire",
    price: "$1140/mois",
    name: "studio",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "236 sq.ft",
    commentary: "Loyer comprenant chauffage et eau",
  },
  {
    id: "id_9-longterme",
    images: [m9_p1, m9_p2, m9_p3, m9_p4, m9_p5, m9_p6, m9_p7, m9_p8],
    type: "Populaire",
    price: "$990$/mois",
    name: "suite rénovée",
    available: true,
    location: "Montreal, Canada",
    bed: 2,
    bath: 2,
    size: "",
    commentary:
      "Proche de la station jean talon ( 8 minutes de marches ) Épicerie et commerce à côté Hydro , chauffage compris . Possible d'ajouter le wifi",
  },
  {
    id: "id_10-longterme",
    images: [m10_p1, m10_p2, m10_p3, m10_p4],
    type: "Populaire",
    price: "$900/mois",
    name: "studio",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "500 sq.ft",
    commentary:
      "suite rénovée studio proche de la station jean talon, située au 1er étage",
  },
  {
    id: "id_11-longterme",
    images: [m11_p1, m11_p2, m11_p3, m11_p4, m11_p5, m11_p6],
    type: "Populaire",
    price: "$1070/mois",
    name: "suite rénovée",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary: "Loyer comprenant chauffage et eau, située au 2e étage",
  },
  {
    id: "id_12-longterme",
    images: [
      m12_p1,
      m12_p2,
      m12_p3,
      m12_p4,
      m12_p5,
      m12_p6,
      m12_p7,
      m12_p8,
      m12_p9,
      m12_p10,
    ],
    type: "Populaire",
    price: "$1100/mois",
    name: "Apartment",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary: "Loyer comprenant chauffage et eau",
  },
  {
    id: "id_13-longterme",
    images: [m13_p1, m13_p2, m13_p3, m13_p4, m13_p5],
    type: "Populaire",
    price: "$1030/mois",
    name: "Studio non meublé",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary:
      "Proche de la station Cadillac (6 minutes de marches), Épicerie et commerce à côté, Loyer comprenant chauffage et eau, Possible d’ajouter le wifi",
  },
  {
    id: "id_17-longterme",
    images: [
      m17_p1,
      m17_p2,
      m17_p3,
      m17_p4,
      m17_p5,
      m17_p6,
      m17_p7,
      m17_p8,
      m17_p9,
      m17_p10,
    ],
    type: "Populaire",
    price: "$1050/mois",
    name: "Apartment",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary:
      "Montréal , 2 minutes à pied de la station place des arts , notre suite est idéalement située. Notre toute nouvelle suite d'une chambre dispose de tout ce dont vous avez besoin pour se sentir chez vous. Notre suite dispose d'un lit double et d'un salon avec une télévision connectée, afin que vous puissiez vous détendre et regarder toutes vos émissions préférées. Nous avons également inclus un espace de travail afin que vous puissiez travailler à domicile si nécessaire.",
  },
  {
    id: "id_18-longterme",
    images: [m18_p1, m18_p2, m18_p3, m18_p4, m18_p5],
    type: "Populaire",
    price: "$1090/mois",
    name: "Apartment",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary:
      "Situé au cœur de Montréal et à 5 minutes de marche de la station McGill, cet appartement situé au troisième étage avec salle de sport inclus. Vous offre tout ce dont vous avez besoin pour votre séjour. Toutes les factures sont comprises, Wifi, disponible et parking gratuit dans la rue premier venu premier servi.",
  },
  {
    id: "id_19-longterme",
    images: [m19_p1, m19_p2, m19_p3, m19_p4, m19_p5, m19_p6],
    type: "Populaire",
    price: "$980/mois",
    name: "Apartment",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary:
      "situé  à Montréal, l’appartement se trouve à huit minutes de marche de la station Joliette, toutes les charges sont incluses . accessible aux transports en commun et aux épiceries en moins de 5 minutes . Zone calme et relax",
  },
  {
    id: "id_20-longterme",
    images: [
      m20_p1,
      m20_p2,
      m20_p3,
      m20_p4,
      m20_p5,
      m20_p6,
      m20_p7,
      m20_p8,
      m20_p9,
      m20_p10,
      m20_p11,
      m20_p12,
    ],
    type: "Populaire",
    price: "$1025/mois",
    name: "Apartment",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary:
      "Montréal , Situé à 10 minutes à pied de la station Atwater et à deux minutes à pied d’un arrêt d’autobus . Appartement au sous-sol facilement accessible, parking gratuit .",
  },
];

export default function Longterme() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text & Search */}
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Trouvez votre maison idéale au Canada
            </h2>
            <p className="text-gray-600 mb-8">
              Que vous recherchiez un séjour de courte durée ou une résidence à
              long terme, nous avons l&apos;hébergement idéal pour vous partout
              au Canada.
            </p>

            <div className="flex space-x-3 mb-6">
              <Link href="/type/shortterme">
                <Button variant="outline">Court terme</Button>
              </Link>
              <Link href="/type/longterme">
                <Button variant={"outline"} className="bg-blue-600 text-white">
                  Long Term
                </Button>
              </Link>
            </div>

            <Card className="mt-6 sm:mt-8 hidden">
              <CardContent className="p-4">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <div className="flex items-center border rounded-md px-3 py-2 w-full">
                        <Search className="text-gray-400 mr-2 h-5 w-5" />
                        <Input
                          className="border-0 focus-visible:ring-0 p-0 text-sm w-full"
                          placeholder="Location"
                        />
                      </div>
                    </div>

                    <div className="flex-1 sm:flex-initial">
                      <div className="flex items-center border rounded-md px-3 py-2 w-full">
                        <Calendar className="text-gray-400 mr-2 h-5 w-5" />
                        <Input
                          className="border-0 focus-visible:ring-0 p-0 text-sm w-full"
                          placeholder="mm/dd/yyyy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Select>
                      <SelectTrigger className="w-full sm:w-32">
                        <SelectValue placeholder="Any Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Appartement</SelectItem>
                        <SelectItem value="house">Maison</SelectItem>
                        <SelectItem value="condo">Copropriété</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button className="flex items-center justify-center w-full sm:w-auto">
                      <Search className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">
                        Rechercher des propriétés
                      </span>
                      <span className="sm:hidden">Rechercher</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={photo15}
              alt="Modern apartment interior"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Villes populaires</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* City 1 */}
          <div className="relative h-48 rounded-lg overflow-hidden group">
            <Image
              src={toronto2}
              alt="Toronto"
              layout="fill"
              objectFit="cover"
              className="rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="font-bold">Toronto</h3>
            </div>
          </div>

          {/* City 2 */}
          <div className="relative h-48 rounded-lg overflow-hidden group">
            <Image
              src={vancouver1}
              alt="Vancouver"
              layout="fill"
              objectFit="cover"
              className="rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="font-bold">Vancouver</h3>
            </div>
          </div>

          {/* City 3 */}
          <div className="relative h-48 rounded-lg overflow-hidden group">
            <Image
              src={montreal1}
              alt="Montreal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="font-bold">Montreal</h3>
            </div>
          </div>

          {/* City 4 */}
          <div className="relative h-48 rounded-lg overflow-hidden group">
            <Image
              src={calgary1}
              alt="Calgary"
              layout="fill"
              objectFit="cover"
              className="rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="font-bold">Calgary</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Shortterme properties */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Nos propriétés long terme</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[...houseInfo]
            .sort((a, b) => {
              // Sort by availability (available first)
              if (a.available === b.available) return 0;
              return a.available ? -1 : 1;
            })
            .map((house, index) => {
              return (
                <CardHouse key={index} dataImage={house} type={"longterme"} />
              );
            })}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Pourquoi choisir StayHub
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Verified Properties</h3>
            <p className="text-gray-600 text-sm">
              Toutes nos propriétés sont soigneusement vérifiées pour votre
              tranquillité d&apos;esprit et votre sécurité.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Notre équipe d&apos;assistance est disponible 24 heures sur 24
              pour répondre à toutes vos questions.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">Best Prices</h3>
            <p className="text-gray-600 text-sm">
              Nous proposons des tarifs compétitifs et des promotions régulières
              pour les meilleures offres.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Ce que disent nos clients</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src="/sarah-johnson.jpg" alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-gray-500 text-sm">Toronto</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              « J&apos;ai adoré mon séjour ! L&apos;appartement était exactement
              comme sur la photo, propre et très bien situé. Le personnel était
              super serviable aussi ! »
            </p>
            <div className="flex text-yellow-400">
              <span>★★★★★</span>
            </div>
          </Card>

          {/* Testimonial 2 */}
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src="/michael-chen.jpg" alt="Michael Chen" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-gray-500 text-sm">Vancouver</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              « Grand choix d&apos;appartements. J&apos;ai pu trouver la
              location à long terme idéale pour mon séjour d&apos;affaires à
              Vancouver. »
            </p>
            <div className="flex text-yellow-400">
              <span>★★★★★</span>
            </div>
          </Card>

          {/* Testimonial 3 */}
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage
                  src="/jennifer-thompson.jpg"
                  alt="Jennifer Thompson"
                />
                <AvatarFallback>JT</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold">Jennifer Thompson</h4>
                <p className="text-gray-500 text-sm">Montreal</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              « L&apos;ensemble du processus, de la réservation au départ,
              s&apos;est déroulé sans problème.  J&apos;utiliserai certainement
              StayHub pour mes prochains voyages au Canada ! »
            </p>
            <div className="flex text-yellow-400">
              <span>★★★★★</span>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 text-white hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Find Your Perfect Stay?
          </h2>
          <p className="mb-8 max-w-lg mx-auto">
            Join thousands of satisfied customers who have found their ideal
            accommodation with StayHub.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Search Properties
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-blue-700"
            >
              Talk to an Agent
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
