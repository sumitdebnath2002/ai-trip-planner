import React, { useState, useEffect } from "react";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AI_PROMPT,
  selectBudgetOptions,
  selectTravelList,
} from "@/constants/options";
import { sendMessage } from "@/service/aiModel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState();
  const [openDialogue, setOpenDialogue] = useState(false);
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("Form Data Updated:", formData);
  }, [formData]);

  const handlePlaceSelect = (value) => {
    setPlace(value);
    handleInputChange("location", value);
  };

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialogue(true);
      return;
    }

    const { location, budget, traveler, noOfDays } = formData || {};
    const days = parseInt(noOfDays || 0, 10);
    if (!location || !budget || !traveler) {
      toast("Please fill all the details");
      return;
    }
    if (days > 5) {
      toast("Sorry! Currently we only support trips up to 5 days.");
      return; // Ensure this exits the function
    }
    if (days <= 0) {
      toast("Please enter a valid number of days.");
      return;
    }

    const locationString =
      location?.properties?.formatted ||
      location?.properties?.address_line1 ||
      location?.properties?.city ||
      "your destination";

    const FINAL_PROMPT = AI_PROMPT.replace("{location}", locationString)
      .replace("{totalDays}", formData?.noOfDays) // Changed from {noOfDays}
      .replace("{budget}", formData?.budget)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget); // Fixed typo from {trveler}

    const result = await sendMessage(FINAL_PROMPT);
    console.log("AI Response:", result);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preference🌴🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your prefernces.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <GeoapifyContext apiKey={import.meta.env.VITE_GEOAPIFY_API_KEY}>
            <GeoapifyGeocoderAutocomplete
              placeholder="Enter your destination"
              filterByCountryCode={["in"]} // Changed from countryCodes
              biasByLocation="ip" // Or use specific coordinates
              placeSelect={handlePlaceSelect}
              onSuggestionsError={(error) =>
                console.error("Geocoder error:", error)
              }
            />
          </GeoapifyContext>
        </div>
        <div className="mb-10">
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder="Ex.3"
            type="number"
            value={formData?.noOfDays || ""}
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl my-3 font-medium">What is your Budget? </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {selectBudgetOptions.map((item, index) => {
            return (
              <div
                key={index}
                onClick={(e) => handleInputChange("budget", item.title)}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg
                    ${
                      formData?.budget === item.title &&
                      "shadow-lg border-black"
                    }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-600">{item.desc}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-xl my-3 font-medium">
          Who do you plan to travel with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {selectTravelList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleInputChange("traveler", item.people)}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg
                    ${
                      formData?.traveler === item.people &&
                      "shadow-lg border-black"
                    }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-600">{item.desc}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button onClick={OnGenerateTrip}>Generate Trip</Button>
      </div>
      <Dialog open={openDialogue}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg"></img>
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <p>Sign in to the App with Google Authentication securly</p>
              <Button className="w-full mt-5 flex gap-4 items-center">
                <FcGoogle className="h-7 w-7" />
                Sign In with Google{" "}
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;

// {
//   "type": "Feature",
//   "bbox": [-115.4242845, 36.129554, -115.062066, 36.3808406],
//   "geometry": {
//     "type": "Point",
//     "coordinates": [-115.1483538, 36.1672719]
//   },
//   "properties": {
//     "address_line1": "Las Vegas, NV",
//     "address_line2": "United States of America",
//     "category": "administrative",
//     "city": "Las Vegas",
//     "country": "United States",
//     "country_code": "us",
//     "county": "Clark County",
//     "datasource": {
//       "sourcename": "openstreetmap",
//       "attribution": "© OpenStreetMap contributors",
//       "license": "Open Database License",
//       "url": "https://www.openstreetmap.org/copyright"
//     },
//     "formatted": "Las Vegas, NV, United States of America",
//     "iso3166_2": "US-NV",
//     "lat": 36.1672719,
//     "lon": -115.1483538,
//     "place_id": "5130cfefa07ec95cc0591805662a69154240f00101f9018598020000000000c00208",
//     "plus_code": "85865V82+WM",
//     "plus_code_short": "82+WM Las Vegas, Clark County, United States",
//     "rank": {
//       "importance": 0.7126172021753994,
//       "confidence": 1,
//       "confidence_city_level": 1,
//       "match_type": "full_match"
//     },
//     "result_type": "city",
//     "state": "Nevada",
//     "state_code": "NV",
//     "timezone": {
//       "name": "America/Los_Angeles",
//       "offset_STD": "-08:00",
//       "offset_STD_seconds": -28800,
//       "offset_DST": "-07:00",
//       "offset_DST_seconds": -25200
//     }
//   }
// }
