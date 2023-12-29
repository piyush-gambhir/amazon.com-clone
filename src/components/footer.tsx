import Image from "next/image";
import Link from "next/link";

export const FooterConfig = {
  footerLinks: [
    {
      Heading: "About",
      links: [
        {
          name: "About Us",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
        {
          name: "Careers",
          link: "#",
        },
        {
          name: "Press",
          link: "#",
        },
        {
          name: "Contact Us",
          link: "#",
        },
      ],
    },
    {
      Heading: "Connect with Us",
      links: [
        {
          name: "Facebook",
          link: "#",
        },
        {
          name: "Twitter",
          link: "#",
        },
        {
          name: "Instagram",
          link: "#",
        },
      ],
    },
    {
      Heading: "Make Money with Us",
      links: [
        {
          name: "Sell on Amazon",
          link: "#",
        },
        {
          name: "Sell under Amazon Accelerator",
          link: "#",
        },
        {
          name: "Protect and Build Your Brand",
          link: "#",
        },
        {
          name: "Amazon Global Selling",
          link: "#",
        },
        {
          name: "Become an Affiliate",
          link: "#",
        },
        {
          name: "Fulfilment by Amazon",
          link: "#",
        },
        {
          name: "Advertise Your Products",
          link: "#",
        },
        {
          name: "Amazon Pay on Merchants",
          link: "#",
        },
      ],
    },
    {
      Heading: "Let Us Help You",
      links: [
        {
          name: "COVID-19 and Amazon",
          link: "#",
        },
        {
          name: "Your Account",
          link: "#",
        },
        {
          name: "Returns Centre",
          link: "#",
        },
        {
          name: "100% Purchase Protection",
          link: "#",
        },
        {
          name: "Amazon App Download",
          link: "#",
        },
        {
          name: "Amazon Assistant Download",
          link: "#",
        },
        {
          name: "Help",
          link: "#",
        },
      ],
    },
  ],
  countryLinks: [
    {
      name: "Australia",
      link: "#",
    },
    {
      name: "Brazil",
      link: "#",
    },
    {
      name: "Canada",
      link: "#",
    },
    {
      name: "China",
      link: "#",
    },
    {
      name: "France",
      link: "#",
    },
    {
      name: "Germany",
      link: "#",
    },
    {
      name: "Italy",
      link: "#",
    },
    {
      name: "Japan",
      link: "#",
    },
    {
      name: "Mexico",
      link: "#",
    },
    {
      name: "Netherlands",
      link: "#",
    },
    {
      name: "Poland",
      link: "#",
    },
    {
      name: "Singapore",
      link: "#",
    },
    {
      name: "Spain",
      link: "#",
    },
    {
      name: "Turkey",
      link: "#",
    },
    {
      name: "United Arab Emirates",
      link: "#",
    },
    {
      name: "United Kingdom",
      link: "#",
    },
    {
      name: "United States",
      link: "#",
    },
  ],

  footerBottomLinks: [
    {
      title: "AbeBooks",
      description: "Books, art\n& collectibles",
      link: "#",
    },
    {
      title: "Amazon Web Services",
      description: "Scalable Cloud\nComputing Services",
      link: "#",
    },
    {
      title: "Audible",
      description: "Download\nAudio Books",
      link: "#",
    },
    {
      title: "DPReview",
      description: "Digital\nPhotography",
      link: "#",
    },
    {
      title: "IMDb",
      description: "Movies, TV\n& Celebrities",
      link: "#",
    },
    {
      title: "Shopbop",
      description: "Designer\nFashion Brands",
      link: "#",
    },
    {
      title: "Amazon Business",
      description: "Everything For\nYour Business",
      link: "#",
    },
    {
      title: "Prime Now",
      description: "2-Hour Delivery\non Everyday Items",
      link: "#",
    },
    {
      title: "Amazon Prime Music",
      description:
        "100 million songs, ad-free\nOver 15 million podcast episodes",
      link: "#",
    },
    {
      title: "",
      description: "",
      link: "#",
    },
  ],
};

export default function Footer() {
  return (
    <div className="flex flex-col z-10 text-white">
      <Link
        href="#"
        className="flex items-center justify-center p-[15px] bg-[#37475a] hover:bg-opacity-90"
      >
        <p className="text-[13px] leading-[19px] ">Back to top</p>
      </Link>
      <div className="flex flex-col justify-center items-center bg-[#232f3e] pt-10 gap-10">
        <div className="grid grid-cols-4 gap-[100px]">
          {FooterConfig.footerLinks.map((item, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <h1 className="text-white text-base font-bold font-amazon-ember leading-[120%] mt-[6px] mb-[14px]">
                  {item.Heading}
                </h1>
                {item.links.map((link, index) => {
                  return (
                    <Link href={link.link} key={index}>
                      <p className="text-sm font-medium mb-[10px] hover:underline">
                        {link.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col border-t-[0.1px] border-white/10">
          <div className="flex flex-row justify-center items-center mx-auto gap-20 my-2.5">
            <div className="px-2">
              <Image
                className="mt-[30px] mb-[15px]"
                src="/amazon_logo_white_text.png"
                alt="logo"
                width={76}
                height={23}
              />
            </div>
            <div className="mt-[18px]">
              <button className="flex justify-center items-center border border-[#848688] rounded-[3px] text-[13px] py-[6px] pl-[8px] pr-[18px] mr-1">
                Laguage
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center whitespace-normal">
            {FooterConfig.countryLinks.map((link, index) => {
              return (
                <Link href={link.link} key={index}>
                  <p className="text-xs font-medium px-[7.2px] my-[19px] leading-[18px] hover:underline">
                    {link.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-[#131a22]">
        <div className="flex justify-center py-[30px]">
          <div className="grid grid-cols-5 justify-center gap-5 text-xs">
            {FooterConfig.footerBottomLinks.map((link, index) => {
              return (
                <Link
                  href={link.link}
                  key={index}
                  className="px-2 hover:underline"
                >
                  <p className="">{link.title}</p>
                  <p className="">
                    {link.description.split("\n").map((item, index) => {
                      return (
                        <span key={index}>
                          {item}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-between items-center text-[13px] py-[10px] pb-[30px]">
          <div className="flex flex-row gap-5">
            <Link href="#" className="hover:underline">
              Conditions of Use
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Notice
            </Link>
            <Link href="#" className="hover:underline">
              Interest-Based Ads
            </Link>
          </div>
          <p className="text-light_gray">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
}
