import Slider from 'react-slick'
import Image from 'next/image'
import Banner from '../../assets/svg/banner.svg'

const Responsive = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      <div className="relative">
        <div className="h-full">
          <Image
            src={Banner}
            alt="Bil Hayal"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="relative">
        <div className="h-full">
          <Image
            src={Banner}
            alt="Bil Hayal"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </Slider>
  )
}
function HeroSection() {
  return (
    <>
      <Responsive />
    </>
  )
}

export default HeroSection
