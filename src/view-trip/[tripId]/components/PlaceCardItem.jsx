import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import PlaceImage from "./PlaceImage";
function PlaceCardItem({ place }) {
  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${place.placeName}`}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        {/* <img
          src="/newYork.jpg"
          className="w-[130px] h-[130px] rounded-xl"
        ></img> */}
        <PlaceImage
          placeName={place.placeName}
          className="w-[130px] h-[130px] object-cover rounded-xl flex-shrink-0"
        ></PlaceImage>
        <div>
          <h2 className="font-bold text-lg ">{place.placeName}</h2>
          <p className="text-sm text-gray-400">{place.placeDetails}</p>
          <p className="mt-2">🕙 {place.time}</p>
          <Button size="sm">
            <FaMapLocationDot />
          </Button>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
