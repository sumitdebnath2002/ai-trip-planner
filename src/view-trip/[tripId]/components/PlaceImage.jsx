// src/components/PlaceImage.jsx
import React from "react";
import usePlaceImage from "../../../hooks/usePlaceImage";

export default function PlaceImage({ placeName, className = "" }) {
  const imageUrl = usePlaceImage(placeName);

  if (!placeName) return null;

  return (
    <div className={className}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={placeName}
          className="w-full h-full object-cover rounded shadow"
        />
      ) : (
        <div className="text-gray-500 text-sm">
          No image available for {placeName}
        </div>
      )}
    </div>
  );
}
