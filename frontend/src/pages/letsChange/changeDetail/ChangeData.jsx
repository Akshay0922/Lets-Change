import {
  FaSpa, FaCut, FaLeaf, FaHeartbeat, FaBrain, FaRunning,
  FaAppleAlt, FaPrayingHands, FaBed, FaSmile, FaSun, FaWater,
  FaFire, FaDumbbell, FaSeedling, FaBook, FaLightbulb, FaHandsHelping,
  FaFeatherAlt, FaGrinStars, FaUserCheck, FaBalanceScale, FaShieldAlt, FaHeart
} from "react-icons/fa";

// FACIAL CARE
import FacialHoney from '../../../assets/contentImages/facialCare/honeyLemon.png';
import AloeveraGel from '../../../assets/contentImages/facialCare/aloeveraGel.png';
import MultaniMitti from '../../../assets/contentImages/facialCare/multaniMitti.png';
import CheekLift from '../../../assets/contentImages/facialCare/cheekLift.png';
import JawRelease from '../../../assets/contentImages/facialCare/jawRelease.jpg';

// HAIR CARE
import CoconutOil from '../../../assets/contentImages/hairCare/coconutOil.jpg';
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
        image: "/images/yoga-hair2.jpg",
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
        image: "/images/exercise-hair1.jpg",
        video: "https://www.youtube.com/embed/XXXX11"
      },
      {
        step: "Posture Improvement",
        duration: "10 min",
        image: "/images/exercise-hair2.jpg",
        video: "https://www.youtube.com/embed/XXXX12"
      }
    ]
  },




  3: {
    title: "Body Care",
    icon: <FaLeaf />,
    homeRemedies: [
      {
        step: "Herbal Body Scrub",
        description: "Exfoliate 2x a week",
        image: "/images/body1.jpg",
        video: "https://www.youtube.com/embed/XXXX13"
      },
      {
        step: "Moisturizing Oil",
        description: "Daily application",
        image: "/images/body2.jpg",
        video: "https://www.youtube.com/embed/XXXX14"
      }
    ],
    yoga: [
      {
        step: "Full Body Stretch",
        duration: "10 min",
        image: "/images/yoga-body1.jpg",
        video: "https://www.youtube.com/embed/XXXX15"
      },
      {
        step: "Cat-Cow Pose",
        duration: "5 min",
        image: "/images/yoga-body2.jpg",
        video: "https://www.youtube.com/embed/XXXX16"
      }
    ],
    exercises: [
      {
        step: "Jumping Jacks",
        duration: "5 min",
        image: "/images/exercise-body1.jpg",
        video: "https://www.youtube.com/embed/XXXX17"
      },
      {
        step: "Light Cardio",
        duration: "15 min",
        image: "/images/exercise-body2.jpg",
        video: "https://www.youtube.com/embed/XXXX18"
      }
    ]
  },




  4: {
    title: "Physical Health",
    icon: <FaHeartbeat />,
    homeRemedies: [
      {
        step: "Balanced Diet",
        description: "Include proteins & veggies",
        image: "/images/health1.jpg",
        video: "https://www.youtube.com/embed/XXXX19"
      },
      {
        step: "Hydration",
        description: "Drink 2-3 liters water",
        image: "/images/health2.jpg",
        video: "https://www.youtube.com/embed/XXXX20"
      }
    ],
    yoga: [
      {
        step: "Sun Salutation",
        duration: "10 min",
        image: "/images/yoga-health1.jpg",
        video: "https://www.youtube.com/embed/XXXX21"
      },
      {
        step: "Tree Pose",
        duration: "5 min",
        image: "/images/yoga-health2.jpg",
        video: "https://www.youtube.com/embed/XXXX22"
      }
    ],
    exercises: [
      {
        step: "Push-ups",
        duration: "10 min",
        image: "/images/exercise-health1.jpg",
        video: "https://www.youtube.com/embed/XXXX23"
      },
      {
        step: "Squats",
        duration: "10 min",
        image: "/images/exercise-health2.jpg",
        video: "https://www.youtube.com/embed/XXXX24"
      }
    ]
  },




  5: {
    title: "Mental Wellness",
    icon: <FaBrain />,
    homeRemedies: [
      { step: "Meditation", description: "10 min daily", image: "/images/mental1.jpg", video: "https://www.youtube.com/embed/XXXX25" },
      { step: "Journaling", description: "Write thoughts daily", image: "/images/mental2.jpg", video: "https://www.youtube.com/embed/XXXX26" }
    ],
    yoga: [
      { step: "Breathing Exercises", duration: "5 min", image: "/images/yoga-mental1.jpg", video: "https://www.youtube.com/embed/XXXX27" },
      { step: "Mindfulness Pose", duration: "10 min", image: "/images/yoga-mental2.jpg", video: "https://www.youtube.com/embed/XXXX28" }
    ],
    exercises: [
      { step: "Walking Meditation", duration: "15 min", image: "/images/exercise-mental1.jpg", video: "https://www.youtube.com/embed/XXXX29" },
      { step: "Stretching", duration: "5 min", image: "/images/exercise-mental2.jpg", video: "https://www.youtube.com/embed/XXXX30" }
    ]
  },

  6: {
    title: "Lifestyle Change",
    icon: <FaRunning />,
    homeRemedies: [
      { step: "Early Sleep", description: "Go to bed before 11 PM", image: "/images/lifestyle1.jpg", video: "https://www.youtube.com/embed/XXXX31" },
      { step: "Avoid Junk Food", description: "Limit processed food", image: "/images/lifestyle2.jpg", video: "https://www.youtube.com/embed/XXXX32" }
    ],
    yoga: [
      { step: "Morning Yoga Flow", duration: "15 min", image: "/images/yoga-lifestyle1.jpg", video: "https://www.youtube.com/embed/XXXX33" },
      { step: "Evening Relaxation Pose", duration: "10 min", image: "/images/yoga-lifestyle2.jpg", video: "https://www.youtube.com/embed/XXXX34" }
    ],
    exercises: [
      { step: "Daily Walk", duration: "30 min", image: "/images/exercise-lifestyle1.jpg", video: "https://www.youtube.com/embed/XXXX35" },
      { step: "Light Cardio", duration: "15 min", image: "/images/exercise-lifestyle2.jpg", video: "https://www.youtube.com/embed/XXXX36" }
    ]
  },

  7: {
    title: "Healthy Diet",
    icon: <FaAppleAlt />,
    homeRemedies: [
      { step: "Vegetable Juices", description: "Include daily", image: "/images/diet1.jpg", video: "https://www.youtube.com/embed/XXXX37" },
      { step: "Protein Intake", description: "Add eggs, pulses", image: "/images/diet2.jpg", video: "https://www.youtube.com/embed/XXXX38" }
    ],
    yoga: [
      { step: "Breathing Pose", duration: "5 min", image: "/images/yoga-diet1.jpg", video: "https://www.youtube.com/embed/XXXX39" },
      { step: "Seated Twist", duration: "5 min", image: "/images/yoga-diet2.jpg", video: "https://www.youtube.com/embed/XXXX40" }
    ],
    exercises: [
      { step: "Core Strengthening", duration: "10 min", image: "/images/exercise-diet1.jpg", video: "https://www.youtube.com/embed/XXXX41" },
      { step: "Light Jogging", duration: "20 min", image: "/images/exercise-diet2.jpg", video: "https://www.youtube.com/embed/XXXX42" }
    ]
  },

  8: {
    title: "Yoga & Meditation",
    icon: <FaPrayingHands />,
    homeRemedies: [
      { step: "Warm Lemon Water", description: "Morning routine", image: "/images/yoga1.jpg", video: "https://www.youtube.com/embed/XXXX43" },
      { step: "Herbal Tea", description: "Evening relaxation", image: "/images/yoga2.jpg", video: "https://www.youtube.com/embed/XXXX44" }
    ],
    yoga: [
      { step: "Sun Salutation", duration: "15 min", image: "/images/yoga-flow1.jpg", video: "https://www.youtube.com/embed/XXXX45" },
      { step: "Tree Pose", duration: "5 min", image: "/images/yoga-flow2.jpg", video: "https://www.youtube.com/embed/XXXX46" },
      { step: "Child Pose", duration: "5 min", image: "/images/yoga-flow3.jpg", video: "https://www.youtube.com/embed/XXXX47" }
    ],
    exercises: [
      { step: "Pranayama", duration: "10 min", image: "/images/exercise-yoga1.jpg", video: "https://www.youtube.com/embed/XXXX48" },
      { step: "Stretching", duration: "10 min", image: "/images/exercise-yoga2.jpg", video: "https://www.youtube.com/embed/XXXX49" }
    ]
  },

  9: {
    title: "Sleep Care",
    icon: <FaBed />,
    homeRemedies: [
      { step: "Avoid Screens", description: "1 hour before bed", image: "/images/sleep1.jpg", video: "https://www.youtube.com/embed/XXXX50" },
      { step: "Warm Milk", description: "Optional nightly", image: "/images/sleep2.jpg", video: "https://www.youtube.com/embed/XXXX51" }
    ],
    yoga: [
      { step: "Legs-Up Pose", duration: "5 min", image: "/images/yoga-sleep1.jpg", video: "https://www.youtube.com/embed/XXXX52" },
      { step: "Relaxation Pose", duration: "10 min", image: "/images/yoga-sleep2.jpg", video: "https://www.youtube.com/embed/XXXX53" }
    ],
    exercises: [
      { step: "Light Stretching", duration: "5 min", image: "/images/exercise-sleep1.jpg", video: "https://www.youtube.com/embed/XXXX54" },
      { step: "Deep Breathing", duration: "5 min", image: "/images/exercise-sleep2.jpg", video: "https://www.youtube.com/embed/XXXX55" }
    ]
  },

  10: {
    title: "Stress Relief",
    icon: <FaSmile />,
    homeRemedies: [
      { step: "Herbal Tea", description: "Chamomile or Green Tea", image: "/images/stress1.jpg", video: "https://www.youtube.com/embed/XXXX56" },
      { step: "Journaling", description: "10 min daily", image: "/images/stress2.jpg", video: "https://www.youtube.com/embed/XXXX57" }
    ],
    yoga: [
      { step: "Meditation Pose", duration: "10 min", image: "/images/yoga-stress1.jpg", video: "https://www.youtube.com/embed/XXXX58" },
      { step: "Breathing Exercise", duration: "5 min", image: "/images/yoga-stress2.jpg", video: "https://www.youtube.com/embed/XXXX59" }
    ],
    exercises: [
      { step: "Walking", duration: "15 min", image: "/images/exercise-stress1.jpg", video: "https://www.youtube.com/embed/XXXX60" },
      { step: "Stretching", duration: "10 min", image: "/images/exercise-stress2.jpg", video: "https://www.youtube.com/embed/XXXX61" }
    ]
  },

  11: {
    title: "Skin Glow",
    icon: <FaSun />,
    homeRemedies: [
      { step: "Aloe Face Pack", description: "3 times a week", image: "/images/skin1.jpg", video: "https://www.youtube.com/embed/XXXX62" },
      { step: "Hydration", description: "Drink plenty of water", image: "/images/skin2.jpg", video: "https://www.youtube.com/embed/XXXX63" }
    ],
    yoga: [
      { step: "Face Massage Pose", duration: "5 min", image: "/images/yoga-skin1.jpg", video: "https://www.youtube.com/embed/XXXX64" },
      { step: "Neck Stretches", duration: "5 min", image: "/images/yoga-skin2.jpg", video: "https://www.youtube.com/embed/XXXX65" }
    ],
    exercises: [
      { step: "Cardio", duration: "15 min", image: "/images/exercise-skin1.jpg", video: "https://www.youtube.com/embed/XXXX66" },
      { step: "Light Jog", duration: "10 min", image: "/images/exercise-skin2.jpg", video: "https://www.youtube.com/embed/XXXX67" }
    ]
  },

  12: {
    title: "Hydration",
    icon: <FaWater />,
    homeRemedies: [
      { step: "Water Intake", description: "2-3 liters daily", image: "/images/hydration1.jpg", video: "https://www.youtube.com/embed/XXXX68" },
      { step: "Fruits", description: "High water content", image: "/images/hydration2.jpg", video: "https://www.youtube.com/embed/XXXX69" }
    ],
    yoga: [
      { step: "Morning Stretch", duration: "5 min", image: "/images/yoga-hydration1.jpg", video: "https://www.youtube.com/embed/XXXX70" },
      { step: "Breathing Pose", duration: "5 min", image: "/images/yoga-hydration2.jpg", video: "https://www.youtube.com/embed/XXXX71" }
    ],
    exercises: [
      { step: "Walk", duration: "15 min", image: "/images/exercise-hydration1.jpg", video: "https://www.youtube.com/embed/XXXX72" },
      { step: "Light Cardio", duration: "10 min", image: "/images/exercise-hydration2.jpg", video: "https://www.youtube.com/embed/XXXX73" }
    ]
  },

  13: {
    title: "Weight Management",
    icon: <FaFire />,
    homeRemedies: [
      { step: "Green Tea", description: "Twice a day", image: "/images/weight1.jpg", video: "https://www.youtube.com/embed/XXXX74" },
      { step: "Lemon Water", description: "Morning routine", image: "/images/weight2.jpg", video: "https://www.youtube.com/embed/XXXX75" }
    ],
    yoga: [
      { step: "Warrior Pose", duration: "10 min", image: "/images/yoga-weight1.jpg", video: "https://www.youtube.com/embed/XXXX76" },
      { step: "Bridge Pose", duration: "5 min", image: "/images/yoga-weight2.jpg", video: "https://www.youtube.com/embed/XXXX77" }
    ],
    exercises: [
      { step: "Skipping", duration: "15 min", image: "/images/exercise-weight1.jpg", video: "https://www.youtube.com/embed/XXXX78" },
      { step: "Crunches", duration: "10 min", image: "/images/exercise-weight2.jpg", video: "https://www.youtube.com/embed/XXXX79" }
    ]
  },

  14: {
    title: "Strength Training",
    icon: <FaDumbbell />,
    homeRemedies: [
      { step: "Protein Smoothie", description: "Post workout", image: "/images/strength1.jpg", video: "https://www.youtube.com/embed/XXXX80" },
      { step: "Almonds", description: "Daily intake", image: "/images/strength2.jpg", video: "https://www.youtube.com/embed/XXXX81" }
    ],
    yoga: [
      { step: "Plank Pose", duration: "5 min", image: "/images/yoga-strength1.jpg", video: "https://www.youtube.com/embed/XXXX82" },
      { step: "Chair Pose", duration: "5 min", image: "/images/yoga-strength2.jpg", video: "https://www.youtube.com/embed/XXXX83" }
    ],
    exercises: [
      { step: "Push-ups", duration: "10 min", image: "/images/exercise-strength1.jpg", video: "https://www.youtube.com/embed/XXXX84" },
      { step: "Lunges", duration: "10 min", image: "/images/exercise-strength2.jpg", video: "https://www.youtube.com/embed/XXXX85" }
    ]
  },

  15: {
    title: "Detox & Cleansing",
    icon: <FaSeedling />,
    homeRemedies: [
      { step: "Detox Water", description: "Cucumber + Mint", image: "/images/detox1.jpg", video: "https://www.youtube.com/embed/XXXX86" },
      { step: "Fasting", description: "Once a week", image: "/images/detox2.jpg", video: "https://www.youtube.com/embed/XXXX87" }
    ],
    yoga: [
      { step: "Twist Pose", duration: "5 min", image: "/images/yoga-detox1.jpg", video: "https://www.youtube.com/embed/XXXX88" },
      { step: "Breathing Cleanse", duration: "10 min", image: "/images/yoga-detox2.jpg", video: "https://www.youtube.com/embed/XXXX89" }
    ],
    exercises: [
      { step: "Sweat Cardio", duration: "15 min", image: "/images/exercise-detox1.jpg", video: "https://www.youtube.com/embed/XXXX90" },
      { step: "Jump Rope", duration: "10 min", image: "/images/exercise-detox2.jpg", video: "https://www.youtube.com/embed/XXXX91" }
    ]
  },

  16: {
    title: "Knowledge Growth",
    icon: <FaBook />,
    homeRemedies: [
      { step: "Read Daily", description: "30 mins", image: "/images/knowledge1.jpg", video: "https://www.youtube.com/embed/XXXX92" },
      { step: "Limit Social Media", description: "Increase focus", image: "/images/knowledge2.jpg", video: "https://www.youtube.com/embed/XXXX93" }
    ],
    yoga: [
      { step: "Concentration Pose", duration: "5 min", image: "/images/yoga-knowledge1.jpg", video: "https://www.youtube.com/embed/XXXX94" },
      { step: "Mind Relax Pose", duration: "10 min", image: "/images/yoga-knowledge2.jpg", video: "https://www.youtube.com/embed/XXXX95" }
    ],
    exercises: [
      { step: "Brain Games", duration: "15 min", image: "/images/exercise-knowledge1.jpg", video: "https://www.youtube.com/embed/XXXX96" },
      { step: "Memory Drills", duration: "10 min", image: "/images/exercise-knowledge2.jpg", video: "https://www.youtube.com/embed/XXXX97" }
    ]
  },

  17: {
    title: "Positive Mindset",
    icon: <FaLightbulb />,
    homeRemedies: [
      { step: "Daily Gratitude", description: "3 things daily", image: "/images/positive1.jpg", video: "https://www.youtube.com/embed/XXXX98" },
      { step: "Affirmations", description: "Morning routine", image: "/images/positive2.jpg", video: "https://www.youtube.com/embed/XXXX99" }
    ],
    yoga: [
      { step: "Smile Meditation", duration: "5 min", image: "/images/yoga-positive1.jpg", video: "https://www.youtube.com/embed/YYYY100" },
      { step: "Lotus Pose", duration: "10 min", image: "/images/yoga-positive2.jpg", video: "https://www.youtube.com/embed/YYYY101" }
    ],
    exercises: [
      { step: "Dance", duration: "15 min", image: "/images/exercise-positive1.jpg", video: "https://www.youtube.com/embed/YYYY102" },
      { step: "Stretch & Smile", duration: "10 min", image: "/images/exercise-positive2.jpg", video: "https://www.youtube.com/embed/YYYY103" }
    ]
  },

  18: {
    title: "Helping Nature",
    icon: <FaHandsHelping />,
    homeRemedies: [
      { step: "Acts of Kindness", description: "Once daily", image: "/images/help1.jpg", video: "https://www.youtube.com/embed/YYYY104" },
      { step: "Community Work", description: "Weekly", image: "/images/help2.jpg", video: "https://www.youtube.com/embed/YYYY105" }
    ],
    yoga: [
      { step: "Compassion Meditation", duration: "10 min", image: "/images/yoga-help1.jpg", video: "https://www.youtube.com/embed/YYYY106" },
      { step: "Heart Opening Pose", duration: "5 min", image: "/images/yoga-help2.jpg", video: "https://www.youtube.com/embed/YYYY107" }
    ],
    exercises: [
      { step: "Team Sports", duration: "20 min", image: "/images/exercise-help1.jpg", video: "https://www.youtube.com/embed/YYYY108" },
      { step: "Group Walk", duration: "15 min", image: "/images/exercise-help2.jpg", video: "https://www.youtube.com/embed/YYYY109" }
    ]
  },

  19: {
    title: "Light Lifestyle",
    icon: <FaFeatherAlt />,
    homeRemedies: [
      { step: "Minimalism", description: "Declutter weekly", image: "/images/light1.jpg", video: "https://www.youtube.com/embed/YYYY110" },
      { step: "Simple Eating", description: "Avoid heavy meals", image: "/images/light2.jpg", video: "https://www.youtube.com/embed/YYYY111" }
    ],
    yoga: [
      { step: "Mountain Pose", duration: "5 min", image: "/images/yoga-light1.jpg", video: "https://www.youtube.com/embed/YYYY112" },
      { step: "Relaxed Breathing", duration: "10 min", image: "/images/yoga-light2.jpg", video: "https://www.youtube.com/embed/YYYY113" }
    ],
    exercises: [
      { step: "Light Jog", duration: "15 min", image: "/images/exercise-light1.jpg", video: "https://www.youtube.com/embed/YYYY114" },
      { step: "Slow Cycling", duration: "20 min", image: "/images/exercise-light2.jpg", video: "https://www.youtube.com/embed/YYYY115" }
    ]
  },

  20: {
    title: "Happiness",
    icon: <FaGrinStars />,
    homeRemedies: [
      { step: "Listen Music", description: "20 min daily", image: "/images/happy1.jpg", video: "https://www.youtube.com/embed/YYYY116" },
      { step: "Connect with Friends", description: "Weekly meet", image: "/images/happy2.jpg", video: "https://www.youtube.com/embed/YYYY117" }
    ],
    yoga: [
      { step: "Laughing Yoga", duration: "10 min", image: "/images/yoga-happy1.jpg", video: "https://www.youtube.com/embed/YYYY118" },
      { step: "Relaxation Pose", duration: "5 min", image: "/images/yoga-happy2.jpg", video: "https://www.youtube.com/embed/YYYY119" }
    ],
    exercises: [
      { step: "Dance Workout", duration: "15 min", image: "/images/exercise-happy1.jpg", video: "https://www.youtube.com/embed/YYYY120" },
      { step: "Play Games", duration: "20 min", image: "/images/exercise-happy2.jpg", video: "https://www.youtube.com/embed/YYYY121" }
    ]
  },

  21: {
    title: "Self Discipline",
    icon: <FaUserCheck />,
    homeRemedies: [
      { step: "Daily Routine", description: "Fixed wake & sleep time", image: "/images/discipline1.jpg", video: "https://www.youtube.com/embed/YYYY122" },
      { step: "Digital Detox", description: "1 hr no phone daily", image: "/images/discipline2.jpg", video: "https://www.youtube.com/embed/YYYY123" }
    ],
    yoga: [
      { step: "Meditation", duration: "10 min", image: "/images/yoga-discipline1.jpg", video: "https://www.youtube.com/embed/YYYY124" },
      { step: "Focus Pose", duration: "5 min", image: "/images/yoga-discipline2.jpg", video: "https://www.youtube.com/embed/YYYY125" }
    ],
    exercises: [
      { step: "Morning Run", duration: "20 min", image: "/images/exercise-discipline1.jpg", video: "https://www.youtube.com/embed/YYYY126" },
      { step: "Strength Drill", duration: "15 min", image: "/images/exercise-discipline2.jpg", video: "https://www.youtube.com/embed/YYYY127" }
    ]
  },

  22: {
    title: "Work-Life Balance",
    icon: <FaBalanceScale />,
    homeRemedies: [
      { step: "Time Blocking", description: "Plan daily", image: "/images/balance1.jpg", video: "https://www.youtube.com/embed/YYYY128" },
      { step: "Evening Walk", description: "After work", image: "/images/balance2.jpg", video: "https://www.youtube.com/embed/YYYY129" }
    ],
    yoga: [
      { step: "Balance Pose", duration: "5 min", image: "/images/yoga-balance1.jpg", video: "https://www.youtube.com/embed/YYYY130" },
      { step: "Relax Pose", duration: "10 min", image: "/images/yoga-balance2.jpg", video: "https://www.youtube.com/embed/YYYY131" }
    ],
    exercises: [
      { step: "Cycling", duration: "20 min", image: "/images/exercise-balance1.jpg", video: "https://www.youtube.com/embed/YYYY132" },
      { step: "Swimming", duration: "30 min", image: "/images/exercise-balance2.jpg", video: "https://www.youtube.com/embed/YYYY133" }
    ]
  },

  23: {
    title: "Immunity Boost",
    icon: <FaShieldAlt />,
    homeRemedies: [
      { step: "Tulsi Tea", description: "Daily morning", image: "/images/immunity1.jpg", video: "https://www.youtube.com/embed/YYYY134" },
      { step: "Turmeric Milk", description: "Before bed", image: "/images/immunity2.jpg", video: "https://www.youtube.com/embed/YYYY135" }
    ],
    yoga: [
      { step: "Breath Control", duration: "10 min", image: "/images/yoga-immunity1.jpg", video: "https://www.youtube.com/embed/YYYY136" },
      { step: "Camel Pose", duration: "5 min", image: "/images/yoga-immunity2.jpg", video: "https://www.youtube.com/embed/YYYY137" }
    ],
    exercises: [
      { step: "Brisk Walk", duration: "20 min", image: "/images/exercise-immunity1.jpg", video: "https://www.youtube.com/embed/YYYY138" },
      { step: "Light Jog", duration: "15 min", image: "/images/exercise-immunity2.jpg", video: "https://www.youtube.com/embed/YYYY139" }
    ]
  },

  24: {
    title: "Heart Care",
    icon: <FaHeart />,
    homeRemedies: [
      { step: "Omega-3 Foods", description: "Include daily", image: "/images/heart1.jpg", video: "https://www.youtube.com/embed/YYYY140" },
      { step: "Avoid Fried Food", description: "Limit intake", image: "/images/heart2.jpg", video: "https://www.youtube.com/embed/YYYY141" }
    ],
    yoga: [
      { step: "Cobra Pose", duration: "5 min", image: "/images/yoga-heart1.jpg", video: "https://www.youtube.com/embed/YYYY142" },
      { step: "Bridge Pose", duration: "5 min", image: "/images/yoga-heart2.jpg", video: "https://www.youtube.com/embed/YYYY143" }
    ],
    exercises: [
      { step: "Swimming", duration: "20 min", image: "/images/exercise-heart1.jpg", video: "https://www.youtube.com/embed/YYYY144" },
      { step: "Cycling", duration: "30 min", image: "/images/exercise-heart2.jpg", video: "https://www.youtube.com/embed/YYYY145" }
    ]
  }

};