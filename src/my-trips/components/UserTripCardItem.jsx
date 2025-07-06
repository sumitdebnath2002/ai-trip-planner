import React from "react";
import { Link } from "react-router";
import PlaceImage from "@/view-trip/[tripId]/components/PlaceImage";
function UserTripCardItem({ trip }) {
  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className="hover:scale-105 transition-all">
        <PlaceImage
          placeName={trip?.userSelection?.location?.properties?.address_line1}
          className="w-full h-[220px] object-cover rounded-md"
        ></PlaceImage>
        <div>
          <h2 className="font-bold text-lg">
            {trip?.userSelection?.location?.properties?.address_line1}
          </h2>
          <h2 className="text-sm text-gray-500">
            {trip?.userSelection?.noOfDays} Days trip wtih{" "}
            {trip?.userSelection?.budget} Budget
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
