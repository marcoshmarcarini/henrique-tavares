import Banner from "@/components/home/Banner/page"
import Contato from "@/components/home/Contato/page"
import Pattern from "@/components/home/Pattern/page"
import Propostas from "@/components/home/Propostas/page"
import Chapa from "@/components/home/Chapa/page"
import QuemSomos from "@/components/home/QuemSomos/page"

export default function Home() {
  return (
    <div>
      <Banner />
      <QuemSomos />
      <div className="flex flex-col relative">
        <Pattern />
        <Propostas />
        <Chapa />
      </div>
      <Contato />
    </div>
  )
}