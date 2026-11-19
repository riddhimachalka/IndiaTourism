/* ==================== INDIA TOURISM - MAIN JAVASCRIPT ==================== */

// ==================== DATA ====================
const destinations = [
    {
        id: 1, name: "Taj Mahal & Agra", region: "north", category: "heritage",
        state: "Uttar Pradesh", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
        desc: "Witness the eternal symbol of love, one of the Seven Wonders of the World. The Mughal masterpiece built by Emperor Shah Jahan.",
        price: 12999, rating: 4.9, badge: "UNESCO Site",
        tags: ["Heritage", "Romance", "Architecture"],
        bestTime: "Oct - Feb", highlights: ["Taj Mahal Sunrise", "Agra Fort", "Mehtab Bagh", "Fatehpur Sikri"]
    },
    {
        id: 2, name: "Jaipur - Pink City", region: "north", category: "heritage",
        state: "Rajasthan", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
        desc: "The vibrant capital of Rajasthan, known for its majestic forts, palaces, and the iconic pink-walled old city.",
        price: 15999, rating: 4.8, badge: "Popular",
        tags: ["Heritage", "Culture", "Shopping"],
        bestTime: "Oct - Mar", highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar"]
    },
    {
        id: 3, name: "Kerala Backwaters", region: "south", category: "nature",
        state: "Kerala", img: "https://images.unsplash.com/photo-1572002265188-173c1a2f6699?auto=format&fit=crop&w=1200&q=80",
        desc: "Glide through serene backwaters on traditional houseboats. Experience God's Own Country with lush greenery and Ayurveda.",
        price: 18999, rating: 4.9, badge: "Top Rated",
        tags: ["Nature", "Relaxation", "Ayurveda"],
        bestTime: "Sep - Mar", highlights: ["Alleppey Houseboat", "Munnar Tea Gardens", "Kovalam Beach", "Thekkady Wildlife"]
    },
    {
        id: 4, name: "Varanasi", region: "north", category: "heritage",
        state: "Uttar Pradesh", img: "https://images.unsplash.com/photo-1706152312959-2565f48c62db?auto=format&fit=crop&w=1200&q=80",
        desc: "The spiritual capital of India. Witness the mesmerizing Ganga Aarti and explore the ancient ghats of the world's oldest living city.",
        price: 9999, rating: 4.7, badge: "Spiritual",
        tags: ["Spiritual", "Heritage", "Culture"],
        bestTime: "Oct - Mar", highlights: ["Ganga Aarti", "Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath"]
    },
    {
        id: 5, name: "Goa - Beach Paradise", region: "west", category: "beach",
        state: "Goa", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
        desc: "India's smallest state with the biggest reputation. Golden beaches, Portuguese heritage, vibrant nightlife and seafood.",
        price: 11999, rating: 4.6, badge: "Beach",
        tags: ["Beach", "Nightlife", "Portuguese Heritage"],
        bestTime: "Nov - Feb", highlights: ["Baga Beach", "Old Goa Churches", "Dudhsagar Falls", "Fontainhas Heritage"]
    },
    {
        id: 6, name: "Ladakh", region: "north", category: "nature",
        state: "Jammu & Kashmir", img: "https://images.unsplash.com/photo-1674187219704-be3cd35a80b7?auto=format&fit=crop&w=1200&q=80",
        desc: "The land of high passes. Stunning landscapes, ancient monasteries, and thrilling mountain roads through the Himalayas.",
        price: 25999, rating: 4.9, badge: "Adventure",
        tags: ["Adventure", "Mountains", "Buddhism"],
        bestTime: "Jun - Sep", highlights: ["Pangong Lake", "Nubra Valley", "Khardung La", "Hemis Monastery"]
    },
    {
        id: 7, name: "Rishikesh & Haridwar", region: "north", category: "heritage",
        state: "Uttarakhand", img: "https://images.unsplash.com/photo-1580629905303-faaa05e45c5d?w=600&q=80",
        desc: "The Yoga Capital of the World. Sacred Ganges, adventure sports, and spiritual awakening in the foothills of the Himalayas.",
        price: 8999, rating: 4.7, badge: "Spiritual",
        tags: ["Spiritual", "Adventure", "Yoga"],
        bestTime: "Sep - Nov", highlights: ["Laxman Jhula", "Ram Jhula", "Ganga Aarti", "White Water Rafting"]
    },
    {
        id: 8, name: "Darjeeling", region: "east", category: "nature",
        state: "West Bengal", img: "https://images.unsplash.com/photo-1544624633-07fdde4a2233?w=600&q=80",
        desc: "Queen of the Himalayan Hill Stations. Famous for tea gardens, toy train, and stunning Kanchenjunga sunrise views.",
        price: 14999, rating: 4.6, badge: "Hill Station",
        tags: ["Hill Station", "Tea Gardens", "Toy Train"],
        bestTime: "Mar - May", highlights: ["Tiger Hill Sunrise", "Batasia Loop", "Tea Plantations", "Darjeeling Himalayan Railway"]
    },
    {
        id: 9, name: "Meghalaya", region: "northeast", category: "nature",
        state: "Meghalaya", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        desc: "The abode of clouds. Living root bridges, stunning waterfalls, and the wettest place on earth - Cherrapunji.",
        price: 19999, rating: 4.8, badge: "Hidden Gem",
        tags: ["Nature", "Adventure", "Offbeat"],
        bestTime: "Oct - May", highlights: ["Living Root Bridges", "Dawki River", "Nohkalikai Falls", "Mawlynnong Village"]
    },
    {
        id: 10, name: "Hampi", region: "south", category: "heritage",
        state: "Karnataka", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
        desc: "UNESCO World Heritage Site with stunning ruins of the Vijayanagara Empire. Boulders, temples, and timeless beauty.",
        price: 10999, rating: 4.7, badge: "UNESCO Site",
        tags: ["Heritage", "Ruins", "Photography"],
        bestTime: "Oct - Feb", highlights: ["Virupaksha Temple", "Hampi Bazaar", "Vittala Temple", "Coracle Ride"]
    },
    {
        id: 11, name: "Manali & Shimla", region: "north", category: "nature",
        state: "Himachal Pradesh", img: "https://images.unsplash.com/photo-1597040663372-80a302b9e1dd?w=600&q=80",
        desc: "The crown jewels of Himachal Pradesh. Snow-capped mountains, pine forests, adventure sports and colonial charm.",
        price: 16999, rating: 4.7, badge: "Hill Station",
        tags: ["Hill Station", "Adventure", "Snow"],
        bestTime: "Mar - Jun / Dec - Jan", highlights: ["Rohtang Pass", "Solang Valley", "Mall Road", "Hadimba Temple"]
    },
    {
        id: 12, name: "Udaipur - City of Lakes", region: "north", category: "heritage",
        state: "Rajasthan", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
        desc: "The Venice of the East. Romantic lake palaces, ornate havelis, and the charm of royal Rajasthan.",
        price: 17999, rating: 4.8, badge: "Romantic",
        tags: ["Heritage", "Romance", "Lakes"],
        bestTime: "Sep - Mar", highlights: ["City Palace", "Lake Pichola", "Jag Mandir", "Saheliyon Ki Bari"]
    }
];

