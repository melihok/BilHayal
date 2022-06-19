import Image from 'next/image'
import CardsImage from '../../assets/svg/cards/cards.svg'
import CardsImage1 from '../../assets/svg/cards/cards-2.svg'
import CardsImage2 from '../../assets/svg/cards/cards-3.svg'

function Cards() {
  return (
    <>
      <div className="flex flex-col mt-10">
        <div className="flex flex-row">
          <div className="relative w-1/2 h-96 mr-3">
            <Image
              src={CardsImage}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=" rounded-xl"
            />
          </div>
          <div className="relative w-1/2 h-96 mr-3">
            <Image
              src={CardsImage1}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=" rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-row mt-5">
          <div className="relative w-1/2 h-96 mr-3">
            <Image
              src={CardsImage1}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=" rounded-xl"
            />
          </div>
          <div className="relative w-1/2 h-96 mr-3">
            <Image
              src={CardsImage}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=" rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
