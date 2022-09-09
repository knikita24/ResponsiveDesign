import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
export default function Footer() {
  return (
    <div className="flex justify-center gap-2 bg-cgn6 h-16 py-3 fixed bottom-0 left-0 right-0">
      <img src={twitter} alt="img" className="h-[40px] w-[40px]" />
       <img src={instagram} alt="img" className="h-[40px] w-[40px]" />
      <img src={facebook} alt="img" className="h-[40px] w-[40px]" />
    </div>
  );
}
