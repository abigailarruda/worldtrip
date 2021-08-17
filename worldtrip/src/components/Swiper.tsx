/* eslint-disable @next/next/no-img-element */
import { Flex, Heading, Text } from "@chakra-ui/react";

import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { SwiperItem } from "./SwiperItem";

SwiperCore.use([Navigation, Pagination]);

export function Swiper() {
  return (
    <Flex margin="0 auto" maxWidth="1120px" height="400px">
      <SwiperReact navigation={true} pagination={true} className="mySwiper">
        <SwiperSlide>
          <SwiperItem
            continent="Europa"
            description="O continente mais antigo."
            image="https://i.ibb.co/FhkmrGV/europe.png"
          />
        </SwiperSlide>
      </SwiperReact>
    </Flex>
  );
}
