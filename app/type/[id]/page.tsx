import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";
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

import m14_p1 from "@/public/image/house/m14_p1.jpg";
import m14_p2 from "@/public/image/house/m14_p2.jpg";
import m14_p3 from "@/public/image/house/m14_p3.jpg";
import m14_p4 from "@/public/image/house/m14_p4.jpg";
import m14_p5 from "@/public/image/house/m14_p5.jpg";
import m15_p1 from "@/public/image/house/m15_p1.jpg";
import m15_p2 from "@/public/image/house/m15_p2.jpg";
import m15_p3 from "@/public/image/house/m15_p3.jpg";
import m15_p4 from "@/public/image/house/m15_p4.jpg";
import m15_p5 from "@/public/image/house/m15_p5.jpg";
import m15_p6 from "@/public/image/house/m15_p6.jpg";
import m15_p7 from "@/public/image/house/m15_p7.jpg";
import m15_p8 from "@/public/image/house/m15_p8.jpg";
import m15_p9 from "@/public/image/house/m15_p9.jpg";
import m15_p10 from "@/public/image/house/m15_p10.jpg";
import m16_p1 from "@/public/image/house/m16_p1.jpg";
import m16_p2 from "@/public/image/house/m16_p2.jpg";
import m16_p3 from "@/public/image/house/m16_p3.jpg";
import m16_p4 from "@/public/image/house/m16_p4.jpg";
import m16_p5 from "@/public/image/house/m16_p5.jpg";
import m16_p6 from "@/public/image/house/m16_p6.jpg";
import m16_p7 from "@/public/image/house/m16_p7.jpg";
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

const houseInfo_longterme = [
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
];

