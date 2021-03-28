import { useState, useContext, useEffect } from 'react'
import { Context } from '../Provider'

export default function SlideShow({ data }) {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ slide_index: 1 })

  // Next/previous controls
  const plusSlides = x => {
    showSlides(state.slide_index += x)
  }

  // Thumbnail image controls
  const currentSlide = x => {
    showSlides(state.slide_index = x)
  }

  const showSlides = x => {
    const slides = document.getElementsByClassName('slides')
    const dots = document.getElementsByClassName('dot')

    if (slides.length === 0) {
      return
    }

    Object.keys(slides).forEach(key => {
      slides[key].style.display = 'none'
    })

    Object.keys(dots).forEach(key => {
      dots[key].className = dots[key].className.replace(' active', '')
    })

    slides[0].style.display = 'block'
    dots[state.slide_index - 1].className += ' active'
  }

  useEffect(() => {
    showSlides()
  }, [])

  return (
    <div className="landing">
      <div className="slideshow-container">

        <a href={context.formatUrl(data.user.uploads[0].title)} className="slides fade">
          <div className="numbertext">1 / 3</div>
          <img src={data.user.uploads[0].title_art} style={{ width: '100%' }} />
          <div className="text">{data.user.uploads[0].title}</div>
        </a>

        <a href={context.formatUrl(data.user.uploads[0].title)} className="slides fade">
          <div className="numbertext">2 / 3</div>
          <img src={data.user.uploads[0].title_art} style={{ width: '100%' }} />
          <div className="text">{data.user.uploads[0].title}</div>
        </a>

        <a href={context.formatUrl(data.user.uploads[0].title)} className="slides fade">
          <div className="numbertext">3 / 3</div>
          <img src={data.user.uploads[0].title_art} style={{ width: '100%' }} />
          <div className="text">{data.user.uploads[0].title}</div>
        </a>

        <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={plusSlides(1)}>&#10095;</a>
      </div>

      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={currentSlide(1)}></span>
        <span className="dot" onClick={currentSlide(2)}></span>
        <span className="dot" onClick={currentSlide(3)}></span>
      </div>
    </div>
  )
}