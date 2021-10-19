import Image from "next/image";
import {Navigation, Pagination, Scrollbar, A11y, Virtual} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {ProductProps} from "../../types/SingleProduct.interface";

import ProductForm from "./ProductForm";
import RecommendedList from "./RecommendedList";

export const ProductPageContent = ({product}: ProductProps) => {
    const {images, handle, id, options, title, variants, description} = product;

    return (
        <div>
            <div
                className="flex flex-col justify-center items-center space-y-8 md:flex-row  md:space-y-0 md:space-x-4 lg:spacex-8 max-w-6xl w-11/12 mx-auto">
                <div
                    className="w-full max-w-md border rounded-2xl overflow-hidden shadow-lg md:1/2">
                    <div className="relative h-96 w-full">
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y, Virtual]}
                            navigation
                            className="h-96 rounded-2xl"
                            loop
                            scrollbar={{draggable: true}}
                        >
                            {images.edges.map(({node: img}, i) => (
                                <SwiperSlide key={`slide-${i}`} virtualIndex={i}>
                                    <Image
                                        src={img.originalSrc}
                                        alt={img.altText}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <ProductForm product={product}/>
            </div>
            <p className={'pt-16 font-bold space-y-8 md:spacex-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto'}>{description}</p>
            <RecommendedList current={product.id} products={product.collections.edges[0].node.products.edges} />
        </div>
    );
};
