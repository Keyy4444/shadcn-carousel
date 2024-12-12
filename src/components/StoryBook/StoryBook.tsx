import React from "react";
import Slider from "../Slider/Slider";
import {
  arrayWithMultipleElements,
  arrayWithOneElement,
} from "@/helpers/mockCarouselData";

export default function StoryBook() {
  return (
    <div className="flex flex-col gap-48">
      <div className="flex flex-col gap-8">
        <h4>Multiple slides</h4>
        <Slider data={arrayWithMultipleElements} />
      </div>
      <div className="flex flex-col gap-8">
        <h4>Single slide</h4>
        <Slider data={arrayWithOneElement} />
      </div>
    </div>
  );
}
