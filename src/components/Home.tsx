import Blog from "./Blog/Blog";
import Footer from "./Footer";
import Hero from "./Hero/Hero";
import JoinFetchCard from "./JoinFetch/JoinFecthCard";
import Location from "./Location/Location";
import Services from "./Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Blog />
      <Location />
      <JoinFetchCard />
      <Footer />
    </>
  );
}