const houseInfo_shortterme = [
  {
    id: "id_1-shortterme",
    images: [m1_p1, m1_p2, m1_p3, m1_p4],
    type: "Populaire",
    price: "",
    name: "Suite rénovée d'une chambre",
    available: false,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "500 sq.ft",
    commentary:
      "située au 4ème étage de l'immeuble, eau, chauffage inclus dans le loyer",
  },
  {
    id: "id_2-shortterme",
    images: [m2_p2, m2_p3, m2_p4, m2_p1, m2_p5, m2_p6],
    type: "Populaire",
    price: "",
    name: "Suite rénovée d'une chambre",
    available: false,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "500 sq.ft",
    commentary:
      "située au 1er étage de l'immeuble, eau, chauffage inclus dans le loyer",
  },
  {
    id: "id_3-shortterme",
    images: [m3_p1, m3_p2, m3_p3, m3_p4, m3_p5, m3_p6, m3_p7, m3_p8],
    type: "Populaire",
    price: "",
    name: "rez-de-chaussée de deux chambres",
    available: false,
    location: "Montreal, Canada",
    bed: 2,
    bath: 2,
    size: "970 sq.ft",
    commentary: "eau, chauffage inclus dans le loyer",
  },
  {
    id: "id_4-shortterme",
    images: [m4_p1, m4_p2, m4_p3, m4_p4, m4_p5],
    type: "Populaire",
    price: "",
    name: "suite a deux chambre",
    available: false,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "650 sq.ft",
    commentary: "situé au 5eme étage",
  },
  {
    id: "id_5-shortterme",
    images: [m5_p1, m5_p2, m5_p3, m5_p4, m5_p5, m5_p6],
    type: "Populaire",
    price: "",
    name: "suite a deux chambre",
    available: false,
    location: "Montreal, Canada",
    bed: 2,
    bath: 1,
    size: " sq.ft",
    commentary:
      "Condo avec salon de bonne taille, Grand salon avec rangement dans l'unité. Nouvelle peinture en 2025. Loyer comprenant place de parking, chauffage et eau.",
  },
  {
    id: "id_6-shortterme",
    images: [m6_p1, m6_p2, m6_p3],
    type: "Populaire",
    price: "",
    name: "studio",
    available: false,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "236 sq.ft",
    commentary: "Loyer comprenant chauffage et eau. situé au 2eme étage",
  },
  {
    id: "id_7-shortterme",
    images: [m7_p1, m7_p2, m7_p3, m7_p4],
    type: "Populaire",
    price: "",
    name: "studio",
    available: false,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "236 sq.ft",
    commentary: "Loyer comprenant chauffage et eau",
  },
  {
    id: "id_8-shortterme",
    images: [m8_p1, m8_p2, m8_p3, m8_p4, m8_p5],
    type: "Populaire",
    price: "",
    name: "studio",
    available: false,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "236 sq.ft",
    commentary: "Loyer comprenant chauffage et eau",
  },

  {
    id: "id_14-shortterme",
    images: [m14_p1, m14_p2, m14_p3, m14_p4, m14_p5],
    type: "Populaire",
    price: "$90/jour",
    name: "Apartment",
    available: true,
    location: "Québec City, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary:
      "une suite bien aménagée de 2 chambres, avec salle de bain et cuisine. Situé dans un logement plus récents à Québec City, vous bénéficierez d'un accès facile aux autoroutes et aux transports en commun. Profitez d'options de divertissement à proximité, y compris des salles de cinéma, des terrains de jeux, des parcs et une variété de restaurants.",
  },
  {
    id: "id_15-shortterme",
    images: [
      m15_p1,
      m15_p2,
      m15_p3,
      m15_p4,
      m15_p5,
      m15_p6,
      m15_p7,
      m15_p8,
      m15_p9,
      m15_p10,
    ],
    type: "Populaire",
    price: "$68/jour",
    name: "Apartment",
    available: true,
    location: "Montreal, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary:
      "À 3 minutes de marche du casino de Montréal . Transport en commun et épicerie à moins de 10 minutes de marches . Zone calme et accessible à tous. Parking gratuit",
  },
  {
    id: "id_16-shortterme",
    images: [m16_p1, m16_p2, m16_p3, m16_p4, m16_p5, m16_p6, m16_p7],
    type: "Populaire",
    price: "$96/jour",
    name: "Apartment",
    available: true,
    location: "Québec City, Canada",
    bed: 1,
    bath: 1,
    size: "",
    commentary:
      "Une option d'hébergement abordable adaptée aux célibataires, aux étudiants et aux voyageurs d'affaires. Proche des parcs, des sentiers pédestres et des transports en commun. Parking gratuit. Wifi haut débit",
  },
  {
    id: "id_17-shortterme",
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
    price: "$70/jour",
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
    id: "id_18-shortterme",
    images: [m18_p1, m18_p2, m18_p3, m18_p4, m18_p5],
    type: "Populaire",
    price: "$65/jour",
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
    id: "id_19-shortterme",
    images: [m19_p1, m19_p2, m19_p3, m19_p4, m19_p5, m19_p6],
    type: "Populaire",
    price: "$60/jour",
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
    id: "id_20-shortterme",
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
    price: "$68/jour",
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

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PropertyPage({ params }: Props) {
  const { id } = await params;
  const property_longterme = houseInfo_longterme.find(
    (house) => house.id === id
  );
  const property_shortterme = houseInfo_shortterme.find(
    (house) => house.id === id
  );

  const property = property_longterme || property_shortterme;

  if (!property) {
    return <div>Propriété non trouvée</div>;
  }

  // Le reste de votre code reste le même
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Bouton de retour */}
      <div className="mb-6">
        <Link href="/type/longterme">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour aux propriétés
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Section de gauche - Informations */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{property.location}</span>
            </div>
            <Badge className="mb-4 bg-blue-600">{property.type}</Badge>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 border-y">
            <div>
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2" />
                <span>{property.bed} Chambres</span>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <Bath className="w-5 h-5 mr-2" />
                <span>{property.bath} Salles de bain</span>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <Maximize className="w-5 h-5 mr-2" />
                <span>{property.size}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Prix</h2>
            <p className="text-3xl text-blue-600 font-bold">{property.price}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Description</h2>
            <p className="text-gray-600">{property.commentary}</p>
          </div>

          {property.available && (
            <Link
              href={`/contact?property=${encodeURIComponent(property.name)}`}
            >
              <Button className="w-full">Contacter pour cette propriété</Button>
            </Link>
          )}
        </div>

        {/* Section de droite - Images */}
        <div className="h-[600px] relative">
          {property.images.length === 1 ? (
            <div className="relative w-full h-full">
              <Image
                src={property.images[0]}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ) : (
            <Carousel className="w-full h-full">
              <CarouselContent>
                {property.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[600px]">
                      <Image
                        src={image}
                        alt={`${property.name} - Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4" />
              <CarouselNext className="absolute right-4" />
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
}
