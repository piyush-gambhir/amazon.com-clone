import Carousel from "@components/carousel";
import ProductCarousel from "@components/product-carousel";
import SingleProductCard from "@components/single-product-card";

export const CarouselConfig = {
  MainCarousel: [
    {
      image: "/images/Homepage/MainCarousel/1.jpg",
      link: "/",
    },
    {
      image: "/images/Homepage/MainCarousel/2.jpg",
      link: "/",
    },
    {
      image: "/images/Homepage/MainCarousel/3.jpg",
      link: "/",
    },
    {
      image: "/images/Homepage/MainCarousel/4.jpg",
      link: "/",
    },
    {
      image: "/images/Homepage/MainCarousel/5.jpg",
      link: "/",
    },
    {
      image: "/images/Homepage/MainCarousel/6.jpg",
      link: "/",
    },
    {
      image: "/images/Homepage/MainCarousel/7.jpg",
      link: "/",
    },
    {
      image: "/images/Homepage/MainCarousel/8.jpg",
      link: "/",
    },
    {
      image: "/images/Homepage/MainCarousel/9.jpg",
      link: "/",
    },
  ],
  ProductCarousel: [
    {
      ProductCarouselHeading: "Product Carousel Heading",
      ProductCarouselViewAllLink: "/",
      ProductCarouselLinks: [
        {
          image: "/images/Homepage/ProductCarousel/1.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/2.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/3.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/4.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/5.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/6.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/7.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/8.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/9.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/8.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/8.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/8.jpg",
          link: "/",
        },
        {
          image: "/images/Homepage/ProductCarousel/8.jpg",
          link: "/",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="mx-2 mb-8">
      <div className="w-full">
        <div className="">
          <Carousel CarouselLinks={CarouselConfig.MainCarousel} />
        </div>
        <div className="relative flex flex-col gap-8 z-30 -mt-[250px] mx-6">
          <SingleProductCard
            ProductContainerHeading={"Up to 70% off | Clearance store"}
            Product={{
              link: "",
              image: "/images/Homepage/1.jpg",
            }}
          />
          <ProductCarousel
            ProductCarouselHeading={
              CarouselConfig.ProductCarousel[0].ProductCarouselHeading
            }
            ProductCarouelViewAllLink={
              CarouselConfig.ProductCarousel[0].ProductCarouselViewAllLink
            }
            ProductCarouselLinks={
              CarouselConfig.ProductCarousel[0].ProductCarouselLinks
            }
          />
          <ProductCarousel
            ProductCarouselHeading={
              CarouselConfig.ProductCarousel[0].ProductCarouselHeading
            }
            ProductCarouelViewAllLink={
              CarouselConfig.ProductCarousel[0].ProductCarouselViewAllLink
            }
            ProductCarouselLinks={
              CarouselConfig.ProductCarousel[0].ProductCarouselLinks
            }
          />
          <ProductCarousel
            ProductCarouselHeading={
              CarouselConfig.ProductCarousel[0].ProductCarouselHeading
            }
            ProductCarouelViewAllLink={
              CarouselConfig.ProductCarousel[0].ProductCarouselViewAllLink
            }
            ProductCarouselLinks={
              CarouselConfig.ProductCarousel[0].ProductCarouselLinks
            }
          />
          <ProductCarousel
            ProductCarouselHeading={
              CarouselConfig.ProductCarousel[0].ProductCarouselHeading
            }
            ProductCarouelViewAllLink={
              CarouselConfig.ProductCarousel[0].ProductCarouselViewAllLink
            }
            ProductCarouselLinks={
              CarouselConfig.ProductCarousel[0].ProductCarouselLinks
            }
          />
        </div>
      </div>
    </div>
  );
}
