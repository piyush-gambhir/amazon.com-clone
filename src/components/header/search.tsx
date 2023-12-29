import Image from "next/image";

export default function Search() {
  return (
    <div className="flex-grow flex flex-row px-1 py-[10px] rounded-md mx-[10px]">
      <button className="flex flex-row gap-1 px-3 items-center justify-center text-black/60 hover:text-black bg-[#e6e6e6] hover:bg-opacity-80 rounded-l-md">
        <span className="">All</span>
        <span>D</span>
      </button>
      <div className="flex bg-white flex-grow">
        <label className="hidden">Search Amazon.in</label>
        <input
          className="w-full py-[10px] pr-[7px] pl-2 leading=[15px] focus:appearance-none focus:outline-none focus:ring-0 focus:border-transparent"
          type="text"
          placeholder="Search Amazon.in"
        ></input>
      </div>
      <button className="flex items-center bg-[#febd69] hover:bg-[#f3a847] rounded-r-md px-3">
       <span>S</span>
      </button>
    </div>
  );
}
