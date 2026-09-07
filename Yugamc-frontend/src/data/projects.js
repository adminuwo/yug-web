import ss1 from '../assets/Screenshot 2026-03-20 080534.png';
import ss2 from '../assets/Screenshot 2026-03-20 080543.png';
import ss3 from '../assets/Screenshot 2026-03-20 080604.png';
import ss4 from '../assets/Screenshot 2026-03-20 080612.png';
import ss5 from '../assets/Screenshot 2026-03-20 080627.png';
import elevation_1_2 from '../assets/elevation_1_2.png';
import sg_square from '../assets/sg_square.png';
import villa1 from '../assets/villa_elevation_1.jpeg';
import uwo_comm from '../assets/uwo_commercial.jpeg';
import sbi_comm from '../assets/commercial_elevation_1.jpeg';
import naivedyam_comm from '../assets/commercial_elevation_2.jpeg';
import yash_heights_entrance from '../assets/yash_heights_entrance.jpeg';
import currency_tower from '../assets/currency_tower.png';

export const projectsData = [
  {
    id: "yug-villas",
    name: "Yug Villas",
    location: "Panchsheel Nagar, Jabalpur",
    year: "2011",
    status: "Completed",
    type: "Residential",
    description: "Located in Panchsheel Nagar, Yug Villas marked the beginning of YUGAMC's journey in residential development. This exclusive project features 5 thoughtfully designed duplex homes with modern amenities and functional layouts. Built with a focus on comfort and quality, it set the foundation for the brand's commitment to better living.",
    highlights: ["Independent Living", "Premium Design", "Prime Location"],
    images: [villa1, ss1, ss2]
  },
  {
    id: "sg-square",
    name: "SG Square",
    location: "Rampur Chowk, Jabalpur",
    year: "2012",
    status: "Completed",
    type: "Commercial",
    description: "Situated at the prime location of Rampur Chowk, SG Square is a well-planned commercial development designed for visibility and accessibility. With a mix of retail shops and office spaces, it caters to growing businesses and daily commercial activity. Its strategic positioning makes it a strong hub for business presence.",
    highlights: ["Strategic Location", "High Footfall", "Modern Facade"],
    images: [sg_square, ss3, ss4]
  },
  {
    id: "yash-heights",
    name: "Yash Heights",
    location: "Dhanvantri Nagar, Jabalpur",
    year: "2013–2016",
    status: "Completed",
    type: "Residential",
    description: "Located in Dhanvantri Nagar, Yash Heights is a premium residential project offering spacious 2 & 3 BHK apartments across a 4-storey development. Designed to balance comfort, functionality, and modern lifestyle needs, it provides a complete living experience with essential amenities. Built for today while adapting to tomorrow, it reflects long-term value and thoughtful planning.",
    highlights: ["Luxury Residences", "Grand Entrance", "Secure Living"],
    images: [yash_heights_entrance, ss1, ss5]
  },
  {
    id: "uwo-it-mall",
    name: "UWO IT Mall",
    location: "Narmada Road, Jabalpur",
    year: "2019",
    status: "Completed",
    type: "Commercial",
    description: "Developed on Narmada Road, UWO IT Mall is a modern commercial space designed to support retail and business growth. Featuring shops and restaurant spaces, it creates a dynamic environment for customer engagement and business visibility. The project reflects YUGAMC's focus on evolving commercial needs.",
    highlights: ["Corporate Suites", "High Tech Infrastructure", "Prime Location"],
    images: [uwo_comm, ss2]
  },
  {
    id: "sbi-building",
    name: "SBI Building",
    location: "Gwarighat Road, Jabalpur",
    year: "2021",
    status: "Completed",
    type: "Commercial",
    description: "Located on Gwarighat Road, the SBI Building stands as a reliable commercial asset with practical design and strong usability. Offering shops and spacious halls, it supports both retail and institutional functions. Built with precision and trust, it represents YUGAMC's consistent execution quality.",
    highlights: ["Strategic Location", "Premium Outlets", "Corporate Center"],
    images: [sbi_comm, ss3]
  },
  {
    id: "satguru-city-mall",
    name: "City Plaza",
    location: "Tilhari, Jabalpur",
    year: "In Progress",
    status: "Ongoing",
    type: "Commercial",
    description: "An upcoming grand shopping and entertainment destination destined to become the new pulse of Tilhari.",
    highlights: ["Retail Spaces", "Entertainment Zones", "Food Courts"],
    images: [elevation_1_2, naivedyam_comm]
  },
  {
    id: "currency-tower",
    name: "Currency Tower",
    badge: "Coming Soon",
    location: "Mangeli, Jabalpur",
    year: "Upcoming",
    status: "Upcoming",
    type: "Commercial",
    description: "A futuristic tower conceptualized for elite businesses seeking unparalleled prestige and connectivity.",
    highlights: ["Iconic Architecture", "Business Center", "Modern Design"],
    images: [currency_tower, ss4]
  },
  {
    id: "logistic-park",
    name: "Logistic Park",
    badge: "Coming Soon",
    location: "Nigri, Bargi",
    year: "Upcoming",
    status: "Upcoming",
    type: "Commercial",
    description: "A massive, ultra-modern warehousing and logistics park strategically located for optimal supply chain efficiency.",
    highlights: ["Warehousing", "Supply Chain Hub", "Strategic Connectivity"],
    images: [naivedyam_comm, sbi_comm, uwo_comm]
  }
];
