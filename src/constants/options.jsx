export const selectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole travels in exploration",
    icon: "✨",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travels in tandem",
    icon: "💑",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "👨‍👩‍👧",
    people: "3+ People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "⛺",
    people: "5 to 10 People",
  },
];

export const selectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💰",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💵",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💎",
  },
];

export const AI_PROMPT = `Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with iteneraries planned for {totalDays} days with each day plan with best time to visit in json format, try to give 4 hotels atleast only return json response and nothing else, donot include any comment or unnecessary things inside the json as im directly putting it to json.parse`;
