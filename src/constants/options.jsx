export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in Tandem",
    icon: "🚲",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventure",
    icon: "🚗",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill seekes",
    icon: "⛵",
    people: "5+ people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💴",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep costs on average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about costs",
    icon: "👜",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location} for {totalDays} Days for {travel} with a {budget} budget. Give me a Hotels Options List with Hotel Name, Hotel Address, Price, Hotel Image URL, Geo Coordinates, Ratings , Descriptions and suggest itinerary with Place Name, Place Details, Place Image URL, Geo Coordinates, Ticket Pricing, Ratings, Time to Travel to each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";
