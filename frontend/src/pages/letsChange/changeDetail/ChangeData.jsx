import {
  FaSpa, FaCut, FaBrain
} from "react-icons/fa";

// FACIAL CARE
import FacialHoney from '../../../assets/contentImages/facialCare/honeyLemon.png';
import AloeveraGel from '../../../assets/contentImages/facialCare/aloeveraGel.png';
import MultaniMitti from '../../../assets/contentImages/facialCare/multaniMitti.png';
import CheekLift from '../../../assets/contentImages/facialCare/cheekLift.png';
import JawRelease from '../../../assets/contentImages/facialCare/jawRelease.jpg';

// HAIR CARE
import CoconutOil from '../../../assets/contentImages/hairCare/coconutOil.jpg';
import TenderCoconutOil from '../../../assets/contentImages/hairCare/tenderCoconutOil.jpg';
import HotWater from '../../../assets/contentImages/hairCare/hotWater.jpg';
import ScalpMassage from '../../../assets/contentImages/hairCare/scalpMassage.jpg';

export const changeData = {
  1: {
    title: "Facial Care",
    icon: <FaSpa />,
    homeRemedies: [
      {
        step: "Honey & Lemon Mask",
        description: "Apply 2 times a week",
        image: FacialHoney,
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
        image: AloeveraGel,
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
        image: MultaniMitti,
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
      }
    ],
    yoga: [
      {
        step: "Cheek Lift",
        duration: "5 min",
        image: CheekLift,
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
        image: JawRelease,
        video: "https://www.youtube.com/embed/yFLp1jjvOT4?si=XHp5ovOOS8JziA47",
        steps: [
          "Sit or stand with a straight spine.",
          "Move your jaw up and down slowly as if chewing.",
          "Open your mouth wide and hold for 5 seconds.",
          "Repeat the motion 10–15 times.",
          "Relax your facial muscles."
        ]
      }
    ],
  },

  2: {
    title: "Hair Care",
    icon: <FaCut />,
    homeRemedies: [
      {
        step: "Coconut Oil Massage",
        description: "Twice a week",
        image: CoconutOil,
        video: "https://www.youtube.com/embed/XXXX7",
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
        image: HotWater,
        video: "https://www.youtube.com/embed/XXXX8",
        steps: [
          "Use lukewarm or cold water instead of hot water.",
          "Rinse hair gently to prevent damage.",
          "Apply conditioner if needed for smoothness."
        ]
      }
    ],

    yoga: [
      {
        step: "Scalp Massage",
        duration: "5 min",
        image: ScalpMassage,
        video: "https://www.youtube.com/embed/XXXX9",
        steps: [
          "Sit comfortably with a straight back.",
          "Use your fingertips to gently massage the scalp in circular motions.",
          "Cover all areas of the scalp, including temples and back of the head.",
          "Perform for 5 minutes daily for improved blood circulation."
        ]
      },
      {
        step: "Neck Rotations",
        duration: "5 min",
        image: "NeckRotation",
        video: "https://www.youtube.com/embed/XXXX10",
        steps: [
          "Sit or stand with a straight back.",
          "Slowly rotate your neck clockwise in a full circle.",
          "Then rotate counter-clockwise.",
          "Repeat 5 times in each direction to relax neck muscles."
        ]
      }
    ],
    exercises: [
      {
        step: "Neck Stretches",
        duration: "5 min",
        image: "NeckStretches",
        video: "https://www.youtube.com/embed/XXXX11"
      },
      {
        step: "Posture Improvement",
        duration: "10 min",
        image: "PostureImprovement",
        video: "https://www.youtube.com/embed/XXXX12"
      }
    ],
    products: [
      {
        name: "Tender Coconut Oil",
        image: TenderCoconutOil,
        price: 299,
        displayPrice: "₹299",
      },
    ]
  },

  3: {
    title: "Mental Wellness",
    icon: <FaBrain />,
    homeRemedies: [
      {
        step: "Meditation",
        description: "10 min daily",
        image: "MentalWellness",
        video: "https://www.youtube.com/embed/XXXX25"
      },
      {
        step: "Journaling",
        description: "Write thoughts daily",
        image: "Journaling",
        video: "https://www.youtube.com/embed/XXXX26"
      }
    ],
    yoga: [
      {
        step: "Breathing Exercises",
        duration: "5 min",
        image: "BreathingExercise",
        video: "https://www.youtube.com/embed/XXXX27"
      },
      {
        step: "Mindfulness Pose",
        duration: "10 min",
        image: "MindfulnessPose",
        video: "https://www.youtube.com/embed/XXXX28"
      }
    ],
    exercises: [
      {
        step: "Walking Meditation",
        duration: "15 min",
        image: "WalkingMeditation",
        video: "https://www.youtube.com/embed/XXXX29"
      },
      {
        step: "Stretching",
        duration: "5 min",
        image: "Stretching",
        video: "https://www.youtube.com/embed/XXXX30"
      }
    ]
  }
};