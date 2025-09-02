import ChangeImage from '../../assets/HomeChangeImage.png';

import './about.css';

export const About = () => {
    return (
        <div className="about-screen">
            <section>
                <h1 className="about-main-heading">
                    My <span className="about-main-heading-highlight">Journey</span>
                </h1>
                <p className="about-main-subheading">
                    A story of personal change and growth
                </p>
            </section>

            <section className="about-content">
                <div className="about-content-data">
                    <h2 className="about-content-heading">The Beginning</h2>
                    <p className="about-content-subheading">
                        This space is for sharing your personal transformation story – where you started and what motivated you to change.
                    </p>

                    <h2 className="about-content-heading">The Process</h2>
                    <p className="about-content-subheading">
                        Here you can detail the steps you took, the challenges you faced, and how you overcame them.
                    </p>

                    <h2 className="about-content-heading">The Results</h2>
                    <p className="about-content-subheading">
                        Share the positive outcomes of your journey and how it has impacted various aspects of your life.
                    </p>
                </div>

                <div className="about-image-container">
                    <img
                        src={ChangeImage}
                        alt="Journey Illustration"
                        className="about-image"
                    />
                </div>
            </section>
        </div>
    );
};