const activities = [
    { icon: "fas fa-torii-gate", name: "Temple Visits", desc: "Sacred pilgrimages" },
    { icon: "fas fa-campground", name: "Wildlife Safari", desc: "Tiger reserves & national parks" },
    { icon: "fas fa-hiking", name: "Trekking", desc: "Himalayan & Western Ghats trails" },
    { icon: "fas fa-ship", name: "Houseboat Cruise", desc: "Kerala backwaters experience" },
    { icon: "fas fa-hot-tub", name: "Ayurveda & Spa", desc: "Traditional healing therapies" },
    { icon: "fas fa-camera-retro", name: "Photography Tours", desc: "Capture India's beauty" },
    { icon: "fas fa-bicycle", name: "Cycling Tours", desc: "Explore cities on two wheels" },
    { icon: "fas fa-utensils", name: "Cooking Classes", desc: "Learn Indian cuisine" },
    { icon: "fas fa-water", name: "Rafting & Water Sports", desc: "Rishikesh & coastal adventures" },
    { icon: "fas fa-shopping-bag", name: "Bazaar Shopping", desc: "Textiles, spices, handicrafts" },
    { icon: "fas fa-tv", name: "Sound & Light Shows", desc: "Fort & monument stories" },
    { icon: "fas fa-fan", name: "Desert Safari", desc: "Camel rides in Thar Desert" }
];

