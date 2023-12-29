import Link from "next/link";

type Props = {
  title: string;
  link: string;
  underlineOnHover?: boolean;
};

export default function hyperlink({
  title,
  link,
  underlineOnHover = true,
}: Props) {
  return (
    <Link
      href={link}
      className={`
                text-royal_blue 
                hover:text-orange-600 
                ${underlineOnHover ? "hover:underline" : ""}
                `}
    >
      {title}
    </Link>
  );
}
