import HeaderbannerImage from '../../images/homeHeaderbanner.png'
import React, { useState } from 'react'
import {RiChat1Fill} from "react-icons/ri"
import {TbBulbFilled} from "react-icons/tb"
import {MdHighQuality} from "react-icons/md"
import {CiStreamOn} from "react-icons/ci"
import { services, testimonial, link } from '../../data'
import VideographyImage from '../../images/videographyImage.png'
import PhotographyImage from '../../images/photographyImage.png'
import VideoEditingImage from '../../images/videoEditingImage.png'
import LivestreamingImage from '../../images/livestreamingImage.png'
import {IoCaretBackCircle, IoCaretForwardCircle} from "react-icons/io5"
import {IoLocationSharp} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
import {HiPhoneIncoming} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './home.css'




const Home = () => {
    const [index, setIndex] = useState(0)
    const {name, testimony, job, image} = testimonial[index];

    const prevTestimonialHandler = () => {
    setIndex(prev => prev -1);

    if(index <= 0 ) {
      setIndex(testimonial.length -1);
    }
  }



    const nextTestimonialHandler = () => {
    setIndex(prev => prev +1);

    if(index >= testimonial.length -1 ) {
      setIndex(0);
    }
  }
  return (
    <>
      <div className="container__home">
        <img src={HeaderbannerImage} alt="Header banner" />
        <div className="header__banner-container">
        </div>
        <div className="header__banner-content">
          <h2>Livestreaming</h2>
          <h5>for all event size an type</h5>
          <div className="call__action">
            <a href="tel:+2348053642425" className="btn">Get a Quote: 08053642425</a>
          </div>
        </div>
      </div>

    {/** why choose section */}

    <section className="why__choose-container">
          <div className="why__choose-content">
            <div className="section__title"><h2>Why Choose us</h2></div>
            <p className='section__subtitle'>From the best platform choices to flawless live production, Our event live streaming services will help you
              navigate the end-to-end streaming process, leaving you to enjoy your event.
            </p>
          </div>
          <div className="why__perks">
            <div className="perks">
              <span><RiChat1Fill/></span>
              <h4>Plaform <br/>Advice</h4>
            </div>
            <div className="perks">
              <span><TbBulbFilled/></span>
              <h4>Creative <br/> Talents</h4>
            </div>
            <div className="perks">
              <span><MdHighQuality/></span>
              <h4>Bespoke <br/>Production</h4>
            </div>
            <div className="perks">
              <span><CiStreamOn/></span>
              <h4>Flawless <br/>Multi-stream</h4>
            </div>
          </div>
        </section>

        <section className="services__container">
          <div className="services__container-content">
            <div className="section__title white"><h2>Our Services</h2></div>
            <p className="section__subtitle white">We are offer the best services</p>
          </div>
          <div className="services__wrapper">

            {/* Videography */}
            <div className="service__content">
              <div className="service__left image">
                <img src={VideographyImage} alt="" className="service__image" />
              </div>
              <div className="service__right">
                <h3 className="service__title">Videography</h3>
                <p className="service__summary">
                  From the best platform choices to flawless live production, our event live streaming services will help you navigate the end-to-end streaming process, leaving you to enjoy your event.
                </p>
                <a href="#" className='btn__lg'>Learn More</a>
              </div>
            </div>

            {/* Photography */}
            <div className="service__content">
              <div className="service__left">
                <h3 className="service__title">Photography</h3>
                <p className="service__summary">
                  From the best platform choices to flawless live production, our event live streaming services will help you navigate the end-to-end streaming process, leaving you to enjoy your event.
                </p>
                <a href="#" className='btn__lg'>Learn More</a>
              </div>
              <div className="service__right image">
                <img src={PhotographyImage} alt="" className="service__image" />
              </div>
            </div>


            {/* Video Editing */}
            <div className="service__content">
              <div className="service__left image">
                <img src={VideoEditingImage} alt="" className="service__image" />
              </div>
              <div className="service__right">
                <h3 className="service__title">Video Editing</h3>
                <p className="service__summary">
                  From the best platform choices to flawless live production, our event live streaming services will help you navigate the end-to-end streaming process, leaving you to enjoy your event.
                </p>
                <a href="#" className='btn__lg'>Learn More</a>
              </div>
            </div>

            {/* Livestreaming */}
            <div className="service__content">
              <div className="service__left">
              <h3 className="service__title">Livestreaming</h3>
                <p className="service__summary">
                  From the best platform choices to flawless live production, our event live streaming services will help you navigate the end-to-end streaming process, leaving you to enjoy your event.
                </p>
                <a href="#" className='btn__lg'>Learn More</a>
              </div>
              <div className="service__right image">
                <img src={LivestreamingImage} alt="" className="service__image" />
              </div>
            </div>

            
          </div>
        </section>

        <section className="testimonial__container">
          <div className="testimonial__content">
            <div className="section__title white"><h2>Testimonial</h2></div>
            <p className="section__subtitle primary-variant">What our Client's are saying about us</p>
            <div className="testimony__container">
                      <div className="testimony__content">
                        <img src={image} alt={name} />
                          <p className="testimony">{testimony}</p>
                          <h5 testimony__name>{name}</h5>
                          <h4 className="testimony__job">{job}</h4>
                      </div>
            </div>
            <div className="testimonials__btn-container">
              <button className="testimonials__btn" onClick={prevTestimonialHandler} ><IoCaretBackCircle/></button>
              <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoCaretForwardCircle/></button>
            </div>
          </div>
        </section>

        <section className="footer__container">
          <div className="footer__content">
            <div className="footer__content-left">
              <div className="footer__logo"><h3>Rehoboth<span>Media</span></h3></div>
              <div className="footer__summary">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic culpa, sit natus obcaecati deserunt voluptas perspiciatis iure suscipit, ipsam recusandae voluptatum nobis molestiae pariatur iusto a laudantium cumque, quia sint?</p>
              </div>
              <div className="footer__address"><IoLocationSharp/> Lagos, Ikeja Nigeria</div>
              <div className="footer__email"><MdEmail/>hello@rehobothmedia.com</div>
              <div className="footer__phone"><HiPhoneIncoming/>(0)805 3564 2425</div>
          </div>
            <div className="footer__content-right">
              <div className="footer__title">Quicklinks</div>
              <div className="footer__links">
                {
                  link.map(({name, path}, index) => {
                    return (
                      <Link key={index} to={path} className="footer__link">{name}</Link>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>

        <section className="footer__bottom">
          <div className="footer__bottom-wrapper">
            <div className="footer__bottom-content">
              <p>REHOBOTH<span>MEDIA</span> | All Rights Reserved 2023 | Developed by <a href="#">Inspireme Media Networks</a></p>
            </div>
          </div>
        </section>
    </>
  )
}

export default Home