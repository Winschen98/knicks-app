import React from 'react';
import dRoseArt from '../images/d_rose.jpg'
import MSG from '../images/MSG.jpg'
import insideMSG from '../images/MSG_court.jpg' 
import bannersMSG from '../images/MSG_banners.jpg' 
import empireState from '../images/empire_state.jpg'
import obiArt from '../images/obi_dunk.png'
import coachThibs from '../images/coach_thibs.jpg'
import juliusArt from '../images/Julius_art.png'
import frankArt from '../images/frank_art.jpg'
import '../css/Home.css'
import rjArt from '../images/rj_art.png'
import mitchArt from '../images/Mitch_art.png'
import quickleyArt from '../images/quickley_art.jpg'
import immanuelQuickley from '../images/Immanuel-Quickley.jpg'
import lonzoBall from '../images/lonzo-ball.jpg'
import rj from '../images/rj.jpg'
import { Carousel } from 'react-bootstrap'
import ReactPlayer from 'react-player';

 
const Home = () => {
    return (
        <div>
            <div className='article-grid'>
                <article className='article article-1'>
                    <a href='https://bleacherreport.com/articles/2935555-tom-thibodeau-on-knicks-trade-rumors-i-have-a-strong-bias-towards-good-players' className='link'> 
                        <h1 className='article_title'>Coach Thibodeau Bringing In a Star Before The Trade Deadline?
                        </h1>
                        <img src={coachThibs} alt='coach Thibodeau'
                        className='article_img'/>
                    </a>
                </article>

                <article className='article article-2'>
                    <a href='https://dailyknicks.com/2021/03/14/new-york-knicks-starting-immanuel-quickley-elfrid-payton/' className='link'> 
                        <h1 className='article_title'>Should Immanuel Quickley Start?
                        </h1>
                        <img src={immanuelQuickley} alt='Immanuel Quickley layup'
                        className='article_img'/>
                    </a>
                </article>

                <article className='article article-3'>
                    <a href='https://empiresportsmedia.com/new-york-knicks/why-the-new-york-knicks-should-trade-for-lonzo-ball/' target="_blank" className='link'> 
                        <h1 className='article_title'>Knicks Aggresive in Pursuing Lonzo Ball Trade
                        </h1>
                        <img src={lonzoBall} alt='Lonzo Ball'
                        className='article_img'/>
                    </a>
                </article>

                <article className='article article-4'>
                    <a href='https://dailyknicks.com/2021/03/13/knicks-win-rj-barrett-breakout/' target="_blank" className='link'> 
                        <h1 className='article_title_bottom'>RJ Barrett breakout?
                        </h1>
                        <img src={rj} alt='RJ Barrett dunk'
                        className='article_img'/>
                    </a>
                </article>
            </div>

            <h2 className='MSG_header'>Views from Madison Square Garden</h2> 
            <div className='carousel-container'>
                <Carousel fade>
                    <Carousel.Item>
                        <img src={MSG} alt='MSG building' className='carousel_img' style={{zIndex:'0'}} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={insideMSG} alt='inside MSG' className='carousel_img'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={bannersMSG} alt='MSG banners' className='carousel_img'/>
                    </Carousel.Item>
                </Carousel>
            </div>

                <h2 className='vid-header white'>VIDEOS</h2>
            <div className='videos'>    
                <ReactPlayer 
                width='400px'
                height='250px'
                url='https://www.youtube.com/watch?v=2T6bTV4u6lE' className='vid-1' />
                <ReactPlayer 
                width='810px'
                height='500px'
                url='https://www.youtube.com/watch?v=sM0evxAVrWA' className='vid-2'/>
                <ReactPlayer 
                width='400px'
                height='250px'
                url='https://www.youtube.com/watch?v=KCht1ZNU2-w' className='vid-3'
                />
            </div>

            <div className='gallery'>
                <h2 className='MSG_header gallery_text'>FAN ART</h2>

                <img src={dRoseArt} alt='derrick rose art' className='gallery_img img_1'/>

                <img src={rjArt} alt='RJ Barrett' className='gallery_img img_2'/>
                
                <img src={juliusArt} alt='Julius Randle' className='gallery_img img_3'/>

                <img src={obiArt} alt='obi toppin dunk' className='gallery_img img_4'/>

                <img src={frankArt} alt='Frank Ntilikina' className='gallery_img img_5'/>

                <img src={mitchArt} alt='Mitchell Robinson' className='gallery_img img_6'/>

                <img src={quickleyArt} alt='Immanuel Quickley' className='gallery_img img_7'/>
            </div>
        </div>
    );
};

export default Home;