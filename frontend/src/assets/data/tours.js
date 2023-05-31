import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address:'River Thames, London',
    price: 99,
    maxGroupSize: 10,
    desc: "Westminster Bridge is a road-and-foot-traffic bridge over the River Thames in London, linking Westminster on the west side and Lambeth on the east side.The bridge is painted predominantly green, the same colour as the leather seats in the House of Commons which is on the side of the Palace of Westminster nearest to the bridge,but a natural shade similar to verdigris. This is in contrast to Lambeth Bridge, which is red, the same colour as the seats in the House of Lords and is on the opposite side of the Houses of Parliament.",
    reviews: [
      {
        name: "Steve",
        rating: 4.6,
      },
      {
        name: "Helmen",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address:'Lesser Sunda Islands',
    price: 89,
    maxGroupSize: 8,
    desc: "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast. The provincial capital, Denpasar,[7] is the most populous city in the Lesser Sunda Islands and the second-largest, after Makassar, in Eastern Indonesia. ",
    reviews: [
      {
        name: "Steve",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address:'North of Thailand.',
    price: 99,
    maxGroupSize: 8,
    desc: "The Thai highlands or Hills of northern Thailand is a mountainous natural region in the north of Thailand. Its mountain ranges are part of the system of hills extending through Laos, Burma, and China and linking to the Himalayas, of which they may be considered foothills.",
    reviews: [
      {
        name: "Demon",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address:'Thailand mountains',
    price: 79,
    maxGroupSize: 8,
    desc: "Thailand is a fascinating destination that is brimming with breathtaking scenery. However, the best way to enjoy that picturesque view is by seizing the moment when they are aglow with the sunrise and sunset. Discover the best sunrise and sunset spots in Thailand and witness an unforgettable scene in your life!",
    reviews: [
      {
        name: "John",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address:'southeastern Indonesian island',
    price: 95,
    maxGroupSize: 8,
    desc: "Nusa Penida (Balinese: ᬦᬸᬲᬧᭂᬦᬶᬤ, romanized: Nusa Penida, lit. 'Penida Island') is an island located near the southeastern Indonesian island of Bali and a district of Klungkung Regency that includes the neighbouring small island of Nusa Lembongan and twelve even smaller islands. The Badung Strait separates the island and Bali. The interior of Nusa Penida is hilly with a maximum altitude of 524 metres.",
    reviews: [
      {
        name: "Steve",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address:'Japan',
    price: 89,
    maxGroupSize: 8,
    desc: "A cherry blossom, also known as a Japanese cherry or sakura, is a flower of many trees of genus Prunus or Prunus subgenus. Cerasus. They are common species in East Asia, including China, Korea and especially in Japan. They generally refer to ornamental cherry trees, not to be confused with cherry trees that produce fruit for eating.[4][5] It is considered the national flower of Japan",
    reviews: [
      {
        name: "Stark",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address:'France',
    price: 99,
    maxGroupSize: 8,
    desc: "Holmen Lofoten is a small, family run hotel and seasonal restaurant set above the Arctic Circle, open mid February to mid December. We are also home to the events Kitchen On The Edge Of The World. ",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address:'North of Thailand.',
    price: 79,
    maxGroupSize: 8,
    desc: "The Thai highlands or Hills of northern Thailand is a mountainous natural region in the north of Thailand.",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
