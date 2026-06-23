// High-quality imagery via Unsplash CDN (royalty-free).
const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const domesticDestinations = [
  {
    name: 'Delhi',
    description: 'Imperial avenues, Mughal grandeur and timeless heritage.',
    image: img('photo-1587474260584-136574528ed5'),
  },
  {
    name: 'Agra',
    description: 'Home to the eternal marble poetry of the Taj Mahal.',
    image: img('photo-1564507592333-c60657eea523'),
  },
  {
    name: 'Jaipur',
    description: 'The regal Pink City of palaces, forts and royal courts.',
    image: img('photo-1599661046289-e31897846e41'),
  },
  {
    name: 'Kashmir',
    description: 'Paradise on earth — shikaras, snow peaks and saffron valleys.',
    image: 'https://www.anubhavvacations.in/blog/wp-content/uploads/2025/01/kashmir-featured.webp',
  },
  {
    name: 'Goa',
    description: 'Sun-kissed shores, Portuguese charm and golden sunsets.',
    image: img('photo-1512343879784-a960bf40e7f2'),
  },
  {
    name: 'Kerala',
    description: 'Serene backwaters, lush greenery and tranquil houseboats.',
    image: img('photo-1602216056096-3b40cc0c9944'),
  },
  {
    name: 'Manali',
    description: 'Himalayan escapes wrapped in pine forests and snow.',
    image: img('photo-1626621341517-bbf3d9990a23'),
  },
]

export const internationalDestinations = [
  {
    name: 'Dubai',
    description: 'Futuristic skylines, desert luxury and endless indulgence.',
    image: img('photo-1512453979798-5ea266f8880c'),
  },
  {
    name: 'Thailand',
    description: 'Turquoise waters, golden temples and island paradise.',
    image: img('photo-1528181304800-259b08848526'),
  },
]
