import React from "react";
import PlaceCardItem from "./PlaceCardItem";
function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to visit</h2>
      <div>
        {trip?.tripData?.itinerary.map((item, index) => (
          <div key={index} className="mt-5">
            <h2 className="font-medium text-lg mb-2">
              Day {item.day}: {item.theme}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item?.dailyPlan.map((place, idx) => (
                <div key={idx} className="">
                  <h2 className="font-medium text-sm text-orange-600">
                    {place.time}
                  </h2>
                  <PlaceCardItem place={place}></PlaceCardItem>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
