import Card from "../Card/Card";
import dairy from "../../assets/dairy.jpg";
import fruits from "../../assets/fruits.jpg";
import grocery from "../../assets/grocery.jpg";
import veg from "../../assets/veg.jpg";
import SmallCard from "../SmallCard/SmallCard";
import "./Body.css";

export default function Body() {
  const data = [dairy, fruits, grocery, veg];
  const topData = [1, 2, 3, 4];
  return (
    <div className=" overflow-y-scoll h-[1000px] p-5  ">
      <h1 className="text-2xl font-bold text-cgy4 text-left">Your Mart</h1>
      <p className="text-base text-cgy3 text-left">
        Why step out when you can get everything delivered home with the tap of
        a button? Hyderabad’s favourite delivery app gets you Food, Grocery,
        Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health &
        Wellness, Gifts and Send Packages from one end of the city to the other.
        From your local kirana stores to your favourite brands, grocery shopping
        to your forgotten charger, we are always on the move for you. Why worry
        about your chores, when you can get it all Dun!
      </p>
      <div className="imgGroup">
        {data.map((item, i) => {
          return <Card image={item} />;
        })}
      </div>
      <div className="text-2xl font-semibold text-cgy4 text-left mt-4">
        Top Picks For You
      </div>
      <div className="flex flex-wrap justify-start gap-3 mt-4">
        {topData.map((data, i) => {
          return <SmallCard />;
        })}
      </div>
    </div>
  );
}
