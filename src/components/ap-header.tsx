import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-center items-center mb-5">
      <Image
        src="/amazon_logo_black_text.png"
        alt="Amazon Logo"
        width={126}
        height={36}
        className="cursor-pointer"
      />
    </div>
  );
}
