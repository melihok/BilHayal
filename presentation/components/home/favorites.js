import Image from 'next/image'
import FavoritesImage from '../../assets/svg/favorite/favorite-1.svg'
import FavoritesImage1 from '../../assets/svg/favorite/favorite-2.svg'
import FavoritesImage3 from '../../assets/svg/favorite/favorite-3.svg'
import FavoritesImage2 from '../../assets/svg/favorite/favorite-4.svg'
import FavoritesImage5 from '../../assets/svg/favorite/favorite-5.svg'
import FavoritesImage6 from '../../assets/svg/favorite/favorite-6.svg'

function Favorites() {
  return (
    <>
      <div className="flex flex-col mt-10 mb-10">
        <h2 className="text-3xl font-semibold flex-1 flex ">
          <span className="border-b-4  pb-2 border-indigo-600">
            Explore Populars
          </span>
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="relative  w-1/4 h-96 mr-3">
            <Image
              src={FavoritesImage}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative w-1/4 h-96 mr-3">
            <Image
              src={FavoritesImage1}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative w-1/2 h-96">
            <Image
              src={FavoritesImage2}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="flex flex-row mt-4">
          <div className="relative  w-1/4 h-96 mr-3">
            <Image
              src={FavoritesImage3}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative w-1/4 h-96 mr-3">
            <Image
              src={FavoritesImage5}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="relative w-1/2 h-96">
            <Image
              src={FavoritesImage6}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorites
