import React from "react";
import { Button } from "../button";
import { Link } from "react-router";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 md:px-0">
      <div className="flex flex-col items-center max-w-4xl gap-6">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <h1 className="font-extrabold text-4xl md:text-5xl text-center">
            <span className="text-[#f56551]">
              Discover Your Next Adventure with AI:
            </span>{" "}
            Personalized Itineraries at Your Fingertips
          </h1>
          <p className="text-lg md:text-xl text-gray-500 text-center max-w-2xl">
            Your personal trip planner and travel curator, creating custom trips
          </p>
        </div>

        {/* CTA Button */}
        <Link to={"/create-trip"} className="mt-4">
          <Button className="px-8 py-3 text-lg font-semibold transition-all hover:scale-105">
            Get started, It's Free
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="mt-4 w-full max-w-6xl border-rounded-xl mb-4">
        <img
          src="/landing3.png"
          alt="Travel Adventure"
          className="w-full object-contain scale-105"
        />
      </div>
    </div>
  );
}

export default Hero;