const heritageSites = [
    { name: "Taj Mahal", type: "UNESCO World Heritage", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&q=80", desc: "The crown of Indian architecture and eternal symbol of love." },
    { name: "Red Fort, Delhi", type: "UNESCO World Heritage", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=500&q=80", desc: "Mughal power symbol and India's Independence Day venue." },
    { name: "Qutub Minar", type: "UNESCO World Heritage", img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500&q=80", desc: "73-meter tall victory tower, the tallest brick minaret in the world." },
    { name: "Hawa Mahal", type: "Rajput Architecture", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&q=80", desc: "Palace of Winds with 953 windows for royal women to observe street life." },
    { name: "Konark Sun Temple", type: "UNESCO World Heritage", img: "https://images.unsplash.com/photo-1544624633-07fdde4a2233?w=500&q=80", desc: "13th-century temple shaped as a colossal chariot for the Sun God." },
    { name: "Khajuraho Temples", type: "UNESCO World Heritage", img: "https://images.unsplash.com/photo-1599661046289-d3da3b5e6c6a?w=500&q=80", desc: "Medieval Hindu and Jain temples famous for intricate sculptures." },
    { name: "Sanchi Stupa", type: "UNESCO World Heritage", img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/The_Great_Sanchi_Stupa.jpg", attribution: "Photo: Wikimedia Commons (CC BY-SA 4.0)", desc: "Ancient Buddhist monument, one of the oldest stone structures in India." },
    { name: "Mysore Palace", type: "Royal Heritage", img: "https://images.unsplash.com/photo-1657856855186-7cf4909a4f78?auto=format&fit=crop&w=1200&q=80", desc: "Magnificent Indo-Saracenic palace, the second most visited monument in India." }
];

const stays = [
    { name: "Taj Lake Palace", type: "Luxury Hotel", location: "Udaipur, Rajasthan", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80", price: 28999, amenities: ["Pool", "Spa", "Lake View", "Restaurant"], rating: 4.9 },
    { name: "Kumarakom Lake Resort", type: "Heritage Resort", location: "Kumarakom, Kerala", img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&q=80", price: 18999, amenities: ["Ayurveda", "Pool", "Houseboat", "Spa"], rating: 4.8 },
    { name: "Moustache Hostel", type: "Hostel", location: "Jaipur, Rajasthan", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&q=80", price: 899, amenities: ["WiFi", "Common Kitchen", "Rooftop"], rating: 4.5 },
    { name: "Coconut Lagoon", type: "Eco Resort", location: "Kerala Backwaters", img: "https://images.unsplash.com/photo-1590050752117-298957c32a53?w=500&q=80", price: 14999, amenities: ["Ayurveda", "Backwater View", "Organic Food"], rating: 4.7 },
    { name: "Zostel Delhi", type: "Hostel", location: "New Delhi", img: "https://images.unsplash.com/photo-1582719478192-6d0e0a9c8b2c?w=500&q=80", price: 699, amenities: ["WiFi", "Cafe", "AC Rooms"], rating: 4.3 },
    { name: "Heritage Haveli", type: "Heritage Stay", location: "Jaisalmer, Rajasthan", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&q=80", price: 5999, amenities: ["Rooftop Dining", "Desert View", "Cultural Night"], rating: 4.6 }
];

const transportOptions = [
    { icon: "fas fa-plane", name: "Flights", desc: "Domestic & international", price: "From ₹2,999" },
    { icon: "fas fa-train", name: "Trains", desc: "IRCTC rail bookings", price: "From ₹249" },
    { icon: "fas fa-bus", name: "Buses", desc: "AC & Volvo options", price: "From ₹199" },
    { icon: "fas fa-car", name: "Cabs", desc: "Sedan & SUV available", price: "From ₹8/km" },
    { icon: "fas fa-motorcycle", name: "Bike Rental", desc: "Self-drive bikes", price: "From ₹499/day" },
    { icon: "fas fa-ship", name: "Ferries", desc: "Island & river ferries", price: "From ₹149" }
];

const restaurants = [
    { name: "Karim's", cuisine: "Mughlai Cuisine", location: "Jama Masjid, Delhi", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80", rating: 4.6, priceRange: "₹₹" },
    { name: "Thalassery Restaurant", cuisine: "Kerala Cuisine", location: "Fort Kochi, Kerala", img: "https://images.unsplash.com/photo-1634503520620-a588887a8c64?auto=format&fit=crop&w=800&q=80", rating: 4.5, priceRange: "₹₹" },
    { name: "Chokhi Dhani", cuisine: "Rajasthani Thali", location: "Jaipur, Rajasthan", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80", rating: 4.7, priceRange: "₹₹₹" },
    { name: "Bukhara", cuisine: "North Indian / Tandoor", location: "ITC Maurya, Delhi", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", rating: 4.8, priceRange: "₹₹₹₹" },
    { name: "Punjab Grill", cuisine: "Punjabi Cuisine", location: "Multiple Cities", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80", rating: 4.4, priceRange: "₹₹₹" },
    { name: "Saravana Bhavan", cuisine: "South Indian", location: "Multiple Cities", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80", rating: 4.5, priceRange: "₹₹" }
];

const packages = [
    {
        id: 1, name: "Golden Triangle Tour", route: "Delhi → Agra → Jaipur",
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
        duration: "5 Days / 4 Nights", price: 24999, type: "cultural",
        badge: "Bestseller", category: "premium",
        includes: ["Hotel", "Breakfast", "AC Transport", "Guide", "Monument Entry"]
    },
    {
        id: 2, name: "Kerala Backwater Experience", route: "Kochi → Alleppey → Munnar",
        img: "https://images.unsplash.com/photo-1590050752117-298957c32a53?w=600&q=80",
        duration: "6 Days / 5 Nights", price: 32999, type: "cultural",
        badge: "Popular", category: "premium",
        includes: ["Houseboat", "Resort Stay", "All Meals", "Sightseeing", "Ayurveda"]
    },
    {
        id: 3, name: "Rajasthan Royal Heritage", route: "Jaipur → Udaipur → Jodhpur → Jaisalmer",
        img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
        duration: "8 Days / 7 Nights", price: 45999, type: "cultural",
        badge: "Luxury", category: "luxury",
        includes: ["Heritage Hotels", "All Meals", "Desert Safari", "Cultural Shows", "Guide"]
    },
    {
        id: 4, name: "Ladakh Adventure", route: "Leh → Nubra → Pangong → Leh",
        img: "https://images.unsplash.com/photo-1674187219704-be3cd35a80b7?auto=format&fit=crop&w=600&q=80",
        duration: "7 Days / 6 Nights", price: 38999, type: "adventure",
        badge: "Adventure", category: "premium",
        includes: ["Hotel", "Innova", "Permits", "Breakfast", "First Aid"]
    },
    {
        id: 5, name: "Spiritual India", route: "Varanasi → Rishikesh → Haridwar → Amritsar",
        img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600&q=80",
        duration: "6 Days / 5 Nights", price: 22999, type: "cultural",
        category: "budget",
        includes: ["Hotel", "Transport", "Breakfast", "Guide", "Ganga Aarti VIP"]
    },
    {
        id: 6, name: "Goa Beach Vibes", route: "North Goa → South Goa → Old Goa",
        img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
        duration: "4 Days / 3 Nights", price: 15999, type: "cultural",
        badge: "Budget Friendly", category: "budget",
        includes: ["Beach Resort", "Breakfast", "Scooter", "Water Sports", "Nightlife Tour"]
    },
    {
        id: 7, name: "Northeast Explorer", route: "Guwahati → Shillong → Cherrapunji → Dawki",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        duration: "7 Days / 6 Nights", price: 29999, type: "adventure",
        badge: "Offbeat", category: "premium",
        includes: ["Hotel", "SUV Transport", "All Meals", "Guide", "Camping"]
    },
    {
        id: 8, name: "South India Temple Trail", route: "Chennai → Madurai → Pondicherry → Hampi",
        img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
        duration: "8 Days / 7 Nights", price: 27999, type: "cultural",
        category: "budget",
        includes: ["Hotel", "AC Transport", "Breakfast", "Guide", "Temple Tours"]
    }
];

const galleryItems = [
    { img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", title: "Taj Mahal at Sunrise", category: "monuments" },
    { img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80", title: "Hawa Mahal, Jaipur", category: "monuments" },
    { img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80", title: "Varanasi Ghats", category: "culture" },
    { img: "https://images.unsplash.com/photo-1590050752117-298957c32a53?w=800&q=80", title: "Kerala Backwaters", category: "nature" },
    { img: "https://images.unsplash.com/photo-1597040663372-80a302b9e1dd?w=800&q=80", title: "Ladakh Landscape", category: "nature" },
    { img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80", title: "Goa Beach Sunset", category: "nature" },
    { img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80", title: "Indian Street Food", category: "food" },
    { img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", title: "Meghalaya Living Bridges", category: "nature" },
    { img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", title: "Qutub Minar", category: "monuments" },
    { img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80", title: "Red Fort, Delhi", category: "monuments" },
    { img: "https://images.unsplash.com/photo-1580629905303-faaa05e45c5d?w=800&q=80", title: "Rishikesh Aarti", category: "culture" },
    { img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80", title: "Hampi Ruins", category: "monuments" },
    { img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", title: "Heritage Hotel", category: "culture" },
    { img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80", title: "Udaipur Lake Palace", category: "monuments" },
    { img: "https://images.unsplash.com/photo-1544624633-07fdde4a2233?w=800&q=80", title: "Darjeeling Tea Garden", category: "nature" }
];

const searchDatabase = [
    ...destinations.map(d => ({ text: d.name + ' ' + d.state + ' ' + d.tags.join(' '), type: 'destinations', name: d.name, sub: d.state, icon: 'fas fa-map-marker-alt' })),
    ...stays.map(s => ({ text: s.name + ' ' + s.location + ' ' + s.type, type: 'hotels', name: s.name, sub: s.location, icon: 'fas fa-bed' })),
    ...transportOptions.map(t => ({ text: t.name + ' ' + t.desc, type: 'transport', name: t.name, sub: t.desc, icon: t.icon })),
    ...activities.map(a => ({ text: a.name + ' ' + a.desc, type: 'activities', name: a.name, sub: a.desc, icon: a.icon })),
    ...heritageSites.map(h => ({ text: h.name + ' ' + h.type, type: 'heritage', name: h.name, sub: h.type, icon: 'fas fa-landmark' })),
    ...restaurants.map(r => ({ text: r.name + ' ' + r.cuisine + ' ' + r.location, type: 'destinations', name: r.name, sub: r.cuisine + ' - ' + r.location, icon: 'fas fa-utensils' }))
];

const tripTemplates = {
    heritage: {
        name: "Heritage Explorer",
        days: [
            { day: 1, title: "Arrival & Old Delhi", activities: ["Arrive in Delhi", "Red Fort & Jama Masjid", "Chandni Chowk Food Walk", "Rickshaw ride through Old Delhi"] },
            { day: 2, title: "Delhi Monuments", activities: ["Qutub Minar", "Humayun's Tomb", "India Gate & Rashtrapati Bhavan", "Lotus Temple"] },
            { day: 3, title: "Agra - Taj Mahal", activities: ["Drive to Agra", "Taj Mahal Sunrise Visit", "Agra Fort", "Mehtab Bagh Sunset"] },
            { day: 4, title: "Jaipur Arrival", activities: ["Drive to Jaipur via Fatehpur Sikri", "Hawa Mahal", "City Palace", "Johari Bazaar Shopping"] },
            { day: 5, title: "Jaipur & Departure", activities: ["Amber Fort Elephant Ride", "Jal Mahal Photo Stop", "Nahargarh Fort Sunset", "Departure"] }
        ]
    },
    nature: {
        name: "Nature & Wildlife",
        days: [
            { day: 1, title: "Arrival & Jungle Camp", activities: ["Arrive in Ranthambore", "Check into Jungle Lodge", "Nature Walk", "Bonfire & Dinner"] },
            { day: 2, title: "Morning Safari", activities: ["Dawn Jeep Safari", "Tiger Tracking", "Bird Watching", "Afternoon Nature Trail"] },
            { day: 3, title: "Temple & Lake", activities: ["Ranthambore Fort", "Trinetra Ganesh Temple", "Surwal Lake", "Village Visit"] },
            { day: 4, title: "Transfer to Jaipur", activities: ["Drive to Jaipur", "Nahargarh Biological Park", "Panna Meena Ka Kund", "Rooftop Dinner"] },
            { day: 5, title: "Departure", activities: ["Albert Hall Museum", "Birla Mandir", "Shopping for Souvenirs", "Departure"] }
        ]
    },
    adventure: {
        name: "Adventure Thrill",
        days: [
            { day: 1, title: "Rishikesh Arrival", activities: ["Arrive in Rishikesh", "Laxman Jhula Walk", "Evening Ganga Aarti", "Yoga Session"] },
            { day: 2, title: "River Rafting", activities: ["White Water Rafting (16km)", "Cliff Jumping", "Body Surfing", "Beach Camp Stay"] },
            { day: 3, title: "Trek & Bungee", activities: ["Neer Garh Waterfall Trek", "Bungee Jumping", "Flying Fox Zip Line", "Mountain Biking"] },
            { day: 4, title: "Kunjapuri Trek", activities: ["Sunrise Trek to Kunjapuri", "Panoramic Himalayan Views", "Ashram Visit", "Ayurvedic Massage"] },
            { day: 5, title: "Departure", activities: ["Beatles Ashram", "Ram Jhula Shopping", "Brunch at Café", "Departure"] }
        ]
    },
    spiritual: {
        name: "Spiritual Journey",
        days: [
            { day: 1, title: "Varanasi Arrival", activities: ["Arrive in Varanasi", "Walk the Ghats", "Evening Ganga Aarti", "Kashi Vishwanarth Darshan"] },
            { day: 2, title: "Varanasi Exploration", activities: ["Sunrise Boat Ride", "Sarnath Buddhist Site", "Banaras Hindu University", "Silk Saree Shopping"] },
            { day: 3, title: "Varanasi to Rishikesh", activities: ["Morning Aarti", "Train to Haridwar", "Har Ki Pauri", "Evening Ganga Aarti"] },
            { day: 4, title: "Rishikesh Yoga", activities: ["Morning Yoga & Meditation", "Parmarth Niketan Ashram", "Vashishta Cave", "Ayurvedic Dinner"] },
            { day: 5, title: "Departure", activities: ["Sunrise at Triveni Ghat", "Temple Visits", "Local Market", "Departure"] }
        ]
    },
    food: {
        name: "Food & Culture",
        days: [
            { day: 1, title: "Delhi Food Trail", activities: ["Karim's for Mughlai", "Chandni Chowk Paranthas", "Old Delhi Street Food", "Connaught Place Fine Dining"] },
            { day: 2, title: "Amritsar Cuisine", activities: ["Golden Temple Langar", "Amritsari Kulcha", "Jallianwala Bagh", "Wagah Border"] },
            { day: 3, title: "Jaipur Flavors", activities: ["Chokhi Dhani Thali", "Lassiwala Jaljeera", "Nahargarh Fort Dinner", "Spice Market Tour"] },
            { day: 4, title: "Udaipur Taste", activities: ["Rooftop Lake View Dining", "Rajasthani Thali", "Pichola Boat Ride", "Cooking Class"] },
            { day: 5, title: "Mumbai Street Food", activities: ["Vada Pav & Pav Bhaji", "Mohammed Ali Road", "Leopold Café", "Marine Drive Sunset"] }
        ]
    }
};

// ==================== DOM READY ====================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSearch();
    initBackToTop();
    initNewsletter();
    // Page-specific initializations (only run if elements exist on current page)
    if (document.getElementById('heroSlider')) initSlider();
    if (document.getElementById('weatherWidget')) initWeather();
    if (document.getElementById('tpGenerate')) initTripPlanner();
    if (document.getElementById('tourBookingForm')) initBooking();
    if (document.getElementById('contactForm')) initContactForm();
    if (document.getElementById('galleryGrid')) initGallery();
    if (document.querySelector('.filter-btn')) initFilters();
    if (document.getElementById('trendingDestinations')) renderTrendingDestinations();
    if (document.getElementById('activitiesGrid')) renderActivities();
    if (document.getElementById('heritageGrid')) renderHeritage();
    if (document.getElementById('staysGrid')) renderStays();
    if (document.getElementById('transportGrid')) renderTransport();
    if (document.getElementById('restaurantGrid')) renderRestaurants();
    if (document.getElementById('packagesGrid')) renderPackages('all');
    if (document.getElementById('allDestinations')) renderDestinations('all');
    if (document.getElementById('staysContent')) renderStayServices('hotels');
    if (document.getElementById('transportOptionsGrid')) renderTransportOptions();
    if (document.getElementById('testimonialDots')) initTestimonials();
    if (document.querySelector('.stat-number')) initCounters();
    if (document.querySelector('.destination-card') || document.querySelector('.activity-card')) initScrollAnimations();
    loadSavedBookings();
    setMinDates();
});

// ==================== NAVIGATION ====================
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('mobileOverlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// ==================== HERO SLIDER ====================
function initSlider() {
    const track = document.getElementById('sliderTrack');
    const slides = track.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('sliderDots');
    let current = 0;
    let autoTimer;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    function goTo(index) {
        current = index;
        track.style.transform = `translateX(-${current * 100}%)`;
        document.querySelectorAll('.slider-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
        resetAuto();
    }

    function next() { goTo((current + 1) % slides.length); }
    function prev() { goTo((current - 1 + slides.length) % slides.length); }

    function resetAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(next, 6000);
    }

    document.getElementById('sliderNext').addEventListener('click', next);
    document.getElementById('sliderPrev').addEventListener('click', prev);

    resetAuto();

    // Touch support
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
    track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    });
}

// ==================== WEATHER WIDGET ====================
function initWeather() {
    const toggle = document.getElementById('weatherToggle');
    const panel = document.getElementById('weatherPanel');
    const close = document.getElementById('weatherClose');
    const searchBtn = document.getElementById('weatherSearchBtn');
    const cityInput = document.getElementById('weatherCityInput');

    toggle.addEventListener('click', () => panel.classList.toggle('active'));
    close.addEventListener('click', () => panel.classList.remove('active'));
    searchBtn.addEventListener('click', () => fetchWeather(cityInput.value));
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') fetchWeather(cityInput.value);
    });

    fetchWeather('New Delhi');
}

async function fetchWeather(city) {
    const display = document.getElementById('weatherDisplay');
    const temp = document.getElementById('weatherTemp');
    const desc = document.getElementById('weatherDesc');
    const humidity = document.getElementById('weatherHumidity');
    const wind = document.getElementById('weatherWind');
    const visibility = document.getElementById('weatherVisibility');
    const feels = document.getElementById('weatherFeels');
    const cityName = document.getElementById('weatherCity');
    const weatherTime = document.getElementById('weatherTime');
    const iconEl = document.getElementById('weatherIcon');

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=demo`);
        if (!res.ok) throw new Error('Weather API unavailable');

        const data = await res.json();
        temp.textContent = `${Math.round(data.main.temp)}°C`;
        desc.textContent = data.weather[0].description;
        humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
        visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
        feels.textContent = `${Math.round(data.main.feels_like)}°C`;
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        weatherTime.textContent = new Date().toLocaleString();

        const iconCode = data.weather[0].icon;
        const iconMap = { '01d': 'fas fa-sun', '01n': 'fas fa-moon', '02d': 'fas fa-cloud-sun', '02n': 'fas fa-cloud-moon', '03d': 'fas fa-cloud', '03n': 'fas fa-cloud', '04d': 'fas fa-clouds', '04n': 'fas fa-clouds', '09d': 'fas fa-cloud-showers-heavy', '09n': 'fas fa-cloud-showers-heavy', '10d': 'fas fa-cloud-sun-rain', '10n': 'fas fa-cloud-moon-rain', '11d': 'fas fa-bolt', '11n': 'fas fa-bolt', '13d': 'fas fa-snowflake', '13n': 'fas fa-snowflake', '50d': 'fas fa-smog', '50n': 'fas fa-smog' };
        iconEl.innerHTML = `<i class="${iconMap[iconCode] || 'fas fa-cloud-sun'}"></i>`;
    } catch (e) {
        // Demo data fallback
        const demoWeather = getDemoWeather(city);
        temp.textContent = `${demoWeather.temp}°C`;
        desc.textContent = demoWeather.desc;
        humidity.textContent = `${demoWeather.humidity}%`;
        wind.textContent = `${demoWeather.wind} km/h`;
        visibility.textContent = `${demoWeather.visibility} km`;
        feels.textContent = `${demoWeather.feels}°C`;
        cityName.textContent = `${city}, India`;
        weatherTime.textContent = new Date().toLocaleString();
        iconEl.innerHTML = `<i class="${demoWeather.icon}"></i>`;
    }
}

function getDemoWeather(city) {
    const weathers = {
        'New Delhi': { temp: 34, desc: 'Haze', humidity: 45, wind: 12, visibility: 4, feels: 37, icon: 'fas fa-smog' },
        'Mumbai': { temp: 30, desc: 'Partly cloudy', humidity: 72, wind: 18, visibility: 8, feels: 33, icon: 'fas fa-cloud-sun' },
        'Jaipur': { temp: 36, desc: 'Clear sky', humidity: 32, wind: 8, visibility: 10, feels: 38, icon: 'fas fa-sun' },
        'Kochi': { temp: 28, desc: 'Light rain', humidity: 82, wind: 14, visibility: 6, feels: 31, icon: 'fas fa-cloud-rain' },
        'Leh': { temp: 8, desc: 'Clear sky', humidity: 20, wind: 6, visibility: 15, feels: 5, icon: 'fas fa-sun' },
        'Varanasi': { temp: 33, desc: 'Humid & warm', humidity: 65, wind: 10, visibility: 7, feels: 36, icon: 'fas fa-cloud-sun' }
    };
    return weathers[city] || { temp: 30, desc: 'Partly cloudy', humidity: 50, wind: 12, visibility: 8, feels: 32, icon: 'fas fa-cloud-sun' };
}

// ==================== SEARCH ====================
function initSearch() {
    const toggleBtn = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');
    const closeBtn = document.getElementById('searchClose');
    const input = document.getElementById('searchInput');
    const suggestions = document.getElementById('searchSuggestions');
    const form = document.getElementById('searchForm');
    const categorySelect = document.getElementById('searchCategory');

    toggleBtn.addEventListener('click', () => {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) input.focus();
    });

    closeBtn.addEventListener('click', () => {
        searchBar.classList.remove('active');
        input.value = '';
        suggestions.innerHTML = '';
    });

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        const category = categorySelect.value;
        if (query.length < 2) { suggestions.innerHTML = ''; return; }

        const filtered = searchDatabase.filter(item => {
            const matchesQuery = item.text.toLowerCase().includes(query);
            const matchesCategory = category === 'all' || item.type === category;
            return matchesQuery && matchesCategory;
        }).slice(0, 8);

        suggestions.innerHTML = filtered.map(item => `
            <div class="search-suggestion-item" data-type="${item.type}">
                <i class="${item.icon}"></i>
                <div>
                    <strong>${item.name}</strong>
                    <small style="display:block;color:var(--text-lighter);">${item.sub}</small>
                </div>
            </div>
        `).join('');

        suggestions.querySelectorAll('.search-suggestion-item').forEach((s, i) => {
            s.addEventListener('click', () => {
                const type = filtered[i].type;
                const pageMap = { destinations: 'destinations', hotels: 'services', transport: 'services', activities: 'destinations', heritage: 'destinations' };
                navigateTo(pageMap[type] || 'destinations');
                searchBar.classList.remove('active');
            });
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value.trim()) {
            navigateTo('destinations');
            searchBar.classList.remove('active');
        }
    });
}

// ==================== TRIP PLANNER ====================
function initTripPlanner() {
    const budgetSlider = document.getElementById('tpBudget');
    const budgetDisplay = document.getElementById('tpBudgetDisplay');
    const resultDiv = document.getElementById('tpResult');
    const generateBtn = document.getElementById('tpGenerate');

    budgetSlider.addEventListener('input', () => {
        budgetDisplay.textContent = `₹${Number(budgetSlider.value).toLocaleString('en-IN')}`;
    });

    // Interest tags
    document.querySelectorAll('.interest-tag').forEach(tag => {
        tag.addEventListener('click', () => tag.classList.toggle('active'));
    });

    generateBtn.addEventListener('click', () => {
        const interests = [...document.querySelectorAll('.interest-tag.active')].map(t => t.dataset.interest);
        const duration = document.getElementById('tpDuration').value;
        const budget = parseInt(budgetSlider.value);

        // Pick template based on primary interest
        let template = tripTemplates.heritage;
        if (interests.includes('adventure')) template = tripTemplates.adventure;
        else if (interests.includes('nature')) template = tripTemplates.nature;
        else if (interests.includes('spiritual')) template = tripTemplates.spiritual;
        else if (interests.includes('food')) template = tripTemplates.food;
        else if (interests.includes('heritage')) template = tripTemplates.heritage;

        let html = `<div style="margin-bottom:20px;">
            <h3 style="font-family:var(--font-heading);color:var(--navy);margin-bottom:4px;">${template.name}</h3>
            <p style="font-size:13px;color:var(--text-lighter);">Budget: ₹${budget.toLocaleString('en-IN')} | ${duration} | Interests: ${interests.join(', ') || 'General'}</p>
        </div>`;

        template.days.forEach(day => {
            html += `<div class="itinerary-day">
                <h4><span>Day ${day.day}</span> ${day.title}</h4>
                <div class="itinerary-activities">
                    ${day.activities.map(a => `<div class="itinerary-activity"><i class="fas fa-check-circle"></i> ${a}</div>`).join('')}
                </div>
            </div>`;
        });

        html += `<div style="margin-top:20px;text-align:center;">
            <button class="btn btn-primary" onclick="window.location.href='booking.html'">
                <i class="fas fa-book"></i> Book This Itinerary
            </button>
        </div>`;

        resultDiv.innerHTML = html;
    });
}

// ==================== BOOKING SYSTEM ====================
function initBooking() {
    // Tab switching
    document.querySelectorAll('.btab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.btab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.booking-tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('btab-' + tab.dataset.btab).classList.add('active');
        });
    });

    // Transport type selector
    document.querySelectorAll('.transport-type').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.transport-type').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('transType').value = btn.dataset.ttype;
        });
    });

    // Populate package select
    const pkgSelect = document.getElementById('tourPackage');
    packages.forEach(pkg => {
        const opt = document.createElement('option');
        opt.value = pkg.id;
        opt.textContent = `${pkg.name} - ₹${pkg.price.toLocaleString('en-IN')}`;
        pkgSelect.appendChild(opt);
    });

    // Tour booking form
    document.getElementById('tourBookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validateForm(e.target)) return;
        const pkg = packages.find(p => p.id == document.getElementById('tourPackage').value);
        const booking = {
            type: 'Tour Package',
            details: pkg ? pkg.name : 'Custom Tour',
            name: document.getElementById('tourName').value,
            email: document.getElementById('tourEmail').value,
            price: pkg ? pkg.price : 0,
            date: document.getElementById('tourDate').value,
            id: Date.now()
        };
        saveBooking(booking);
        updateBookingSummary(booking);
        showModal('Booking Confirmed!', `Your ${booking.details} trip has been booked successfully. Confirmation sent to ${booking.email}.`);
        e.target.reset();
    });

    // Hotel booking form
    document.getElementById('hotelBookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validateForm(e.target)) return;
        const booking = {
            type: 'Hotel / Stay',
            details: document.getElementById('hotelType').value + ' - ' + document.getElementById('hotelCity').value,
            name: document.getElementById('hotelName').value,
            email: document.getElementById('hotelEmail').value,
            price: 5999,
            date: document.getElementById('hotelCheckin').value,
            id: Date.now()
        };
        saveBooking(booking);
        updateBookingSummary(booking);
        showModal('Stay Booked!', `Your stay at ${booking.details} has been booked. Check ${booking.email} for details.`);
        e.target.reset();
    });

    // Transport booking form
    document.getElementById('transportBookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validateForm(e.target)) return;
        const booking = {
            type: 'Transport',
            details: document.getElementById('transType').value + ': ' + document.getElementById('transFrom').value + ' → ' + document.getElementById('transTo').value,
            name: document.getElementById('transName').value,
            email: document.getElementById('transEmail').value,
            price: 2999,
            date: document.getElementById('transDate').value,
            id: Date.now()
        };
        saveBooking(booking);
        updateBookingSummary(booking);
        showModal('Transport Booked!', `Your ${booking.details} is confirmed. Details sent to ${booking.email}.`);
        e.target.reset();
    });

    // Save draft buttons
    document.getElementById('saveTourDraft').addEventListener('click', () => saveDraft('tour'));
    document.getElementById('saveHotelDraft').addEventListener('click', () => saveDraft('hotel'));
    document.getElementById('saveTransDraft').addEventListener('click', () => saveDraft('transport'));

    // Modal close
    document.getElementById('modalClose').addEventListener('click', () => {
        document.getElementById('successModal').classList.remove('active');
    });
    document.querySelector('.modal-overlay')?.addEventListener('click', () => {
        document.getElementById('successModal').classList.remove('active');
    });
}

function validateForm(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
        const error = field.parentElement.querySelector('.error-msg');
        if (!field.value.trim()) {
            field.classList.add('error');
            if (error) error.textContent = 'This field is required';
            valid = false;
        } else {
            field.classList.remove('error');
            if (error) error.textContent = '';
        }
    });

    // Email validation
    const emails = form.querySelectorAll('input[type="email"]');
    emails.forEach(email => {
        const error = email.parentElement.querySelector('.error-msg');
        if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.classList.add('error');
            if (error) error.textContent = 'Please enter a valid email';
            valid = false;
        }
    });

    // Phone validation
    const phones = form.querySelectorAll('input[type="tel"]');
    phones.forEach(phone => {
        const error = phone.parentElement.querySelector('.error-msg');
        if (phone.value && phone.value.replace(/\D/g, '').length < 10) {
            phone.classList.add('error');
            if (error) error.textContent = 'Please enter a valid phone number';
            valid = false;
        }
    });

    return valid;
}

function saveBooking(booking) {
    let bookings = JSON.parse(localStorage.getItem('indiaTourism_bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('indiaTourism_bookings', JSON.stringify(bookings));
    loadSavedBookings();
}

function loadSavedBookings() {
    const list = document.getElementById('savedBookingsList');
    const bookings = JSON.parse(localStorage.getItem('indiaTourism_bookings') || '[]');

    if (bookings.length === 0) {
        list.innerHTML = '<p class="no-saved">No saved bookings yet</p>';
        return;
    }

    list.innerHTML = bookings.map(b => `
        <div class="saved-booking-item">
            <div>
                <strong style="display:block;font-size:12px;">${b.type}</strong>
                <small style="color:var(--text-lighter);">${b.details}</small>
            </div>
            <button class="delete-booking" onclick="deleteBooking(${b.id})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
}

window.deleteBooking = function(id) {
    let bookings = JSON.parse(localStorage.getItem('indiaTourism_bookings') || '[]');
    bookings = bookings.filter(b => b.id !== id);
    localStorage.setItem('indiaTourism_bookings', JSON.stringify(bookings));
    loadSavedBookings();
};

function updateBookingSummary(booking) {
    const summary = document.getElementById('bookingSummary');
    const totalDiv = document.getElementById('bookingTotal');
    const gst = Math.round(booking.price * 0.18);
    const total = booking.price + gst;

    summary.innerHTML = `
        <div class="summary-empty" style="text-align:left;padding:0;">
            <p style="margin-bottom:12px;"><strong style="color:var(--navy);">Booking Details</strong></p>
            <p style="font-size:13px;"><strong>Type:</strong> ${booking.type}</p>
            <p style="font-size:13px;"><strong>Details:</strong> ${booking.details}</p>
            <p style="font-size:13px;"><strong>Date:</strong> ${booking.date || 'Not specified'}</p>
            <p style="font-size:13px;"><strong>Traveler:</strong> ${booking.name}</p>
        </div>
    `;

    document.getElementById('subtotalAmount').textContent = `₹${booking.price.toLocaleString('en-IN')}`;
    document.getElementById('gstAmount').textContent = `₹${gst.toLocaleString('en-IN')}`;
    document.getElementById('totalAmount').textContent = `₹${total.toLocaleString('en-IN')}`;
    totalDiv.style.display = 'block';
}

function saveDraft(type) {
    const draftData = {};
    let formId;
    if (type === 'tour') formId = 'tourBookingForm';
    else if (type === 'hotel') formId = 'hotelBookingForm';
    else formId = 'transportBookingForm';

    const form = document.getElementById(formId);
    form.querySelectorAll('input, select, textarea').forEach(el => {
        if (el.name || el.id) draftData[el.id || el.name] = el.value;
    });

    let drafts = JSON.parse(localStorage.getItem('indiaTourism_drafts') || '{}');
    drafts[type] = draftData;
    localStorage.setItem('indiaTourism_drafts', JSON.stringify(drafts));
    showModal('Draft Saved', `Your ${type} booking draft has been saved. You can continue later.`);
}

function showModal(title, message) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('successModal').classList.add('active');
}

// ==================== CONTACT FORM ====================
function initContactForm() {
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validateForm(e.target)) return;

        const contact = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            phone: document.getElementById('contactPhone').value,
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value,
            date: new Date().toISOString()
        };

        let contacts = JSON.parse(localStorage.getItem('indiaTourism_contacts') || '[]');
        contacts.push(contact);
        localStorage.setItem('indiaTourism_contacts', JSON.stringify(contacts));

        showModal('Message Sent!', `Thank you ${contact.name}! We'll get back to you within 24 hours.`);
        e.target.reset();
    });
}

// ==================== GALLERY ====================
function initGallery() {
    renderGallery('all');

    // Gallery filters
    document.querySelectorAll('.gallery-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.gallery-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.gfilter);
        });
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    let currentIndex = 0;
    let filteredGallery = [];

    document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('active'));

    document.getElementById('lightboxPrev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
        updateLightbox();
    });

    document.getElementById('lightboxNext').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % filteredGallery.length;
        updateLightbox();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('modal-overlay')) {
            lightbox.classList.remove('active');
        }
    });

    function updateLightbox() {
        lightboxImg.src = filteredGallery[currentIndex].img;
        lightboxCaption.textContent = filteredGallery[currentIndex].title;
    }

    window.openLightbox = function(index, filter) {
        filteredGallery = filter === 'all' ? [...galleryItems] : galleryItems.filter(g => g.category === filter);
        currentIndex = index;
        lightbox.classList.add('active');
        updateLightbox();
    };
}

function renderGallery(filter) {
    const grid = document.getElementById('galleryGrid');
    const items = filter === 'all' ? galleryItems : galleryItems.filter(g => g.category === filter);

    grid.innerHTML = items.map((item, i) => `
        <div class="gallery-item" onclick="openLightbox(${i}, '${filter}')">
            <img src="${item.img}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">
                <h4>${item.title}</h4>
                <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
            </div>
        </div>
    `).join('');
}

// ==================== FILTERS ====================
function initFilters() {
    // Destination filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderDestinations(btn.dataset.filter);
        });
    });

    // Package filters
    document.querySelectorAll('.pkg-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pkg-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPackages(btn.dataset.pfilter);
        });
    });

    // Services tabs
    document.querySelectorAll('.service-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.service-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderStayServices(btn.dataset.stab);
        });
    });
}

