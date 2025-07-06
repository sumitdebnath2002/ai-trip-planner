// src/hooks/usePlaceImage.js
import { useEffect, useState } from "react";
import axios from "axios";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNPLASH_ACCESS_KEY; // Replace this

export default function usePlaceImage(placeName) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (!placeName) return;

    const fetchFromUnsplash = async () => {
      try {
        const res = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            query: placeName,
            per_page: 1,
          },
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        });

        const result = res.data.results?.[0];
        if (result?.urls?.regular) {
          setImageUrl(result.urls.regular);
        } else {
          fetchFromWikipedia(); // fallback
        }
      } catch (err) {
        console.warn("Unsplash fetch failed, trying Wikipedia...", err);
        fetchFromWikipedia(); // fallback
      }
    };

    const fetchFromWikipedia = async () => {
      try {
        const wikiRes = await axios.get(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
            placeName
          )}`
        );

        const thumbnail = wikiRes.data.thumbnail?.source;
        if (thumbnail) {
          setImageUrl(thumbnail);
        } else {
          setImageUrl(null); // no fallback image
        }
      } catch (err) {
        console.error("Wikipedia fetch failed", err);
        setImageUrl(null);
      }
    };

    fetchFromUnsplash();
  }, [placeName]);

  return imageUrl;
}
