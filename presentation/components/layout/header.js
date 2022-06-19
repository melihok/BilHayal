import Image from 'next/image'
import Link from 'next/link'
import LogoPic from '../../assets/svg/logo.svg'
import Call from '../../assets/svg/call.svg'
import Help from '../../assets/svg/help-web-button.svg'
import Search from '../../assets/svg/search.svg'
import Notificiation from '../../assets/svg/notification.svg'
import User from '../../assets/svg/user.svg'
import Shopping from '../../assets/svg/shopping-basket.svg'

function Header() {
  return (
    <>
      <div className="h-7 bg-gray-200">
        <div className="container mx-auto h-full">
          <div className="flex flex-row flex-wrap items-center h-full">
            <div className="flex text-gray-600 font-semibold flex-1 text-sm">
              <span className="flex align-center mr-5">
                <Image
                  src={Call}
                  width={12}
                  height={12}
                  alt="Telefon Numarası"
                />
                <span className="ml-2"> 418-891-1441</span>
              </span>

              <span className="flex align-center">
                <Image
                  src={Help}
                  width={17}
                  height={17}
                  alt="Yardm ve Destek"
                />
                <span className="ml-2">Yardım & Destek</span>
              </span>
            </div>
            <div className="text-gray-600 font-semibold text-sm">
              <span className="mr-6">Kampanyalar</span>
              <span className="mr-6">Sipariş Takibi</span>
              <span className="mr-6">Sıkça Sorulan Sorular</span>
              <span className="mr-6">İletişim</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto h-full mt-5">
        <div className="flex flex-row items-center  justify-between">
          <div className="flex items-start relative w-44 h-16">
            <Image
              src={LogoPic}
              alt="Bil Hayal"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className=" w-3/6 relative">
            <input
              className="w-full appearance-none border-2 border-gray-900 rounded  py-2 px-3 text-gray-500  focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            />
            <span className="flex items-center w-11 h-full bg-gray-900 justify-center rounded absolute top-0 right-0">
              <Image src={Search} width={20} height={20} />
            </span>
          </div>
          <div className="flex align-center">
            <span className="flex items-center w-11 h-11 bg-gray-900 justify-center rounded ">
              <Image
                src={Notificiation}
                alt="Bildirimler"
                width={20}
                height={20}
              />
            </span>
            <span className="flex items-center w-11 h-11 bg-gray-900 justify-center rounded ml-2">
              <Image src={User} alt="Bildirimler" width={20} height={20} />
            </span>
            <span className="flex items-center w-11 h-11 bg-gray-900 justify-center rounded ml-2">
              <Image src={Shopping} alt="Sepet" width={20} height={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 mt-3 mb-8">
        <div className="container mx-auto h-full">
          <ul className="flex flex-row p-4">
            <li className="font-bold text-black text-lg pr-5">
              <Link href="/home">
                <a>Anasayfa</a>
              </Link>
            </li>
            <li className="font-bold text-black text-lg">
              <Link href="/about">
                <a>Hakkımızda</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
