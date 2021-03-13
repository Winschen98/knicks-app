import React from 'react';
import '../css/About.css'

const About = () => {
    return (
        <div className='about_page'>
            <header>
                <h1 className='about_header'>
                    About
                </h1>
            </header>
            <main className='about_description'>
                <p>
                    Welcome to InstaKnicks, the place to get your fix of the latest knicks news, stats, and fan content. My hope is that this can become a place for Knicks fan like myself to find a like-minded community and share their thoughts. 
                </p>
                <p>
                    With time I will look towards implementing a system to leave comments and feedback for any visitors. Until then, please enjoy the content. 
                </p>
                <p>
                    All artwork was taken from Behance's collection of knicks fan art. Please visit my moodboard at Winston Chen  to view the original contributors of all images.
                </p>
                <p>
                    All team, player, and game data are from balldontlie and SportsDataIO APIs.
                </p>
            </main>
        </div>
    );
};

export default About;