/* eslint-disable @next/next/no-img-element */
import { Flex } from "@chakra-ui/react";

import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { SwiperItem } from "./SwiperItem";

SwiperCore.use([Navigation, Pagination]);

interface Continent {
  name: string;
  quote: string;
  image: string;
  url: string;
}

interface SwiperProps {
  continents: Continent[];
}

export function Swiper({ continents }: SwiperProps) {
  return (
    <Flex margin="0 auto" maxWidth="1120px" height="400px">
      <SwiperReact navigation={true} pagination={true} className="mySwiper">
        {continents.map((continent) => {
          return (
            <SwiperSlide key={continent.name}>
              <SwiperItem
                url={continent.url}
                continent={continent.name}
                description={continent.quote}
                image={continent.image}
              />
            </SwiperSlide>
          );
        })}
      </SwiperReact>
    </Flex>
  );
}
