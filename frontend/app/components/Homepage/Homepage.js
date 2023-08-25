import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CarouselConfig } from './HomepageConfig'

import Carousel from './Carousel'
import ProductCarousel from './ProductCarousel'
import ProductCard from './SingleProductCard'
import SingleProductCard from './SingleProductCard'

export default function Homepage() {
    return (
        <div className="mx-2 mb-8">
            <div className='w-full'>
                <div className=''>
                    <Carousel
                        CarouselLinks={CarouselConfig.MainCarousel}
                    />
                </div>
                <div className='relative flex flex-col gap-8 z-30 -mt-[250px]'>
                    <SingleProductCard
                        ProductContainerHeading={'Top Categories'}
                        Product={{
                            'link': '',
                            'image': '',
                        }}
                    />
                    <ProductCarousel
                        ProductCarouselHeading={CarouselConfig.ProductCarousel[0].ProductCarouselHeading}
                        ProductCarouelViewAllLink={CarouselConfig.ProductCarousel[0].ProductCarouselViewAllLink}
                        ProductCarouselLinks={CarouselConfig.ProductCarousel[0].ProductCarouselLinks}
                    />
                    <ProductCarousel
                        ProductCarouselHeading={CarouselConfig.ProductCarousel[0].ProductCarouselHeading}
                        ProductCarouelViewAllLink={CarouselConfig.ProductCarousel[0].ProductCarouselViewAllLink}
                        ProductCarouselLinks={CarouselConfig.ProductCarousel[0].ProductCarouselLinks}
                    />
                    <ProductCarousel
                        ProductCarouselHeading={CarouselConfig.ProductCarousel[0].ProductCarouselHeading}
                        ProductCarouelViewAllLink={CarouselConfig.ProductCarousel[0].ProductCarouselViewAllLink}
                        ProductCarouselLinks={CarouselConfig.ProductCarousel[0].ProductCarouselLinks}
                    />
                    <ProductCarousel
                        ProductCarouselHeading={CarouselConfig.ProductCarousel[0].ProductCarouselHeading}
                        ProductCarouelViewAllLink={CarouselConfig.ProductCarousel[0].ProductCarouselViewAllLink}
                        ProductCarouselLinks={CarouselConfig.ProductCarousel[0].ProductCarouselLinks}
                    />
                </div>
            </div>
        </div>
    )
}
