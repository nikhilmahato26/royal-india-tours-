const img = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

// span = how many grid rows it occupies (masonry effect)
export const gallery = [
  { image: img('photo-1564507592333-c60657eea523'), span: 2, alt: 'Taj Mahal at sunrise' },
  { image: img('photo-1512453979798-5ea266f8880c'), span: 1, alt: 'Dubai skyline' },
  { image: img('photo-1566837497312-7be4a47b2c20'), span: 1, alt: 'Kashmir valley' },
  { image: img('photo-1602216056096-3b40cc0c9944'), span: 2, alt: 'Kerala backwaters' },
  { image: img('photo-1528181304800-259b08848526'), span: 1, alt: 'Thailand beach' },
  { image: img('photo-1599661046289-e31897846e41'), span: 2, alt: 'Jaipur palace' },
  { image: img('photo-1512343879784-a960bf40e7f2'), span: 1, alt: 'Goa beach' },
  { image: img('photo-1537996194471-e657df975ab4'), span: 1, alt: 'Bali rice terraces' },
  { image: img('photo-1626621341517-bbf3d9990a23'), span: 2, alt: 'Manali mountains' },
  { image: img('photo-1499856871958-5b9627545d1a'), span: 1, alt: 'Europe streets' },
]
