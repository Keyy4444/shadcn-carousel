"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CarouselElement } from "@/types/carouselElement";
import { cn } from "@/lib/utils";

export default function Slider({ data }: { data: CarouselElement[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("pointerDown", () => {
      setIsScrolling(true);
    });

    api.on("pointerUp", () => {
      setIsScrolling(false);
    });
  }, [api]);

  return (
    <Carousel opts={{ loop: true }} setApi={setApi}>
      <CarouselContent className={cn({ "justify-center": data.length === 1 })}>
        {data.map((el) => (
          <CarouselItem
            key={el.id}
            className={cn("flex justify-center items-center")}
          >
            <Image
              src={el.img}
              height={712}
              alt={`image number ${el.img}`}
              style={{
                objectFit: "cover",
                height: "100%",
                transform: isScrolling ? "scale(0.98)" : "scale(1)",
                transition: "transform 0.3s",
              }}
              className="rounded-[36px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {data && data.length !== 1 && <CarouselPrevious />}
      {data && data.length !== 1 && <CarouselNext />}
    </Carousel>
  );
}
