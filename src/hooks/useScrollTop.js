import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to top on every route change for smooth page transitions
export default function useScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
}
