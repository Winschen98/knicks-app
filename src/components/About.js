import React from 'react';
import '../css/About.css'
import profile from '../images/profile_pic.JPG'

const About = () => {
    return (
        <div className='about_page'>
                <h1 className='about_header'>
                    About
                </h1>
            <main className='about_description'>
                <p>
                    Welcome to InstaKnicks, the place to get your fix of the latest knicks news, stats, and fan content. My hope is that this can become a place for Knicks fan like myself to find a like-minded community and share their thoughts. 
                </p>
                <p>
                    With time I will look towards implementing a system to leave comments and feedback for any visitors. Until then, please enjoy the current content. 
                </p>
                <p>
                    All artwork was taken from Behance's collection of knicks fan art. Please visit my moodboard at Winston Chen  to view the original contributors of all images.
                    All team, player, and game data are from balldontlie and SportsDataIO APIs.
                </p>
            </main>
            <h1 className='about_header'>
                    Contributors
            </h1>
                <div className='contributors'>
                    <img src={profile} className='profile_img'/>    
                    <p className='about_description'>
                        My name is Winston Chen and I was born and raised in Lower East Side of New York. For as long as I've known how to tie my shoes I've been a knicks fan. As of the currrent date that this page is being worked on the Knicks are an above .500 team. 
                    </p>
                </div>
        </div>
    );
};

export default About;