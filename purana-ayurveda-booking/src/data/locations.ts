export type Location = {
  id: string;
  name: string;
  type: string;
  address: string;
  description: string;
  image: string;
  treatmentIds: string[];
};

export const locations: Location[] = [
  {
    id: "wellness-centre",
    name: "Purana Ayurveda Wellness Centre",
    type: "Main Treatment Centre",
    address: "Steinberg am See, Germany",
    description:
      "Our main wellness space offering a complete range of Ayurvedic treatments, consultations and personalised wellness experiences.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    treatmentIds: [
      "abhyanga",
      "ayurvedic-massage",
      "shirodhara",
      "head-massage",
      "foot-massage",
      "herbal-steam",
      "herbal-bath",
      "pinda-sweda",
      "udvartana",
      "face-massage",
      "consultation",
    ],
  },
  {
    id: "ayurveda-chalets",
    name: "Purana Ayurveda Chalets",
    type: "Chalet Wellness Space",
    address: "Steinberg am See, Germany",
    description:
      "A private wellness experience for chalet guests, with selected Ayurvedic treatments available within the chalet environment.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    treatmentIds: [
      "abhyanga",
      "ayurvedic-massage",
      "head-massage",
      "foot-massage",
      "face-massage",
      "herbal-bath",
    ],
  },
  {
    id: "private-wellness",
    name: "Private Wellness Space",
    type: "Private Treatment Area",
    address: "By appointment",
    description:
      "A calm and private setting for selected Ayurvedic treatments and personalised wellness sessions.",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
    treatmentIds: [
      "abhyanga",
      "shirodhara",
      "ayurvedic-massage",
      "head-massage",
      "foot-massage",
      "herbal-steam",
      "consultation",
    ],
  },
];