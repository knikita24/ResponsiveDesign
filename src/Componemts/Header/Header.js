export default function Header() {
  return (
    <div className="flex justify-between bg-cgn6 h-20 px-4">
      <div className=" text-4xl text-cwhite font-bold my-5">Instamart</div>
      <div className="flex gap-6 my-[25px]">
        <div className="font-bold">LogIn</div>
        <div className="">
          <button className="h-[30px] w-[83px] rounded-xl bg-cwhite text-cgy4 text-center font-bold">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
