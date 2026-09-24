export type Therapist = {
  id: number;
  name: string;
  role: string;
  experience: string;
  bio: string;
  languages: string[];
  treatments: string[];
  image: string;
};

export const therapists: Therapist[] = [
  {
    id: 1,
    name: "Therapist 1",
    role: "Ayurveda Therapist",
    experience: "8+ years experience",
    bio: "Dedicated to creating personalised Ayurvedic experiences that support relaxation, balance and natural wellbeing.",
    languages: ["English", "German"],
    treatments: [
      "Abhyanga",
      "Shirodhara",
      "Head Massage",
      "Herbal Steam",
    ],
    image:
      "https://images.unsplash.com/photo-1594824804732-ca8dbf7e1a5c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Therapist 2",
    role: "Ayurvedic Wellness Therapist",
    experience: "6+ years experience",
    bio: "Focused on traditional Ayurvedic treatments designed to restore relaxation, energy and harmony to the body and mind.",
    languages: ["English", "German"],
    treatments: [
      "Ayurvedic Massage",
      "Foot Massage",
      "Pinda Sweda",
      "Udvartana",
    ],
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Therapist 3",
    role: "Ayurveda & Wellness Therapist",
    experience: "7+ years experience",
    bio: "Combining traditional wellness practices with a calm and attentive approach to create meaningful treatment experiences.",
    languages: ["English", "German"],
    treatments: [
      "Abhyanga",
      "Ayurvedic Face Massage",
      "Herbal Bath",
      "Consultation",
    ],
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
  },
];