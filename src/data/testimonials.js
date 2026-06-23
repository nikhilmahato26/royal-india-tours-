const face = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=200&q=80`

export const testimonials = [
  {
    name: 'Aarav & Meera Kapoor',
    destination: 'Kashmir Honeymoon',
    image: face('photo-1500648767791-00dcc994a43e'),
    rating: 5,
    review:
      'Royal India Tours turned our honeymoon into a fairytale. Every detail — the houseboat, the private shikara at dawn — was flawless and deeply personal.',
  },
  {
    name: 'Sanjana Rao',
    destination: 'Dubai Getaway',
    image: face('photo-1494790108377-be9c29b29330'),
    rating: 5,
    review:
      'The most seamless luxury trip I have ever taken. Chauffeur transfers, suite upgrades and a desert dinner under the stars. Truly five-star service.',
  },
  {
    name: 'The Mehta Family',
    destination: 'Kerala Backwaters',
    image: face('photo-1507003211169-0a1dd7228f2d'),
    rating: 5,
    review:
      'Travelling with three generations is not easy, yet they made it effortless. Handpicked resorts and warm hospitality throughout. Highly recommended.',
  },
  {
    name: 'Rohan Verma',
    destination: 'Thailand Islands',
    image: face('photo-1519085360753-af0119f7cbe7'),
    rating: 5,
    review:
      'From private speedboats to beachfront villas, the entire itinerary felt exclusive and curated. The team was reachable 24×7 — exceptional support.',
  },
  {
    name: 'Ishita & Family',
    destination: 'Rajasthan Heritage',
    image: face('photo-1438761681033-6461ffad8d80'),
    rating: 5,
    review:
      'Staying in restored heritage palaces with private guides made history come alive. A regal experience worth every rupee. We will travel only with them now.',
  },
]
