export type Location = {
  id: number;
  name: string;
  type: string;
  address: string;
  description: string;
  services: string[];
  image: string;
};

export const locations: Location[] = [
  {
    id: 1,
    name: "Purana Ayurveda Wellness Centre",
    type: "Main Treatment Centre",
    address: "Steinberg am See, Germany",
    description:
      "Our main wellness space where guests can enjoy personalised Ayurvedic treatments in a calm and welcoming environment.",
    services: [
      "Ayurvedic Treatments",
      "Ayurvedic Consultations",
      "Wellness Therapies",
      "Massage Treatments",
    ],
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Purana Ayurveda Chalets",
    type: "Chalet Wellness Space",
    address: "Steinberg am See, Germany",
    description:
      "Selected treatments can be arranged for guests staying in our chalets, creating a more private and comfortable wellness experience.",
    services: [
      "In-Chalet Treatments",
      "Relaxation Therapies",
      "Massage Treatments",
      "Wellness Sessions",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Private Wellness Space",
    type: "Private Treatment Area",
    address: "By appointment",
    description:
      "A quiet and private setting available for selected treatments and personalised wellness sessions.",
    services: [
      "Private Treatments",
      "Ayurvedic Massage",
      "Relaxation Sessions",
      "Consultations",
    ],
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
  },
];