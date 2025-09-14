import {
    FaTint, FaSoap, FaSpa, FaAppleAlt, FaBed, FaBroom, FaRunning, FaCarrot, FaSun,
    FaHeartbeat, FaHandsWash, FaWalking, FaClock, FaFish, FaWind, FaBook, FaCoffee,
    FaGlassCheers, FaLeaf, FaSmile
} from "react-icons/fa";

import {BackBtn} from '../../components/backBtn/BackBtn';

import "./tipsAndTricks.css";

const tipsData = [
    {
        id: 1,
        icon: <FaTint className="tip-icon" />,
        title: "Stay Hydrated",
        desc: "Drink at least 8–10 glasses of water daily to keep your skin glowing and body active."
    },
    {
        id: 2,
        icon: <FaSoap className="tip-icon" />,
        title: "Daily Skincare",
        desc: "Cleanse, moisturize, and apply sunscreen every day to protect against damage."
    },
    {
        id: 3,
        icon: <FaSpa className="tip-icon" />,
        title: "Oil Massage",
        desc: "Weekly hair and body oil massage helps reduce stress and nourishes skin and scalp."
    },
    {
        id: 4,
        icon: <FaSpa className="tip-icon" />,
        title: "Relax & Meditate",
        desc: "Spend 10–15 minutes daily meditating to relax your mind and improve blood circulation."
    },
    {
        id: 5,
        icon: <FaAppleAlt className="tip-icon" />,
        title: "Eat Fresh Fruits",
        desc: "Include seasonal fruits and veggies in your diet for natural vitamins and minerals."
    },
    {
        id: 6,
        icon: <FaBed className="tip-icon" />,
        title: "Sleep Well",
        desc: "Aim for 7–8 hours of quality sleep daily to allow your skin and body to repair naturally."
    },
    {
        id: 7,
        icon: <FaTint className="tip-icon" />,
        title: "Green Tea Detox",
        desc: "Have a cup of green tea daily, rich in antioxidants, to detoxify your body and improve metabolism."
    },
    {
        id: 8,
        icon: <FaBroom className="tip-icon" />,
        title: "Exfoliate Weekly",
        desc: "Gently scrub your skin once or twice a week to remove dead cells and improve glow."
    },
    {
        id: 9,
        icon: <FaRunning className="tip-icon" />,
        title: "Stay Active",
        desc: "Do 20–30 minutes of physical activity or yoga daily to stay fit and boost blood circulation."
    },
    {
        id: 10,
        icon: <FaCarrot className="tip-icon" />,
        title: "Limit Junk Food",
        desc: "Avoid excessive oily and sugary foods to prevent breakouts and maintain overall health."
    },
    {
        id: 11,
        icon: <FaSun className="tip-icon" />,
        title: "Morning Sunlight",
        desc: "Spend 10–15 minutes in early morning sunlight to get natural Vitamin D."
    },
    {
        id: 12,
        icon: <FaHeartbeat className="tip-icon" />,
        title: "Manage Stress",
        desc: "Practice deep breathing, yoga, or journaling to keep your mental health balanced."
    },
    {
        id: 13,
        icon: <FaHandsWash className="tip-icon" />,
        title: "Maintain Hygiene",
        desc: "Wash hands regularly and keep personal items clean to avoid infections."
    },
    {
        id: 14,
        icon: <FaWalking className="tip-icon" />,
        title: "Take Short Walks",
        desc: "Walk for 5–10 minutes after meals to aid digestion and improve metabolism."
    },
    {
        id: 15,
        icon: <FaClock className="tip-icon" />,
        title: "Follow Routine",
        desc: "Stick to a regular schedule for meals, exercise, and sleep to maintain balance."
    },
    {
        id: 16,
        icon: <FaFish className="tip-icon" />,
        title: "Eat Omega-3 Rich Foods",
        desc: "Include walnuts, flaxseeds, and fish in your diet to support brain and heart health."
    },
    {
        id: 17,
        icon: <FaWind className="tip-icon" />,
        title: "Breathe Fresh Air",
        desc: "Spend time outdoors daily to refresh lungs and improve oxygen flow in the body."
    },
    {
        id: 18,
        icon: <FaBook className="tip-icon" />,
        title: "Read & Learn",
        desc: "Reading or mindful learning helps reduce stress and keeps the mind sharp."
    },
    {
        id: 19,
        icon: <FaCoffee className="tip-icon" />,
        title: "Limit Caffeine",
        desc: "Avoid excessive tea or coffee, especially late at night, to ensure proper sleep."
    },
    {
        id: 20,
        icon: <FaGlassCheers className="tip-icon" />,
        title: "Avoid Alcohol",
        desc: "Reduce alcohol intake as it dehydrates the body and harms skin health."
    },
    {
        id: 21,
        icon: <FaLeaf className="tip-icon" />,
        title: "Healthy Snacking",
        desc: "Choose nuts, fruits, and seeds as snacks instead of chips and fried food."
    },
    {
        id: 22,
        icon: <FaSmile className="tip-icon" />,
        title: "Stay Positive",
        desc: "Keep a positive mindset, smile often, and stay grateful for better emotional health."
    }
];

export const TipsAndTricks = () => {
    return (
        <div className="tips-container">
            <BackBtn />
            <h1 className="tips-title">Tips & Tricks</h1>
            <p className="tips-subtitle">Simple hacks for healthy skin, hair, and body.</p>

            <div className="tips-grid">
                {tipsData.map((tip) => (
                    <div key={tip.id} className="tip-card">
                        {tip.icon}
                        <h3>{tip.title}</h3>
                        <p>{tip.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};