export type Therapist = {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  experience: string;
  languages: string[];
  bio: string;
  image: string;
  locationIds: string[];
};

export const therapists: Therapist[] = [
  {
    id: "lakshani-perera",
    name: "Lakshani Perera",
    role: "Senior Ayurvedic Therapist",
    specialization: [
      "Ayurvedic Massage",
      "Abhyanga",
      "Shirodhara",
    ],
    experience: "8+ years",
    languages: ["English", "German", "Sinhala"],
    bio: "Lakshani specialises in traditional Ayurvedic therapies and personalised wellness treatments, helping guests create a calm and restorative experience.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    locationIds: ["wellness-centre"],
  },

  {
    id: "amal-silva",
    name: "Amal Silva",
    role: "Ayurvedic Wellness Therapist",
    specialization: [
      "Abhyanga",
      "Herbal Steam",
      "Pinda Sweda",
    ],
    experience: "6+ years",
    languages: ["English", "Sinhala"],
    bio: "Amal focuses on traditional body therapies and relaxing wellness treatments designed to support physical relaxation and overall wellbeing.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    locationIds: ["wellness-centre", "private-wellness"],
  },

  {
    id: "maya-schneider",
    name: "Maya Schneider",
    role: "Holistic Wellness Therapist",
    specialization: [
      "Head Massage",
      "Foot Massage",
      "Face Massage",
    ],
    experience: "5+ years",
    languages: ["German", "English"],
    bio: "Maya combines gentle Ayurvedic wellness techniques with a calming approach to create personalised treatments for guests looking for relaxation and balance.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    locationIds: ["ayurveda-chalets"],
  },

  {
    id: "nisha-fernando",
    name: "Nisha Fernando",
    role: "Ayurvedic Therapist",
    specialization: [
      "Ayurvedic Massage",
      "Herbal Bath",
      "Abhyanga",
    ],
    experience: "7+ years",
    languages: ["English", "German", "Sinhala"],
    bio: "Nisha provides traditional Ayurvedic treatments with a focus on creating personalised and restorative experiences for chalet and private wellness guests.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    locationIds: ["ayurveda-chalets", "private-wellness"],
  },
];