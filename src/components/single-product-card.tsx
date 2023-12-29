import Image from "next/image";
import Link from "next/link";

type Props = {
  ProductContainerHeading: string;
  Product: {
    image: string;
    link: string;
  };
};

export default function SingleProductContainer({
  ProductContainerHeading,
  Product,
}: Props) {
  return (
    <div className="min-h-[420px] h-[420px] min-w-[250px] w-[350px] flex flex-col bg-white p-5">
      <h3 className="text-[21px] leading-[27.3px] font-bold mb-3">
        {ProductContainerHeading}
      </h3>
      <div className="mb-8">
        <Link href={Product.link}>
          <Image
            src={Product.image}
            alt={ProductContainerHeading}
            width={350}
            height={350}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <Link
        href={Product.link}
        className="text-[14px] leading-[18.2px] font-medium"
      >
        Shop Now
      </Link>
    </div>
  );
}
