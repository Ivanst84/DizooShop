import { MainProducts } from "app/components/home/MainProducts"
import { Metadata } from "next"

export const metadata:Metadata = {
  title:"Dizzo",
  description:"Welcome to the pet shop from Mexicali B.C.",
  keywords:["pets","dogs","cats","fish","birds","ecommer","mexicali","baja california","mexico"]
}
export default function Home() {
  return (
    <main>
           <MainProducts />

    </main>
  )
}