import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDUhTK8csxex97BNXOXX48PheHgOhZHp1I");

let chat = null;

async function initChat() {
  if (!chat) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    chat = await model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap Budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriotions and suggest itinerary with placeName, place Details, place Image URL, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format",
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: JSON.stringify({
                travelPlan: {
                  location: "Las Vegas",
                  duration: "3 Days",
                  travelerType: "Couple",
                  budget: "Cheap",
                  bestTimeToVisit:
                    "For the best deals and pleasant weather, plan your visit during the shoulder seasons (March-May or September-November) on a weekday (Tuesday-Thursday). Weekends and major holidays see a significant spike in hotel prices.",
                },
                hotels: [
                  {
                    hotelName: "Flamingo Las Vegas",
                    address: "3555 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
                    price: "Approx. $40 - $150 per night",
                    hotelImageUrl:
                      "https://images.unsplash.com/photo-1598104803525-4217f3a8b41f?q=80&w=1974&auto=format&fit=crop",
                    geoCoordinates: {
                      latitude: 36.1162,
                      longitude: -115.1706,
                    },
                    rating: 3.5,
                    description:
                      "A classic, budget-friendly option in a prime center-Strip location. The hotel features a vibrant, tropical theme with a fantastic pool area and a wildlife habitat with live flamingos, offering great value.",
                  },
                  {
                    hotelName: "The LINQ Hotel + Experience",
                    address: "3535 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
                    price: "Approx. $35 - $160 per night",
                    hotelImageUrl:
                      "https://images.unsplash.com/photo-1620662736148-2b05837b3b9b?q=80&w=1964&auto=format&fit=crop",
                    geoCoordinates: {
                      latitude: 36.118,
                      longitude: -115.171,
                    },
                    rating: 4.0,
                    description:
                      "Modern and energetic, The LINQ is targeted towards a younger crowd. Its location is excellent, right next to the High Roller observation wheel and the LINQ Promenade, which is full of shops and affordable dining.",
                  },
                  {
                    hotelName: "Excalibur Hotel & Casino",
                    address: "3850 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
                    price: "Approx. $30 - $120 per night",
                    hotelImageUrl:
                      "https://images.unsplash.com/photo-1605833443588-8a306a4630a9?q=80&w=1935&auto=format&fit=crop",
                    geoCoordinates: {
                      latitude: 36.1001,
                      longitude: -115.1754,
                    },
                    rating: 3.5,
                    description:
                      "A castle-themed hotel on the South end of the Strip. It is one of the most affordable major resorts and is connected by a free tram to Mandalay Bay and Luxor, making it easy to explore the neighboring properties.",
                  },
                ],
                itinerary: [
                  {
                    day: 1,
                    theme: "South Strip Exploration & Iconic Free Shows",
                    dailyPlan: [
                      {
                        time: "10:00 AM - 11:00 AM",
                        placeName: "Welcome to Fabulous Las Vegas Sign",
                        placeDetails:
                          "Start your trip with a classic photo op at the iconic sign. It's a must-do for first-time visitors. There's usually a line, but it moves quickly. It's free to visit, with parking available.",
                        placeImageUrl:
                          "https://images.unsplash.com/photo-1569931728574-a0d367178c78?q=80&w=1974&auto=format&fit=crop",
                        geoCoordinates: {
                          latitude: 36.082,
                          longitude: -115.1728,
                        },
                        ticketPricing: "Free",
                        rating: 4.6,
                        travelTime: "Varies (Bus or rideshare from hotel)",
                      },
                      {
                        time: "11:30 AM - 2:00 PM",
                        placeName: "Exploring South Strip Hotels",
                        placeDetails:
                          "Walk north from the sign and explore the unique themes of the southern hotels. Wander through the pyramid of the Luxor and the castle of the Excalibur. It's a great way to see the spectacle without spending money.",
                        placeImageUrl:
                          "https://images.unsplash.com/photo-1587971714322-24233a76377e?q=80&w=1935&auto=format&fit=crop",
                        geoCoordinates: {
                          latitude: 36.0954,
                          longitude: -115.1761,
                        },
                        ticketPricing: "Free",
                        rating: 4.4,
                        travelTime: "15-20 min walk from the Las Vegas Sign",
                      },
                      {
                        time: "2:00 PM - 5:00 PM",
                        placeName: "M&M's World & Coca-Cola Store",
                        placeDetails:
                          "Head into these multi-story retail experiences. They are free to enter and offer a fun, colorful break. You can create custom M&M's or sample sodas from around the world (sampling has a fee).",
                        placeImageUrl:
                          "https://prod.ccna.com/content/dam/coca-cola/us/en/brands/coca-cola/coke-store-las-vegas-2018-750.jpeg",
                        geoCoordinates: {
                          latitude: 36.1039,
                          longitude: -115.1735,
                        },
                        ticketPricing: "Free entry",
                        rating: 4.5,
                        travelTime: "10 min walk from Excalibur",
                      },
                      {
                        time: "5:30 PM - 7:00 PM",
                        placeName: "Bellagio Conservatory & Botanical Gardens",
                        placeDetails:
                          "Step into a breathtaking floral wonderland. The Bellagio's conservatory features elaborate displays that change with the seasons. It's a beautiful, romantic, and completely free attraction.",
                        placeImageUrl:
                          "https://images.unsplash.com/photo-1542795838-0c6a5a290e87?q=80&w=1974&auto=format&fit=crop",
                        geoCoordinates: {
                          latitude: 36.1132,
                          longitude: -115.1764,
                        },
                        ticketPricing: "Free",
                        rating: 4.8,
                        travelTime: "15 min walk from M&M's World",
                      },
                      {
                        time: "7:00 PM onwards",
                        placeName: "Fountains of Bellagio Show",
                        placeDetails:
                          "Find a spot along the rail and watch the spectacular fountain show. Water shoots hundreds of feet in the air, perfectly choreographed to music and light. Shows run every 30 minutes in the afternoon and every 15 minutes in the evening.",
                        placeImageUrl:
                          "https://images.unsplash.com/photo-1595861148-23239e039401?q=80&w=1974&auto=format&fit=crop",
                        geoCoordinates: {
                          latitude: 36.1126,
                          longitude: -115.1767,
                        },
                        ticketPricing: "Free",
                        rating: 4.9,
                        travelTime: "1 min walk from the Conservatory",
                      },
                    ],
                  },
                  {
                    day: 2,
                    theme: "Center Strip Wonders & Downtown Vibes",
                    dailyPlan: [
                      {
                        time: "10:00 AM - 1:00 PM",
                        placeName: "The Venetian Grand Canal Shoppes",
                        placeDetails:
                          "Be transported to Venice as you stroll through the Grand Canal Shoppes. Enjoy the painted ceilings, cobblestone walkways, and singing gondoliers on the indoor canal. It's free to walk around and window shop.",
                        placeImageUrl:
                          "https://images.unsplash.com/photo-1558985121-824b26089314?q=80&w=1974&auto=format&fit=crop",
                        geoCoordinates: {
                          latitude: 36.1215,
                          longitude: -115.1696,
                        },
                        ticketPricing: "Free to walk, Gondola rides are extra",
                        rating: 4.7,
                        travelTime:
                          "10-15 min walk from central hotels like Flamingo/LINQ",
                      },
                      {
                        time: "1:00 PM - 2:00 PM",
                        placeName: "Flamingo Wildlife Habitat",
                        placeDetails:
                          "Take a peaceful break from the Strip's chaos at this serene habitat located at the Flamingo hotel. It's home to Chilean flamingos, pelicans, swans, ducks, and turtles. A great free activity.",
                        placeImageUrl:
                          "https://media.cntraveler.com/photos/5a7a13d7193297316a49fa7e/16:9/w_2560,c_limit/Flamingo-Las-Vegas__2018_flamingos-and-waterfall.jpg",
                        geoCoordinates: {
                          latitude: 36.1169,
                          longitude: -115.1704,
                        },
                        ticketPricing: "Free",
                        rating: 4.6,
                        travelTime: "10 min walk from The Venetian",
                      },
                      {
                        time: "4:00 PM - 5:00 PM",
                        placeName: "Travel to Downtown Las Vegas",
                        placeDetails:
                          "Catch the 'Deuce' bus from a stop on the Strip. It's a double-decker bus that provides an affordable and scenic way to get to Downtown/Fremont Street. A 24-hour pass is usually the best value.",
                        placeImageUrl:
                          "https://media.lasvegassun.com/media/img/photos/2012/10/22/1023_sun_deuce_03_t653.jpg?214bc4f9d9bd7c08c7d0f6599bb3328892c94065",
                        geoCoordinates: {
                          latitude: 36.1147,
                          longitude: -115.1728,
                        },
                        ticketPricing: "Approx. $8 for a 24-hour pass",
                        rating: 4.0,
                        travelTime: "30-45 min bus ride",
                      },
                      {
                        time: "5:00 PM onwards",
                        placeName: "Fremont Street Experience",
                        placeDetails:
                          "Welcome to 'Old Vegas'! This pedestrian mall is famous for its Viva Vision light shows on the world's largest video screen, free concerts, and vibrant street performers. The energy here is electric and completely different from the Strip.",
                        placeImageUrl:
                          "https://images.unsplash.com/photo-1518544923919-613d8095b6c3?q=80&w=2070&auto=format&fit=crop",
                        geoCoordinates: {
                          latitude: 36.1706,
                          longitude: -115.1437,
                        },
                        ticketPricing:
                          "Free (Viva Vision show & street performances)",
                        rating: 4.6,
                        travelTime: "Arrive at destination",
                      },
                    ],
                  },
                  {
                    day: 3,
                    theme: "Desert Art & Relaxation",
                    dailyPlan: [
                      {
                        time: "9:30 AM - 12:00 PM",
                        placeName: "Seven Magic Mountains",
                        placeDetails:
                          "This large-scale public art installation features seven towers of colorful, stacked boulders standing over 30 feet high in the desert. It's a surreal and highly photogenic spot. Requires a rideshare or car, so factor in the cost.",
                        placeImageUrl:
                          "https://images.unsplash.com/photo-1598134493339-4b6338b24855?q=80&w=1932&auto=format&fit=crop",
                        geoCoordinates: {
                          latitude: 35.839,
                          longitude: -115.2731,
                        },
                        ticketPricing:
                          "Free entry (transportation cost varies)",
                        rating: 4.5,
                        travelTime: "25-30 min drive from the South Strip",
                      },
                      {
                        time: "1:00 PM - 2:00 PM",
                        placeName: "Cheap Eats & Local Favorites",
                        placeDetails:
                          "For lunch, try an iconic Las Vegas cheap eat. In-N-Out Burger (near the LINQ) is a classic choice. Alternatively, Tacos El Gordo offers amazing and affordable street tacos.",
                        placeImageUrl:
                          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
                        geoCoordinates: {
                          latitude: 36.1102,
                          longitude: -115.1718,
                        },
                        ticketPricing: "Approx. $10 - $15 per person",
                        rating: 4.7,
                        travelTime:
                          "25-30 min drive back from Seven Magic Mountains",
                      },
                      {
                        time: "2:00 PM - 5:00 PM",
                        placeName: "Hotel Pool Relaxation",
                        placeDetails:
                          "Spend your last afternoon soaking up the sun and relaxing by your hotel pool. It's a free amenity for guests and a perfect way to unwind after a few days of walking. Enjoy a drink and recharge.",
                        placeImageUrl:
                          "https://images.unsplash.com/photo-1582552938357-6c783c14151c?q=80&w=1974&auto=format&fit=crop",
                        geoCoordinates: {
                          latitude: 36.1162,
                          longitude: -115.1706,
                        },
                        ticketPricing: "Free for hotel guests",
                        rating: 4.2,
                        travelTime: "Varies (at your hotel)",
                      },
                      {
                        time: "6:00 PM onwards",
                        placeName: "Mirage Volcano",
                        placeDetails:
                          "For your final evening, catch another spectacular free show. The Mirage Volcano erupts with fire, smoke, and music. Check the schedule as showtimes are limited (typically 7 PM - 11 PM, hourly).",
                        placeImageUrl:
                          "https://images.unsplash.com/photo-1620662736140-5e884b2c1743?q=80&w=1964&auto=format&fit=crop",
                        geoCoordinates: {
                          latitude: 36.1213,
                          longitude: -115.1741,
                        },
                        ticketPricing: "Free",
                        rating: 4.6,
                        travelTime: "10-15 min walk from central hotels",
                      },

                      /* keep the rest of the itinerary as it is — omitted here for brevity */
                    ],
                  },
                ],
              }),
            },
          ],
        },
      ],
    });
  }

  return chat;
}

export async function sendMessage(prompt) {
  const chat = await initChat();
  const result = await chat.sendMessage(prompt);
  const response = await result.response;
  return await response.text();
}
