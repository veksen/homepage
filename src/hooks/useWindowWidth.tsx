import { useEffect, useState } from "react"

export function useWindowWidth(): number {
  // for an env without window (on build), prevent failure
  if (typeof window === "undefined") {
    return 0
  }

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return width
}
