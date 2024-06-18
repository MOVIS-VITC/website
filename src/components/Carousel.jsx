import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      "(min-width: 100px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slides: { perView: 1 },
  })

  return (
    <div className="w-full max-w-[1150px] flex flex-col gap-8 overflow-visible">
      <div className="navigation-wrapper max-w-[1200] flex flex-col overflow-visible">
        <div ref={sliderRef} className="keen-slider max-w-[1200] overflow-visible">
          <div className="keen-slider__slide number-slide1 aspect-[3/4] lg:aspect-[3/4] bg-out rounded-xl"></div>
          <div className="keen-slider__slide number-slide1 aspect-[3/4] lg:aspect-[3/4] bg-out rounded-xl"></div>
          <div className="keen-slider__slide number-slide1 aspect-[3/4] lg:aspect-[3/4] bg-out rounded-xl"></div>
          <div className="keen-slider__slide number-slide1 aspect-[3/4] lg:aspect-[3/4] bg-out rounded-xl"></div>
          <div className="keen-slider__slide number-slide1 aspect-[3/4] lg:aspect-[3/4] bg-out rounded-xl"></div>
          <div className="keen-slider__slide number-slide1 aspect-[3/4] lg:aspect-[3/4] bg-out rounded-xl"></div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
      {loaded && instanceRef.current && (
          <div className="sm:hidden hidden flex-row gap-6">
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      <div className="flex flex-row w-full justify-center">
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
      </div>
      </div>
    </div>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default Carousel