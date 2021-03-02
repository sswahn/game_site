import { useState, useEffect } from 'react'

export default function SlideShow({ data }) {
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
    const slides = document.getElementsByClassName('slides')
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
    console.log(data.user.uploads[0].title_art)
    showSlides(state.slideIndex)
  }, [])
    
  return (
    <div className="landing">
      {/* <!-- Slideshow container --> */}
      <div className="slideshow-container">

        {/* <!-- Full-width images with number and caption text --> */}
        <div className="slides fade">
          <div className="numbertext">1 / 3</div>
          <img src={data.user.uploads[0].title_art} style={{ width: '100%' }} />
          <div className="text">{data.user.uploads[0].title}</div>
        </div>

        <div className="slides fade">
          <div className="numbertext">2 / 3</div>
          <img src={data.user.uploads[0].title_art} style={{ width: '100%' }} />
          <div className="text">{data.user.uploads[0].title}</div>
        </div>

        <div className="slides fade">
          <div className="numbertext">3 / 3</div>
          <img src={data.user.uploads[0].title_art} style={{ width: '100%' }} />
          <div className="text">{data.user.uploads[0].title}</div>
        </div>

        {/* <!-- Next and previous buttons --> */}
        <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={plusSlides(1)}>&#10095;</a>
      </div>

      <br />

      {/* <!-- The dots/circles --> */}
      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={currentSlide(1)}></span>
        <span className="dot" onClick={currentSlide(2)}></span>
        <span className="dot" onClick={currentSlide(3)}></span>
      </div>
    </div>
  )
}