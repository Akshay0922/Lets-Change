import {
  FaSpa, FaCut, FaBath
} from "react-icons/fa";

// FACIAL CARE

// Home Remedies
import FacialHoneyLemon from '../../../assets/contentImages/facialCare/homeRemedies/facialHoneyLemon.png';
import FacialAloeveraGel from '../../../assets/contentImages/facialCare/homeRemedies/facialAloeveraGel.png';
import FacialMultaniMitti from '../../../assets/contentImages/facialCare/homeRemedies/facialMultaniMitti.png';
import FacialTurmericYogurtPack from '../../../assets/contentImages/facialCare/homeRemedies/facialTurmericYogurt.jpg';
import FacialCucumberMask from '../../../assets/contentImages/facialCare/homeRemedies/facialCucumberMask.jpg';

// Yoga & Meditation
import FacialCheekLift from '../../../assets/contentImages/facialCare/yogaAndMeditation/facialCheekLift.jpg';
import FacialJawRelease from '../../../assets/contentImages/facialCare/yogaAndMeditation/facialJawRelease.jpg';
import FacialEyebrowLift from '../../../assets/contentImages/facialCare/yogaAndMeditation/facialEyebrowLift.jpg';

// Exercises
import FacialSmileStretch from '../../../assets/contentImages/facialCare/exercises/facialSmileStretch.jpg';
import FacialChinLift from '../../../assets/contentImages/facialCare/exercises/facialChinLift.jpg';
import FacialFishFace from '../../../assets/contentImages/facialCare/exercises/facialFishFace.jpg';

// Products
import FacialHimalayaAloeveraGel from '../../../assets/contentImages/facialCare/products/facialHimalayaAloeveraGel.png';
import FacialGulabariRoseWater from '../../../assets/contentImages/facialCare/products/facialGulabariRoseWater.png';
import FacialPureHerbalMultani from '../../../assets/contentImages/facialCare/products/facialPureHerbalMultani.png';
import FacialSauvasineTurmericCream from '../../../assets/contentImages/facialCare/products/facialSauvasineTurmericCream.png';




// HAIR CARE

// Home Remedies
import HairCoconutOil from '../../../assets/contentImages/hairCare/homeRemedies/hairCoconutOil.jpg';
import HairHotWater from '../../../assets/contentImages/hairCare/homeRemedies/hairHotWater.jpg';
import HairAloeveraGel from '../../../assets/contentImages/hairCare/homeRemedies/hairAloeveraGel.png';
import HairOnionJuice from '../../../assets/contentImages/hairCare/homeRemedies/hairOnionJuice.jpg';

// Yoga & Meditation
import HairScalpMassage from '../../../assets/contentImages/hairCare/yogaAndMeditation/hairScalpMassage.jpg';
import HairBalayam from '../../../assets/contentImages/hairCare/yogaAndMeditation/hairBalayam.png';

// Products
import HairParachuteCoconutOil from '../../../assets/contentImages/hairCare/products/hairParachuteCoconutOil.png';
import HairHimalayaAloeveraGel from '../../../assets/contentImages/hairCare/products/HairHimalayaAloeveraGel.png';
import HairMamaearthHerbalShampoo from '../../../assets/contentImages/hairCare/products/HairMamaearthHerbalShampoo.png';
import HairMamaearthOnionOil from '../../../assets/contentImages/hairCare/products/HairMamaearthOnionOil.png';



// BODY CARE

// Home Remedies
import BodyUbtanPack from '../../../assets/contentImages/bodyCare/homeRemedies/bodyUbtanPack.jpg';
import BodyCoconutOilMassage from '../../../assets/contentImages/bodyCare/homeRemedies/bodyCoconutOilMassage.jpg';
import BodySugarAndOliveOil from '../../../assets/contentImages/bodyCare/homeRemedies/bodySugarAndOliveOil.jpg';

// Yoga & Meditation
import BodySuryaNamaskar from '../../../assets/contentImages/bodyCare/yogaAndMeditation/bodySuryaNamaskar.jpg';
import BodyBalasana from '../../../assets/contentImages/bodyCare/yogaAndMeditation/bodyBalasana.jpg';

// Exercises
import BodyPushUps from '../../../assets/contentImages/bodyCare/exercises/bodyPushUps.jpg';
import BodySquats from '../../../assets/contentImages/bodyCare/exercises/bodySquats.jpg';
import BodyPlank from '../../../assets/contentImages/bodyCare/exercises/bodyPlank.jpg';

// Products
import BodyJoyUbtan from '../../../assets/contentImages/bodyCare/products/bodyJoyUbtan.png';
import BodyDoveScrub from '../../../assets/contentImages/bodyCare/products/bodyDoveScrub.png';
import BodyJoyMosturizingLotion from '../../../assets/contentImages/bodyCare/products/bodyJoyMosturizingLotion.png';
import BodyParachuteCoconutOil from '../../../assets/contentImages/bodyCare/products/bodyParachuteCoconutOil.png';


