export type Treatment = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  duration: number;
  price: number;
  priceLabel: string;
  suitability: string;
  preparation: string;
  category: string;
  image: string;
  featured?: boolean;
};

export const treatments: Treatment[] = [
  {
    id: "abhyanga",
    name: "Abhyanga",
    shortDescription:
      "A warm herbal oil massage designed to deeply relax the body and restore balance.",
    description:
      "Abhyanga is a traditional Ayurvedic full-body oil massage using warm herbal oils selected according to your individual needs. The treatment promotes relaxation, supports circulation and helps calm the nervous system.",
    duration: 75,
    price: 65,
    priceLabel: "From €65",
    suitability:
      "Suitable for most guests looking for relaxation, stress relief and general wellbeing.",
    preparation:
      "Avoid a heavy meal immediately before your treatment. Wear comfortable clothing and arrive a few minutes early.",
    category: "Massage",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },

  {
    id: "ayurvedic-massage",
    name: "Ayurvedic Massage",
    shortDescription:
      "A traditional therapeutic massage focused on relaxation, balance and overall wellbeing.",
    description:
      "This traditional Ayurvedic massage combines rhythmic massage techniques with carefully selected herbal oils to encourage deep relaxation and support the body's natural balance.",
    duration: 60,
    price: 45,
    priceLabel: "From €45",
    suitability:
      "Suitable for guests seeking relaxation and a traditional Ayurvedic wellness experience.",
    preparation:
      "Please avoid eating a heavy meal before the treatment and stay well hydrated.",
    category: "Massage",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "shirodhara",
    name: "Shirodhara",
    shortDescription:
      "A soothing Ayurvedic therapy using a continuous stream of warm oil to encourage deep relaxation.",
    description:
      "Shirodhara is a traditional Ayurvedic therapy in which warm herbal oil is gently poured in a continuous stream over the forehead. It is designed as a deeply calming and relaxing wellness experience.",
    duration: 60,
    price: 70,
    priceLabel: "From €70",
    suitability:
      "Suitable for guests looking for a deeply relaxing and calming Ayurvedic experience.",
    preparation:
      "Please arrive relaxed and avoid a heavy meal shortly before the treatment.",
    category: "Specialised",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },

  {
    id: "head-massage",
    name: "Ayurvedic Head Massage",
    shortDescription:
      "A focused head, neck and shoulder treatment designed to release everyday tension.",
    description:
      "This relaxing Ayurvedic head massage focuses on the scalp, neck and shoulders using traditional massage techniques and nourishing oils.",
    duration: 30,
    price: 35,
    priceLabel: "From €35",
    suitability:
      "Suitable for guests experiencing everyday tension or simply looking for a short relaxing treatment.",
    preparation:
      "No special preparation is required. Please let your therapist know about any scalp sensitivities.",
    category: "Massage",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "foot-massage",
    name: "Ayurvedic Foot Massage",
    shortDescription:
      "A relaxing foot treatment using traditional Ayurvedic massage techniques and herbal oils.",
    description:
      "A soothing foot massage designed to help relax tired feet and provide a calming wellness experience using traditional Ayurvedic techniques.",
    duration: 30,
    price: 35,
    priceLabel: "From €35",
    suitability:
      "Suitable for guests looking for a short relaxation treatment, especially after travelling or walking.",
    preparation:
      "No special preparation is required.",
    category: "Massage",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "face-massage",
    name: "Ayurvedic Face Massage",
    shortDescription:
      "A gentle facial massage using traditional Ayurvedic techniques and nourishing oils.",
    description:
      "A relaxing facial treatment combining gentle massage techniques with nourishing Ayurvedic oils to create a calming and restorative experience.",
    duration: 30,
    price: 40,
    priceLabel: "From €40",
    suitability:
      "Suitable for guests looking for relaxation and a gentle wellness treatment.",
    preparation:
      "Please arrive without heavy facial products where possible.",
    category: "Beauty & Wellness",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "herbal-steam",
    name: "Herbal Steam",
    shortDescription:
      "A traditional herbal steam experience using carefully selected Ayurvedic herbs.",
    description:
      "Herbal steam is traditionally used as part of Ayurvedic wellness routines. Carefully selected herbs are used to create a warm and relaxing steam experience.",
    duration: 30,
    price: 30,
    priceLabel: "From €30",
    suitability:
      "Suitable for guests who enjoy warm wellness treatments.",
    preparation:
      "Stay hydrated and inform the staff about any relevant health considerations.",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "herbal-bath",
    name: "Ayurvedic Herbal Bath",
    shortDescription:
      "A calming bathing experience enhanced with traditional Ayurvedic herbs.",
    description:
      "An immersive Ayurvedic wellness experience combining warm water with carefully selected herbs to encourage relaxation and comfort.",
    duration: 45,
    price: 50,
    priceLabel: "From €50",
    suitability:
      "Suitable for guests seeking a peaceful and restorative wellness experience.",
    preparation:
      "Please avoid a heavy meal immediately before the treatment.",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "pinda-sweda",
    name: "Pinda Sweda",
    shortDescription:
      "A traditional Ayurvedic therapy using warm herbal boluses and therapeutic massage.",
    description:
      "Pinda Sweda combines warm herbal bundles with traditional massage techniques. It is offered as a specialised Ayurvedic wellness treatment following an individual assessment.",
    duration: 75,
    price: 80,
    priceLabel: "From €80",
    suitability:
      "Treatment suitability should be discussed with an Ayurvedic practitioner before booking.",
    preparation:
      "A consultation may be recommended depending on your individual circumstances.",
    category: "Specialised",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "udvartana",
    name: "Udvartana",
    shortDescription:
      "A traditional Ayurvedic herbal powder massage designed as a revitalising wellness treatment.",
    description:
      "Udvartana is a traditional Ayurvedic treatment using herbal powders and specialised massage techniques. It provides a stimulating and invigorating wellness experience.",
    duration: 60,
    price: 70,
    priceLabel: "From €70",
    suitability:
      "Treatment suitability should be discussed with an Ayurvedic practitioner.",
    preparation:
      "Please avoid a heavy meal before the treatment and arrive with enough time to complete any required consultation.",
    category: "Specialised",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "ayurvedic-consultation",
    name: "Ayurvedic Consultation",
    shortDescription:
      "A personalised consultation to understand your wellbeing goals and Ayurvedic needs.",
    description:
      "A one-to-one consultation with an Ayurvedic practitioner to discuss your wellbeing goals, lifestyle and relevant health information. Recommendations can be personalised following the consultation.",
    duration: 60,
    price: 75,
    priceLabel: "From €75",
    suitability:
      "Suitable for guests who want personalised Ayurvedic guidance.",
    preparation:
      "Please complete the pre-visit questionnaire before your consultation where requested.",
    category: "Consultation",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
];