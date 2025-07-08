import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import InfoSection from "./components/InfoSection";
import { toast } from "sonner"; // Don't forget to import toast
import Hotel from "./components/Hotels";
import PlacesToVisit from "./components/PlacesToVisit";
import Footer from "./components/Footer";
export default function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null); // Fixed useState destructuring

  useEffect(() => {
    tripId && getTripData();
  }, [tripId]);

  const getTripData = async () => {
    const docRef = doc(db, "AiTrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document:", docSnap.data());
      setTrip(docSnap.data());
      console.log(trip.userSelection.location.properties);
    } else {
      console.log("No such document");
      toast("No such trip found");
    }
  };

  return (
    <div className="p-10 md:px-28 lg:px-44 xl:px-56">
      {trip ? (
        <InfoSection trip={trip} />
      ) : (
        <div className="text-center py-10">
          <p>Loading trip data...</p>
        </div>
      )}
      {/* Recommended Hotels */}
      <Hotel trip={trip}></Hotel>
      {/* Daily Plan */}
      <PlacesToVisit trip={trip}></PlacesToVisit>
    </div>
  );
}