// ==================== RENDER CONTENT ====================
function renderTrendingDestinations() {
    const grid = document.getElementById('trendingDestinations');
    if (!grid) return;
    const featured = destinations.slice(0, 6);
    grid.innerHTML = featured.map(d => createDestinationCard(d)).join('');
}

function renderDestinations(filter) {
    const grid = document.getElementById('allDestinations');
    if (!grid) return;
    const filtered = filter === 'all' ? destinations : destinations.filter(d =>
        d.region === filter || d.category === filter
    );
    grid.innerHTML = filtered.map(d => createDestinationCard(d)).join('');
}

function createDestinationCard(d) {
    return `
        <div class="destination-card">
            <div class="dest-img">
                <img src="${d.img}" alt="${d.name}" loading="lazy">
                <span class="dest-badge">${d.badge}</span>
                <span class="dest-rating"><i class="fas fa-star"></i> ${d.rating}</span>
            </div>
            <div class="dest-content">
                <h3>${d.name}</h3>
                <div class="dest-location"><i class="fas fa-map-marker-alt"></i> ${d.state}</div>
                <p>${d.desc}</p>
                <div class="dest-tags">
                    ${d.tags.map(t => `<span class="dest-tag">${t}</span>`).join('')}
                </div>
                <div style="font-size:12px;color:var(--text-lighter);margin-bottom:8px;">
                    <i class="fas fa-calendar-alt" style="color:var(--saffron);"></i> Best Time: ${d.bestTime}
                </div>
                <div class="dest-footer">
                    <span class="dest-price">₹${d.price.toLocaleString('en-IN')} <small>/person</small></span>
                    <button class="dest-book-btn" onclick="window.location.href='booking.html'">Book Now</button>
                </div>
            </div>
        </div>
    `;
}

