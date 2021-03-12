import React from 'react';
import dRoseArt from '../images/d_rose.jpg'
import MSG from '../images/MSG.jpg'
import insideMSG from '../images/MSG_court.jpg'
import obiArt from '../images/obi_dunk.png'
import coachThibs from '../images/coach_thibs.jpg'
// import juliusArt from '../images/JU'
import '../css/Home.css'

const Home = () => {
    return (
        <div>
            <div className='msg_gallery'>
                <h2 className='MSG_header'>Views from Madison Square Garden</h2>

                <img src={MSG} alt='MSG building' className='gallery_img msg_1'/>

                <img src={insideMSG} alt='inside MSG' className='gallery_img msg_2'/>
            </div>

            <div>
                <img src={dRoseArt} alt='derrick rose art' className='gallery_img img_1'/>

                <img src={obiArt} alt='obi toppin dunk' className='gallery_img img_4'/>

                <img src={coachThibs} alt='coach Thibodeau' className='gallery_img img_5'/>
            </div>
        </div>
    );
};

export default Home;