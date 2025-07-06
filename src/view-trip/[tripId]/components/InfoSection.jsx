import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosSend } from "react-icons/io";
import PlaceImage from "./PlaceImage";
function InfoSection(tripInfo) {
  // console.log(tripInfo?.userSelection?.location?.properties?.formatted);
  const placeName =
    tripInfo?.trip?.userSelection?.location?.properties?.address_line1;
  return (
    <div>
      <PlaceImage
        className="h-[300px] w-[full] object-cover rouded-xl"
        placeName={placeName}
      ></PlaceImage>
      <div className="flex justify-between items-center">
        <div className="my-5 flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {tripInfo?.trip?.userSelection?.location?.properties?.address_line1}
          </h2>
          <div className="flex gap-5 ">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              📅{tripInfo?.trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              💸{tripInfo?.trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              🥂{tripInfo?.trip?.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
