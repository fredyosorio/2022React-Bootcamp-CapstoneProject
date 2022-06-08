import React, {useState} from 'react'
import './slider.scss'
import BtnSlider from './BtnSlider'
import dataSlider from '../../mocks/featured-banners.json';

export default function Slider() {

  const [slideIndex, setSlideIndex] = useState(1);
  const { results } = dataSlider;

  const nextSlide = () => {
    if(slideIndex !== results.length){
      setSlideIndex(slideIndex + 1);
    } 
    else if (slideIndex === results.length){
      setSlideIndex(1);
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1);
    }
    else if (slideIndex === 1){
      setSlideIndex(results.length);
    }
  }

  const moveDot = index => {
    setSlideIndex(index);
  }

  return (
    <div className="container-slider">
      {results.map((slider, index) => {
        return (
          <div
          key={slider.id}
          className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
              <img
              alt={slider.data.title}
              src={slider.data.main_image.url} 
              />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({length: results.length}).map((item, index) => (
          <div 
          key={index}
          onClick={() => moveDot(index + 1)}
          className={slideIndex === index + 1 ? "dot active" : "dot"}
          />
        ))}
      </div>
    </div>
  )
}