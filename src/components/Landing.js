import { useState, useEffect } from 'react'
import { fake_data } from '../fake-data'
import Store from '../utilities/store'

export default function Landing() {
  const [state, setState] = useState({ slideIndex: 1 })

  // Next/previous controls
  const plusSlides = x => {
    showSlides(state.slideIndex += x)
  }

  // Thumbnail image controls
  const currentSlide = x => {
    showSlides(state.slideIndex = x)
  }

  const showSlides = x => {
    const slides = document.getElementsByClassName('mySlides')
    // leave condition until images in place
    if (slides.length < 1) {
      return
    }
    const dots = document.getElementsByClassName('dot')
    if (x > slides.length) {
      state.slideIndex = 1
    }
    if (x < 1) {
      state.slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[state.slideIndex - 1].style.display = 'block'
    dots[state.slideIndex - 1].className += ' active'
  }

  useEffect(() => {
    showSlides(state.slideIndex)
  }, [])
    
  return (
    <div className="landing">
      {/* <!-- Slideshow container --> */}
      <div class="slideshow-container">

        {/* <!-- Full-width images with number and caption text --> */}
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="img1.jpg" style={{ width: '100%' }} />
          <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src="img2.jpg" style={{ width: '100%' }} />
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src="img3.jpg" style={{ width: '100%' }} />
          <div class="text">Caption Three</div>
        </div>

        {/* <!-- Next and previous buttons --> */}
        <a class="prev" onClick={plusSlides(-1)}>&#10094;</a>
        <a class="next" onClick={plusSlides(1)}>&#10095;</a>
      </div>

      <br />

      {/* <!-- The dots/circles --> */}
      <div style={{ textAlign: 'center' }}>
        <span class="dot" onClick={currentSlide(1)}></span>
        <span class="dot" onClick={currentSlide(2)}></span>
        <span class="dot" onClick={currentSlide(3)}></span>
      </div>
    </div>
  )
}