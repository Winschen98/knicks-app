import React from 'react';
import dRoseArt from '../images/d_rose.jpg'
import MSG from '../images/MSG.jpg'
import insideMSG from '../images/MSG_court.jpg' 
import bannersMSG from '../images/MSG_banners.jpg' 
import empireState from '../images/empire_state.jpg'
import obiArt from '../images/obi_dunk.png'
import coachThibs from '../images/coach_thibs.jpg'
import juliusArt from '../images/Julius_art.png'
import '../css/Home.css'

const Home = () => {
    return (
        <div>
            <div className='msg_gallery'>
                <h2 className='MSG_header'>Views from Madison Square Garden</h2>

                <img src={MSG} alt='MSG building' className='gallery_img msg_1'/>

                <img src={insideMSG} alt='inside MSG' className='gallery_img msg_2'/>

                <img src={empireState} alt='inside MSG' className='gallery_img msg_2'/>

                <img src={bannersMSG} alt='inside MSG' className='gallery_img msg_2'/>
            </div>

            <div>
                <h2 className='MSG_header'>FAN ART</h2>
                <img src={dRoseArt} alt='derrick rose art' className='gallery_img img_1'/>

                <img src={obiArt} alt='obi toppin dunk' className='gallery_img img_4'/>

                <img src={juliusArt} alt='Julius Randle' className='gallery_img msg_2'/>

                <article>
                    <a href='https://bleacherreport.com/articles/2935555-tom-thibodeau-on-knicks-trade-rumors-i-have-a-strong-bias-towards-good-players' className='link'> 
                        <h1 className='article_title'>Will Coach Thibodeau Bring In a Star Before The Trade Deadline?
                        </h1>
                        <img src={coachThibs} alt='coach Thibodeau'
                        className='article_img'/>
                    </a>
                </article>
            </div>
        </div>
    );
};

export default Home;