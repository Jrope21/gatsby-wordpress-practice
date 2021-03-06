import React, { useState, useRef, useContext } from 'react';
import './featured-cars-carousel.styles.scss';

import Slider from "react-slick";

import FeaturedCarSlide from './featured-car-slide/featured-car-slide.component';
import Arrow from '../../helpers/arrow/arrow.component';

import { getSelectedCarInfoFromPostObj } from '../../../lib/_helpers.js';
import { AllCars } from '../../../lib/context/_all-cars.context';

function FeaturedCarsCarousel({ acf }) {

    const cars = useContext(AllCars);

    const { car_selection } = acf;
    const allSelectedCarInformation = getSelectedCarInfoFromPostObj({selectedCars: car_selection, allCars: cars});

    const [CarouselCars] = useState(allSelectedCarInformation);
    
    let slider = useRef();

    const carouselSettings = {
      dots: true,
      arrows: false,
      infinite: true,
      appendDots: dots => (
        <div className="controls">
          <Arrow onClick={() => slider.slickPrev()} direction="left"/>
          <ul> {dots} </ul>
          <Arrow onClick={() => slider.slickNext()} direction="right"/>
        </div>
      ),
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <div className="featured-cars-carousel container">
          <div className="featured-cars-slider">
            <Slider {...carouselSettings} ref={c => (c = slider = c)}>
              {CarouselCars.map((car, i) => (
                <FeaturedCarSlide
                  key={i}
                  slug={car.slug}
                  title={car.acf.car_model}
                  availability={car.acf.car_availability}
                  img={car.acf.featured_image}
                  year={car.acf.car_year}
                />
              ))}
            </Slider>
          </div>
        </div>
    )
}

export default FeaturedCarsCarousel;