import { useEffect } from "react"

export default function MainContentContainer() {
  useEffect(() => {
    localStorage.setItem("token", "t35tT0k3n-22")
    const token = localStorage.getItem("token")
  }, [])

  return (
    <div>
      THIS is the main content
    </div>
  )
}