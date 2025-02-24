import Earnings from "@/components/Earnings"
import Hero from "@/components/Hero"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Hero/>
      <Earnings/>
    </div>
  )
}
export default Home