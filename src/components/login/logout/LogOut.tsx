"use client"

import { handleLogout } from "app/actions"


export const Logout = () => {
  const handleSalir = async () => {
    await handleLogout()
  }
  return (
    <button onClick={handleSalir}>Logout</button>
  )
}
