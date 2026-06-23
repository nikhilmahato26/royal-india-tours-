const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const domesticPackages = [
  {
    name: 'Kashmir',
    title: 'Valleys of Paradise',
    nights: '6 Nights / 7 Days',
    price: '₹42,999',
    tag: 'Bestseller',
    image: img('photo-1566837497312-7be4a47b2c20'),
  },
  {
    name: 'Kerala',
    title: 'Backwater Serenity',
    nights: '5 Nights / 6 Days',
    price: '₹38,499',
    tag: 'Honeymoon',
    image: img('photo-1602216056096-3b40cc0c9944'),
  },
  {
    name: 'Goa',
    title: 'Coastal Indulgence',
    nights: '4 Nights / 5 Days',
    price: '₹27,999',
    tag: 'Beach',
    image: img('photo-1512343879784-a960bf40e7f2'),
  },
  {
    name: 'Rajasthan',
    title: 'Royal Heritage Trail',
    nights: '7 Nights / 8 Days',
    price: '₹54,999',
    tag: 'Heritage',
    image: img('photo-1599661046289-e31897846e41'),
  },
  {
    name: 'Himachal',
    title: 'Himalayan Retreat',
    nights: '6 Nights / 7 Days',
    price: '₹36,999',
    tag: 'Adventure',
    image: img('photo-1626621341517-bbf3d9990a23'),
  },
]

export const internationalPackages = [
  {
    name: 'Dubai',
    title: 'Desert Luxury',
    nights: '5 Nights / 6 Days',
    price: '₹89,999',
    tag: 'Luxury',
    image: img('photo-1512453979798-5ea266f8880c'),
  },
  {
    name: 'Thailand',
    title: 'Island Paradise',
    nights: '6 Nights / 7 Days',
    price: '₹74,999',
    tag: 'Beach',
    image: img('photo-1528181304800-259b08848526'),
  },
  {
    name: 'Bali',
    title: 'Tropical Escape',
    nights: '6 Nights / 7 Days',
    price: '₹82,999',
    tag: 'Honeymoon',
    image: img('photo-1537996194471-e657df975ab4'),
  },
  {
    name: 'Singapore',
    title: 'City of the Future',
    nights: '5 Nights / 6 Days',
    price: '₹91,999',
    tag: 'Family',
    image: img('photo-1525625293386-3f8f99389edd'),
  },
  {
    name: 'Europe',
    title: 'Grand European Tour',
    nights: '10 Nights / 11 Days',
    price: '₹2,49,999',
    tag: 'Premium',
    image: img('photo-1499856871958-5b9627545d1a'),
  },
]