export const changeData = {
  1: {
    title: "Facial Care",
    icon: <FaSpa />,
    homeRemedies: [
      {
        step: "Honey & Lemon Mask",
        description: "Apply 2 times a week",
        image: FacialHoneyLemon,
        video: "https://www.youtube.com/embed/Ff0H_l9zYPg?si=RZp6sp4e1EkTwesT",
        steps: [
          "Mix 1 spoon honey with 1 spoon lemon juice",
          "Apply evenly on face",
          "Leave for 15 minutes",
          "Wash with lukewarm water"
        ]
      },
      {
        step: "Aloe Vera Gel Mask",
        description: "Use daily for hydration",
        image: FacialAloeveraGel,
        video: "https://www.youtube.com/embed/QtfZ2PZI3Ng?si=1XK3G7yOT7JOo7kL",
        steps: [
          "Cut a fresh aloe vera leaf and extract the gel.",
          "Cleanse your face with mild face wash.",
          "Apply a thin layer of aloe vera gel evenly on the face.",
          "Leave it for 15–20 minutes.",
          "Wash off with lukewarm water and pat dry."
        ]
      },
      {
        step: "Multani Mitti Face Pack",
        description: "Apply once a week for oil control & glow",
        image: FacialMultaniMitti,
        video: "https://www.youtube.com/embed/DSrprLJADLI?si=JeJi-Zm6Cwt1p88l",
        steps: [
          "Take 2 tablespoons of Multani Mitti (Fuller's Earth) in a bowl.",
          "Add rose water or plain water to make a smooth paste.",
          "Cleanse your face properly before application.",
          "Apply the pack evenly on face and neck, avoiding eyes & lips.",
          "Leave it to dry for 15–20 minutes.",
          "Rinse with cool water and pat dry with a soft towel.",
          "Use once a week for best results."
        ]
      },
      {
        step: "Turmeric & Yogurt Pack",
        description: "For brightening & acne control",
        image: FacialTurmericYogurtPack,
        video: "https://www.youtube.com/embed/VkuW0f2VL94?si=QHHyTrSx1syvpJRs",
        steps: [
          "Mix 1 teaspoon turmeric with 2 teaspoons yogurt.",
          "Apply evenly on face and neck.",
          "Leave for 10–15 minutes.",
          "Rinse off with lukewarm water."
        ]
      },
      {
        step: "Cucumber Cooling Mask",
        description: "For soothing skin & reducing puffiness",
        image: FacialCucumberMask,
        video: "https://www.youtube.com/embed/ufbGbWbjAok?si=15DWwyW-Zi0ymnfv",
        steps: [
          "Grind half cucumber into a smooth paste.",
          "Apply on face, especially under the eyes.",
          "Leave it for 20 minutes.",
          "Rinse with cool water."
        ]
      }
    ],

    yoga: [
      {
        step: "Cheek Lift",
        duration: "5 min",
        image: FacialCheekLift,
        video: "https://www.youtube.com/embed/2JJ72BnxWMw?si=KbvqnidTjIh2slii",
        steps: [
          "Sit comfortably with a straight spine.",
          "Smile as wide as you can, keeping lips closed.",
          "Lift your cheeks upwards using your fingers for support.",
          "Hold the position for 10 seconds.",
          "Relax and repeat 5–6 times."
        ]
      },
      {
        step: "Jaw Release",
        duration: "5 min",
        image: FacialJawRelease,
        video: "https://www.youtube.com/embed/yFLp1jjvOT4?si=XHp5ovOOS8JziA47",
        steps: [
          "Sit or stand with a straight spine.",
          "Move your jaw up and down slowly as if chewing.",
          "Open your mouth wide and hold for 5 seconds.",
          "Repeat the motion 10–15 times.",
          "Relax your facial muscles."
        ]
      },
      {
        step: "Eyebrow Lifts",
        duration: "5 min",
        image: FacialEyebrowLift,
        video: "https://www.youtube.com/embed/JMaL3unax58?si=kA3gENnH4L_89D65",
        steps: [
          "Place index fingers just above eyebrows.",
          "Lift eyebrows upward while applying gentle resistance.",
          "Hold for 5 seconds, then relax.",
          "Repeat 10 times for firm forehead muscles."
        ]
      }
    ],

    exercises: [
      {
        step: "Smile Stretch",
        duration: "5 min",
        image: FacialSmileStretch,
        steps: [
          "Sit straight and take a deep breath.",
          "Smile as wide as possible.",
          "Hold for 10 seconds while feeling the stretch in cheeks.",
          "Relax and repeat 10 times."
        ]
      },
      {
        step: "Chin Lifts",
        duration: "5 min",
        image: FacialChinLift,
        video: "https://www.youtube.com/embed/RVTnQMtBGTU?si=UPSIjYoHN87wd5WV",
        steps: [
          "Stand or sit with spine straight.",
          "Tilt your head backward and look at the ceiling.",
          "Purse your lips as if trying to kiss the ceiling.",
          "Hold for 5–10 seconds.",
          "Repeat 8–10 times to tone chin and neck area."
        ]
      },
      {
        step: "Fish Face Exercise",
        duration: "5 min",
        image: FacialFishFace,
        video: "https://www.youtube.com/embed/mLYm4ItAuro?si=wFubA4sr6yjGSPYb",
        steps: [
          "Suck in your cheeks and lips to make a fish face.",
          "Try smiling while holding the position.",
          "Hold for 5 seconds and release.",
          "Repeat 8–10 times to tone cheeks."
        ]
      },
    ],

    products: [
      {
        name: " Himalaya Aloevera Face Gel",
        image: FacialHimalayaAloeveraGel,
        price: 249,
        displayPrice: "₹249",
      },
      {
        name: "Gulabari Rose Water",
        image: FacialGulabariRoseWater,
        price: 199,
        displayPrice: "₹199",
      },
      {
        name: "Pure Herbal Face Pack (Multani Mitti)",
        image: FacialPureHerbalMultani,
        price: 299,
        displayPrice: "₹299",
      },
      {
        name: "Sauvasine Turmeric Face Cream",
        image: FacialSauvasineTurmericCream,
        price: 349,
        displayPrice: "₹349",
      }
    ]
  },

  2: {
    title: "Hair Care",
    icon: <FaCut />,
    homeRemedies: [
      {
        step: "Coconut Oil Massage",
        description: "Twice a week",
        image: HairCoconutOil,
        video: "https://www.youtube.com/embed/JufMZB5o06w?si=PS4DNkHjP544sVxL",
        steps: [
          "Warm 2-3 tablespoons of coconut oil.",
          "Gently massage onto your scalp for 5-10 minutes.",
          "Leave it on for at least 1 hour or overnight for best results.",
          "Wash hair with mild shampoo."
        ]
      },
      {
        step: "Avoid Hot Water",
        description: "While washing hair",
        image: HairHotWater,
        video: "https://www.youtube.com/embed/YFchcrt_Zxg?si=NOcQnxk2nQrmdSij",
        steps: [
          "Use lukewarm or cold water instead of hot water.",
          "Rinse hair gently to prevent damage.",
          "Apply conditioner if needed for smoothness."
        ]
      },
      {
        step: "Aloe Vera Gel",
        description: "Natural conditioner",
        image: HairAloeveraGel,
        video: "https://www.youtube.com/embed/bRng1Pm4iEs?si=9DANaPNQ50hi0LBZ",
        steps: [
          "Extract fresh aloe vera gel.",
          "Apply directly onto scalp and hair strands.",
          "Leave it for 30–45 minutes.",
          "Rinse with lukewarm water."
        ]
      },
      {
        step: "Onion Juice",
        description: "For hair growth",
        image: HairOnionJuice,
        video: "https://www.youtube.com/embed/S3bbNcDJjnc?si=WuwwN4czVv7Emf78",
        steps: [
          "Grind and extract juice from 1 onion.",
          "Apply juice to scalp with cotton.",
          "Leave it for 15–20 minutes.",
          "Wash off with mild shampoo to remove smell."
        ]
      }
    ],

    yoga: [
      {
        step: "Scalp Massage",
        duration: "5 min",
        image: HairScalpMassage,
        video: "https://www.youtube.com/embed/78wqGMVKTD0?si=tDUq6tj7Ot4nGugw",
        steps: [
          "Sit comfortably with a straight back.",
          "Use your fingertips to gently massage the scalp in circular motions.",
          "Cover all areas of the scalp, including temples and back of the head.",
          "Perform for 5 minutes daily for improved blood circulation."
        ]
      },
      {
        step: "Balayam Yoga",
        duration: "10 min",
        image: HairBalayam,
        video: "https://www.youtube.com/embed/LK2QmIo2elc?si=56YTbB7Nx178_hud",
        steps: [
          "Sit in a comfortable position.",
          "Rub fingernails of both hands against each other vigorously (except the thumbs).",
          "Do this for 5–10 minutes daily.",
          "This stimulates hair follicles and promotes hair growth."
        ]
      }
    ],

    products: [
      {
        name: "Parachute Coconut Oil",
        image: HairParachuteCoconutOil,
        price: 299,
        displayPrice: "₹299",
      },
      {
        name: "Himalaya Aloevera Gel",
        image: HairHimalayaAloeveraGel,
        price: 199,
        displayPrice: "₹199",
      },
      {
        name: "Herbal Shampoo",
        image: HairMamaearthHerbalShampoo,
        price: 349,
        displayPrice: "₹349",
      },
      {
        name: "Onion Hair Oil",
        image: HairMamaearthOnionOil,
        price: 399,
        displayPrice: "₹399",
      }
    ]
  },

  3: {
    title: "Body Care",
    icon: <FaBath />,
    homeRemedies: [
      {
        step: "Ubtan (Herbal Body Pack)",
        description: "Weekly natural exfoliation",
        image: BodyUbtanPack,
        video: "https://www.youtube.com/embed/NcAuJAfcG-k?si=UQH3hV0m9Y7dYSOh",
        steps: [
          "Mix 2 tbsp gram flour, 1 tbsp turmeric, 1 tbsp sandalwood powder, and rose water.",
          "Apply paste on whole body before bath.",
          "Leave it for 15–20 minutes.",
          "Scrub gently and wash off with lukewarm water."
        ]
      },
      {
        step: "Coconut Oil Massage",
        description: "Daily before bath",
        image: BodyCoconutOilMassage,
        video: "https://www.youtube.com/embed/MAcdUeAue9s?si=GUyWW33UHO1wyQz5",
        steps: [
          "Take warm coconut oil in a bowl.",
          "Massage gently on arms, legs, and back for 10–15 minutes.",
          "Leave for 30 minutes before bath.",
          "Helps in moisturizing and improving blood circulation."
        ]
      },
      {
        step: "Sugar & Olive Oil Scrub",
        description: "Twice a week for smooth skin",
        image: BodySugarAndOliveOil,
        video: "https://www.youtube.com/embed/FiSnZYpzwa8?si=zu9irWtIh1B2RiQE",
        steps: [
          "Mix 2 tbsp sugar with 1 tbsp olive oil.",
          "Apply on body areas with dry skin.",
          "Scrub gently in circular motion for 5 minutes.",
          "Rinse off with lukewarm water."
        ]
      }
    ],

    yoga: [
      {
        step: "Surya Namaskar",
        duration: "10 min",
        image: BodySuryaNamaskar,
        video: "https://www.youtube.com/embed/AneOlb4dAZU?si=VBoseKVRtMT0ED_t",
        steps: [
          "Stand straight and join palms together in prayer pose.",
          "Perform 12 asanas (postures) in sequence with breathing.",
          "Repeat 3–5 rounds daily for flexibility and body detox."
        ]
      },
      {
        step: "Child’s Pose (Balasana)",
        duration: "5 min",
        image: BodyBalasana,
        video: "https://www.youtube.com/embed/2MJGg-dUKh0?si=h6zd1Pt3fNxE61DF",
        steps: [
          "Kneel down and sit on heels.",
          "Bend forward, stretching arms in front.",
          "Keep forehead on floor and relax body.",
          "Stay for 2–3 minutes to reduce stress."
        ]
      }
    ],

    exercises: [
      {
        step: "Push-Ups",
        duration: "5 min",
        image: BodyPushUps,
        video: "https://www.youtube.com/embed/I9fsqKE5XHo?si=zginy6Cw_XbfaNuz",
        steps: [
          "Lie face down on the floor.",
          "Place hands shoulder-width apart.",
          "Push your body up keeping back straight.",
          "Lower down slowly and repeat 10–15 times."
        ]
      },
      {
        step: "Squats",
        duration: "5 min",
        image: BodySquats,
        video: "https://www.youtube.com/embed/HFnSsLIB7a4?si=oyDxNUaSi8nuuGMW",
        steps: [
          "Stand with feet shoulder-width apart.",
          "Bend knees and lower hips as if sitting on a chair.",
          "Keep back straight and arms forward.",
          "Return to standing position and repeat 12–15 times."
        ]
      },
      {
        step: "Plank Hold",
        duration: "3 min",
        image: BodyPlank,
        video: "https://www.youtube.com/embed/A2b2EmIg0dA?si=hGd6v1O7I8mCSPUD",
        steps: [
          "Lie face down and lift body on elbows and toes.",
          "Keep back straight and core tight.",
          "Hold the position for 30–60 seconds.",
          "Repeat 3 times."
        ]
      }
    ],

    products: [
      {
        name: "Joy Herbal Body Ubtan",
        image: BodyJoyUbtan,
        price: 349,
        displayPrice: "₹349",
      },
      {
        name: "Parachute Coconut Oil",
        image: BodyParachuteCoconutOil,
        price: 299,
        displayPrice: "₹299",
      },
      {
        name: "Dove Natural Body Scrub",
        image: BodyDoveScrub,
        price: 399,
        displayPrice: "₹399",
      },
      {
        name: "Joy Moisturizing Body Lotion",
        image: BodyJoyMosturizingLotion,
        price: 449,
        displayPrice: "₹449",
      }
    ]
  }
};