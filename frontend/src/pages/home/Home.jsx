import { FaHandHoldingHeart } from "react-icons/fa";

import './home.css';

export const Home = () => {
    return (
        <>
            <section className='home-screen'>

                <div className='home-hero-section'>

                    <div className='home-hero-container'>
                        <span className='home-main-heading'>Time to <span className='home-main-heading-highlight'>Change</span></span>
                        <p className='home-main-subheading'>Your journey to a better self starts here.</p>
                        <span className='home-main-tagline'>Real changes, Real results.</span>
                        <button className='home-hero-btn'>Start Your Change</button>
                    </div>

                    <div className='home-img-container'>
                        <div className='icon-wrapper'>
                            <div className="vertical-bar"></div>
                            <FaHandHoldingHeart className="home-change-img" />
                        </div>
                    </div>

                </div>

                <div className="home-main-content">
                    <h1>Main</h1>
                </div>

            </section>
        </>
    )
}