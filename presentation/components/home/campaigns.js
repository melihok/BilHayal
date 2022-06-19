import Image from 'next/image'
import CampaignsImage from '../../assets/svg/campaigns/campaigns-1.svg'
import CampaignsImage2 from '../../assets/svg/campaigns/campaigns-2.svg'
import CampaignsImage3 from '../../assets/svg/campaigns/campaigns-3.svg'
import CampaignsImage4 from '../../assets/svg/campaigns/campaigns-4.svg'
import Button from '../ui/button'
import Link from 'next/link'

function Campaigns() {
  return (
    <>
      <div className="flex flex-col mt-10 mb-10">
        <h2 className="text-3xl font-semibold flex-1 flex ">
          <span className="border-b-4  pb-2 border-pink-500">
            Campaign Products
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-16">
        <div className="flex flex-col items-center">
          <div className="relative w-full h-96 rounded-xl">
            <Image
              src={CampaignsImage}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="flex w-full flex-col items-start pt-4">
            <div className="flex text-lg font-semibold pt-2">
              Nemlendirici Yüz Kremi Ferahlatıcı
            </div>
            <div className="text-lg font-semibold pt-2 pb-2">144.99</div>
            <Link href="/detail">
              <Button>Sepete Ekle</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-full h-96 rounded-xl">
            <Image
              src={CampaignsImage2}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="flex w-full flex-col items-start pt-4">
            <div className="flex text-lg font-semibold pt-2">
              Nemlendirici Yüz Kremi Ferahlatıcı
            </div>
            <div className="text-lg font-semibold pt-2 pb-2">144.99</div>
            <Link href="/detail">
              <Button>Sepete Ekle</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="custom-image relative w-full h-96 rounded-xl">
            <Image
              src={CampaignsImage3}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start w-full pt-4">
            <div className="flex text-lg font-semibold pt-2">
              Nemlendirici Yüz Kremi Ferahlatıcı
            </div>
            <div className="text-lg font-semibold pt-2 pb-2">144.99</div>
            <Link href="/detail">
              <Button>Sepete Ekle</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="custom-image relative w-full h-96 rounded-xl">
            <Image
              src={CampaignsImage4}
              alt="Bil Hayal"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="flex w-full flex-col items-start pt-4">
            <div className="flex text-lg font-semibold pt-2">
              Nemlendirici Yüz Kremi Ferahlatıcı
            </div>
            <div className="text-lg font-semibold pt-2 pb-2">144.99</div>
            <Link href="/detail">
              <Button>Sepete Ekle</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Campaigns
