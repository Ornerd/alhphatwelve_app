import React from 'react';
import Slider from "react-slick";
import imgOne from "../assets/images/Slide.png";
import imgTwo from "../assets/images/Slide (1).png";
import imagThree from "../assets/images/Slide (2).png";
import SingleChevron from './IconsSVG/SIngleChevron';

const Carousel = () => {

    const slidesData = [
        {
            imgSrc: imgOne,
            imgName: 'slide One',
            id: 0,
            textHeadline: "Latest News & Updates",
            textBody: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus."
        },
        {
            imgSrc: imgTwo,
            imgName: 'slide Two',
            id: 1,
            textHeadline: "Latest News & Updates",
            textBody: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus."
        },
        {
            imgSrc: imagThree,
            imgName: 'slide Three',
            id: 2,
            textHeadline: "Latest News & Updates",
            textBody: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus."
        }
    ]

    function RightArrow(props) {
        const { className, style, onClick } = props;
        return (
          <button className={`${className}, arrow-right`} style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
          >
            <SingleChevron/>
          </button>
        );
    }

    function LeftArrow(props) {
        const { className, style, onClick } = props;
        return (
          <button className={`${className}, arrow-left`} style={{ ...style, display: "block", background: "white" }}
            onClick={onClick}
          >
            <SingleChevron/>
          </button>
        );
    }

    const settings = {
        // className: "odd:flex odd:items-stretch",
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        waitForAnimate: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        appendDots: dots => (  //appending my own custom dots. You can determine how the dots would be arranged.
            <div style={{ width: "100%", height: 10 }}>
              <ul style={{ margin: "0px" }} className='button-indicator'> {dots} </ul>
            </div>
        ),
        customPaging: () => (  //the actual pagination of the dots. This is where you can edit how the active dot should look like, and color of the other dots.
          <div
            style={{
              width: "0.75rem",
              height: "0.19rem",
              backgroundColor: "#FFFFFF"
            }}
          >
          </div>
        )
      };

  return (
    <div className="slider-container">
    <Slider {...settings}>
        {slidesData.map((slide)=>{
            return(
                <div className='slide' key={slide.id}>
                    <img src={slide.imgSrc} alt={slide.imgName} />
                    <div className='text-area'>
                        <h5>{slide.textHeadline}</h5>
                        <h5>{slide.textBody}</h5>
                    </div>
                </div>
            )
        })
        }
    </Slider>
    </div>
  )
}

export default Carousel