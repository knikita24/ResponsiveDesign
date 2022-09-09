export default function Card({ image }) {
  return (
    <div className="h-[180px] w-[300px] rounded-lg ">
      <img src={image} alt="img" className="h-[180px] w-[300px]" />
    </div>
  );
}
