import React from "react";
import { Link } from "react-router";
import PlaceImage from "./PlaceImage";
function Hotels({ trip }) {
  return (
    <div>
      <h2>Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${hotel.hotelName},${hotel.address}`}
            target="_blank"
          >
            <div className="hover:scale-110 transition-all cursor-pointer ">
              {/* Hotel content goes here */}
              <PlaceImage
                placeName={hotel.hotelName}
                className="w-full h-[200px] object-cover rounded-md"
              ></PlaceImage>
              <div className="my-2 flex flex-col ">
                <h2 className="font-medium">{hotel.hotelName}</h2>
                <h2 className="text-xs text-gray-500">📍{hotel.address}</h2>
                <h2 className="text-sm text-gray-800 font-semibold">
                  💸{hotel.price}
                </h2>
                <h2 className="text-sm">⭐{hotel.rating}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
