
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F4ED] text-[#25231F]">
      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
  );
}
