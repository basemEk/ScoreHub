import React from 'react'
import './CourseTimeLine.css'
import { MdArrowBackIosNew }  from 'react-icons/md'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Button, ButtonGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import cbot from '../../assets/chatbot.png'
import Chatbot from '../../components/Chatbot/Chatbot'


export default function CourseDetails() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };


  return (
    <div className='ctl-wrapper'>
      
      <Chatbot cbot={cbot} id="ctl-cbot" />

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >

      <SwiperSlide>
    
    <section className='bg-color-course-details'>
      <div className='container course-details-wrapper'>
        <div className='back-to-courses'>
            <a href="/courses" className="no-underline">
              <div className='left-flasher'><MdArrowBackIosNew size={24} /></div> 
              <div><h3>Courses</h3></div>
            </a>
        </div>
        <div className="toggle-courser">
          <ButtonGroup>
           <Button color="primary">
            <Link to="/courses/course-details" className='link-to-description'>
              DESCRIPTION
            </Link>
           </Button>
            <Button className='btn btn-light'>
              <Link to="/courses/course-time-line" className='link-to-timeline'>
                TIMELINE
              </Link>
            </Button> 
          </ButtonGroup>
        </div>
        <div className='row d-lg-flex flex-column-md g-5 course-timeline-slide'>
            <div className='col-lg-4 col-12 course-details-image'>
                <img src="https://picsum.photos/seed/picsum/400/460" className='pic' alt="course details" />
            </div>
            <div className='col-lg-6 col-12 mb-5 '>
                <h2>The Brain & Mental Health</h2>
                <p>This video will explain briefly the link between the neurology of the brain and mental health. It will help you understand better how mental health disorders are affected by the chemicals in your brain and the solutions to these disorders.</p>
                <br />
 
                <div className='kids-code-video'>
                  <iframe width={486} height={291} src="https://www.youtube.com/embed/ldi5aKP-ues" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" alt="kids that code" allowFullScreen />
                </div>

                <div className='cta-course-details d-flex mt-4 btn-timeline'>
                    <div><button type="button" class="btn btn-primary">GET IT NOW</button></div>
                    <button type="button" class="btn btn-light">ADD TO WISHLIST</button>
                </div>
            </div>
        </div>
      </div>
    </section>
        </SwiperSlide>

        <SwiperSlide>
        <section className='bg-color-course-details'>
      <div className='container course-details-wrapper'>
        <div className='back-to-courses'>
            <a href="/courses" className="no-underline">
              <div className='left-flasher'><MdArrowBackIosNew size={24} /></div> 
              <div><h3>Courses</h3></div>
            </a>
        </div>
        <div className="toggle-courser">
          <ButtonGroup>
           <Button color="primary">
            <Link to="/courses/course-details" className='link-to-description'>
              DESCRIPTION
            </Link>
           </Button>
            <Button className='btn btn-light'>
              <Link to="/courses/course-time-line" className='link-to-timeline'>
                TIMELINE
              </Link>
            </Button> 
          </ButtonGroup>
        </div>
        <div className='row d-lg-flex flex-column-md g-5 course-timeline-slide'>
            <div className='col-lg-4 col-12 course-details-image'>
                <img src="https://picsum.photos/seed/picsum/400/460" className='pic' alt="course details" />
            </div>
            <div className='col-lg-6 col-12 mb-5 '>
                <h2>How To Introspective?</h2>
                <p>This video will explain briefly the link between the neurology of the brain and mental health. It will help you understand better how mental health disorders are affected by the chemicals in your brain and the solutions to these disorders.</p>
                <br />
 
                <div className='kids-code-video'>
                <iframe width={486} height={291} src="https://www.youtube.com/embed/ldi5aKP-ues" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" alt="kids that code" allowFullScreen />
                </div>

                <div className='cta-course-details d-flex mt-4 btn-timeline'>
                    <div><button type="button" class="btn btn-primary">GET IT NOW</button></div>
                    <button type="button" class="btn btn-light">ADD TO WISHLIST</button>
                </div>
            </div>
        </div>
      </div>
    </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='bg-color-course-details'>
      <div className='container course-details-wrapper'>
        <div className='back-to-courses'>
            <a href="/courses" className="no-underline">
              <div className='left-flasher'><MdArrowBackIosNew size={24} /></div> 
              <div><h3>Courses</h3></div>
            </a>
        </div>
        <div className="toggle-courser">
          <ButtonGroup>
           <Button color="primary">
            <Link to="/courses/course-details" className='link-to-description'>
              DESCRIPTION
            </Link>
           </Button>
            <Button className='btn btn-light'>
              <Link to="/courses/course-time-line" className='link-to-timeline'>
                TIMELINE
              </Link>
            </Button> 
          </ButtonGroup>
        </div>
        <div className='row d-lg-flex flex-column-md g-5 course-timeline-slide'>
            <div className='col-lg-4 col-12 course-details-image'>
                <img src="https://picsum.photos/seed/picsum/400/460" className='pic' alt="course details" />
            </div>
            <div className='col-lg-6 col-12 mb-5 '>
                <h2>Benefits Of Mindfulness</h2>
                <p>This video will explain briefly the link between the neurology of the brain and mental health. It will help you understand better how mental health disorders are affected by the chemicals in your brain and the solutions to these disorders.</p>
                <br />
 
                <div className='kids-code-video'>
                <iframe width={486} height={291} src="https://www.youtube.com/embed/ldi5aKP-ues" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" alt="kids that code" allowFullScreen />
                </div>

                <div className='cta-course-details d-flex mt-4 btn-timeline'>
                    <div><button type="button" class="btn btn-primary">GET IT NOW</button></div>
                    <button type="button" class="btn btn-light">ADD TO WISHLIST</button>
                </div>
            </div>
        </div>
      </div>
    </section>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}