function renderActivities() {
    const grid = document.getElementById('activitiesGrid');
    if (!grid) return;
    grid.innerHTML = activities.map(a => `
        <div class="activity-card">
            <div class="activity-icon"><i class="${a.icon}"></i></div>
            <h4>${a.name}</h4>
            <p>${a.desc}</p>
        </div>
    `).join('');
}

function renderHeritage() {
    const grid = document.getElementById('heritageGrid');
    if (!grid) return;
    grid.innerHTML = heritageSites.map(h => `
        <div class="heritage-card">
            <div class="heritage-img">
                <img src="${h.img}" alt="${h.name}" loading="lazy">
            </div>
            <div class="heritage-content">
                <h4>${h.name}</h4>
                <div class="heritage-type"><i class="fas fa-landmark"></i> ${h.type}</div>
                <p>${h.desc}</p>
                ${h.attribution ? `<div class="heritage-attribution"><i class="fas fa-license"></i> ${h.attribution}</div>` : ''}
            </div>
        </div>
    `).join('');
}

function renderStays() {
    const grid = document.getElementById('staysGrid');
    if (!grid) return;
    grid.innerHTML = stays.map(s => `
        <div class="stay-card">
            <div class="stay-img">
                <img src="${s.img}" alt="${s.name}" loading="lazy">
                <span class="stay-type-badge">${s.type}</span>
            </div>
            <div class="stay-content">
                <h4>${s.name}</h4>
                <div class="stay-location"><i class="fas fa-map-marker-alt"></i> ${s.location}</div>
                <div class="stay-amenities">
                    ${s.amenities.map(a => `<span class="stay-amenity"><i class="fas fa-check"></i> ${a}</span>`).join('')}
                </div>
                <div class="stay-footer">
                    <span class="stay-price">₹${s.price.toLocaleString('en-IN')} <small>/night</small></span>
                    <button class="dest-book-btn" onclick="window.location.href='booking.html'">Book</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTransport() {
    const grid = document.getElementById('transportGrid');
    if (!grid) return;
    grid.innerHTML = transportOptions.map(t => `
        <div class="transport-card">
            <i class="${t.icon}"></i>
            <h4>${t.name}</h4>
            <p>${t.desc}</p>
            <div style="margin-top:8px;font-size:13px;color:var(--green);font-weight:600;">${t.price}</div>
        </div>
    `).join('');
}

function renderRestaurants() {
    const grid = document.getElementById('restaurantGrid');
    if (!grid) return;
    grid.innerHTML = restaurants.map(r => `
        <div class="restaurant-card">
            <div class="restaurant-img">
                <img src="${r.img}" alt="${r.name}" loading="lazy">
            </div>
            <div class="restaurant-content">
                <h4>${r.name}</h4>
                <div class="rest-cuisine"><i class="fas fa-utensils"></i> ${r.cuisine}</div>
                <div class="rest-location"><i class="fas fa-map-marker-alt"></i> ${r.location}</div>
                <div style="display:flex;justify-content:space-between;margin-top:6px;">
                    <span class="rest-rating"><i class="fas fa-star"></i> ${r.rating}</span>
                    <span class="rest-price">${r.priceRange}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPackages(filter) {
    const grid = document.getElementById('packagesGrid');
    if (!grid) return;
    const filtered = filter === 'all' ? packages : packages.filter(p => p.type === filter || p.category === filter);
    grid.innerHTML = filtered.map(p => `
        <div class="package-card">
            <div class="pkg-img">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                ${p.badge ? `<span class="pkg-badge">${p.badge}</span>` : ''}
                <span class="pkg-duration"><i class="fas fa-clock"></i> ${p.duration}</span>
            </div>
            <div class="pkg-content">
                <h3>${p.name}</h3>
                <div class="pkg-route"><i class="fas fa-route"></i> ${p.route}</div>
                <div class="pkg-includes">
                    ${p.includes.map(inc => `<span class="pkg-include"><i class="fas fa-check"></i> ${inc}</span>`).join('')}
                </div>
                <div class="pkg-footer">
                    <span class="pkg-price">₹${p.price.toLocaleString('en-IN')} <small>/person</small></span>
                    <button class="pkg-book-btn" onclick="window.location.href='booking.html'">Book Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderStayServices(type) {
    const content = document.getElementById('staysContent');
    if (!content) return;
    const filteredStays = stays.filter(s => {
        const typeMap = {
            'hotels': ['Luxury Hotel', 'Heritage Resort'],
            'airbnb': ['Eco Resort'],
            'hostels': ['Hostel'],
            'guesthouses': ['Heritage Stay'],
            'heritage-stays': ['Heritage Stay', 'Heritage Resort']
        };
        return typeMap[type]?.includes(s.type) || type === 'hotels';
    });

    content.innerHTML = filteredStays.map(s => `
        <div class="service-card">
            <h4>${s.name}</h4>
            <div class="service-location"><i class="fas fa-map-marker-alt"></i> ${s.location}</div>
            <p>${s.type}</p>
            <div class="service-amenities">
                ${s.amenities.map(a => `<span class="service-amenity-tag">${a}</span>`).join('')}
            </div>
            <div class="service-price">₹${s.price.toLocaleString('en-IN')} <small style="font-weight:400;color:var(--text-lighter);">/night</small></div>
        </div>
    `).join('');
}

function renderTransportOptions() {
    const grid = document.getElementById('transportOptionsGrid');
    if (!grid) return;
    grid.innerHTML = transportOptions.map(t => `
        <div class="transport-option-card">
            <i class="${t.icon}"></i>
            <h4>${t.name}</h4>
            <p>${t.desc}</p>
            <div style="margin-top:8px;color:var(--green);font-weight:600;font-size:14px;">${t.price}</div>
        </div>
    `).join('');
}

// ==================== TESTIMONIALS ====================
function initTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.getElementById('testimonialDots');
    let current = 0;

    testimonials.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToTestimonial(i));
        dotsContainer.appendChild(dot);
    });

    function goToTestimonial(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.testimonial-dot').forEach(d => d.classList.remove('active'));
        testimonials[index].classList.add('active');
        document.querySelectorAll('.testimonial-dot')[index].classList.add('active');
        current = index;
    }

    setInterval(() => {
        goToTestimonial((current + 1) % testimonials.length);
    }, 5000);
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ==================== NEWSLETTER ====================
function initNewsletter() {
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value;
        if (email) {
            let subscribers = JSON.parse(localStorage.getItem('indiaTourism_subscribers') || '[]');
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('indiaTourism_subscribers', JSON.stringify(subscribers));
            }
            showModal('Subscribed!', `Thank you for subscribing! Travel tips and deals will be sent to ${email}.`);
            e.target.reset();
        }
    });
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.destination-card, .activity-card, .heritage-card, .stay-card, .transport-card, .restaurant-card, .package-card, .season-card, .stat-card, .why-card, .team-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ==================== COUNTER ANIMATION ====================
function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.target);
                    let current = 0;
                    const increment = target / 60;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        counter.textContent = Math.floor(current).toLocaleString('en-IN');
                    }, 30);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.cta-stats');
    if (statsSection) observer.observe(statsSection);
}

// ==================== UTILITY ====================
function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.min = today;
        if (!input.value) input.value = today;
    });
}
