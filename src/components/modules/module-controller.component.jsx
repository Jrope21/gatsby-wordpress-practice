import React from 'react';

import FeaturedCarsCarousel from './featured-cars-carousel/featured-cars-carousel.component.jsx';
import ContentArea from './content-area/content-area.component.jsx';
import FeaturedCarsListing from './featured-cars-listing/featured-cars-listing.component.jsx';
import FullWidthTextWithButton from './featured-content/full-width-text-with-button/full-width-text-with-button.component.jsx';
import CarsCarousel from './cars-carousel/cars-carousel.component.jsx';
import Hero from './hero/hero.component.jsx';
import ImageWithText from './featured-content/image-with-text/image-with-text.component.jsx';
import AllCarsGallery from './all-cars-gallery/all-cars-gallery.component.jsx';

function ModuleController({ acf, cars }) {
    
    function renderCorrectLayout(acfModule, key) {
        const { acf_fc_layout : layout } = acfModule
        
        switch (layout) {
            case "all_cars_gallery":
                return <AllCarsGallery acf={acfModule} key={key} />
            case "hero":
                return <Hero acf={acfModule} key={key}/>
            case "cars_carousel":
                return <CarsCarousel acf={acfModule} key={key} />
            case "featured_content":
                return renderFeaturedContentLayouts(acfModule, key)
            case "featured_cars_listing": 
                return <FeaturedCarsListing acf={acfModule} key={key} />
            case "featured_cars_carousel":
                return <FeaturedCarsCarousel acf={acfModule} key={key} />
            case "content_area":
                return <ContentArea acf={acfModule} key={key} />
            default:
                return null
        }
    }

    function renderFeaturedContentLayouts(acfModule, key) {
        const { display } = acfModule

        switch (display) {
            case "full_width_text_with_button":
                return <FullWidthTextWithButton acf={acfModule} key={key} />
            case "image_left_with_text":
                return <ImageWithText acf={acfModule} key={key} />
            default:
                return null
        }
    }


    if(acf) return (
        <>
            {acf.map((module, i) => (renderCorrectLayout(module, i)))}
        </>
    )
    return null;

}

export default ModuleController;