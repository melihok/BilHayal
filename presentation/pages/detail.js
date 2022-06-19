import Layout from './../components/layout/layout'
import Head from 'next/head'
import Image from 'next/image'
import sliderImage from './../assets/svg/image-slider.svg'
import colorsImage from './../assets/svg/colors.svg'
import colorsImage2 from './../assets/svg/colors-2.svg'
import Button from './../components/ui/button'

function Detail() {
  return (
    <Layout>
      <Head>
        <title>Bil Hayal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-row">
        <div className=" flex flex-col w-1/3">
          <div className="flex flex-row">
            <div className="relative h-full">
              <Image
                src={sliderImage}
                alt="Bil Hayal"
                width={650}
                height={650}
              />
            </div>
          </div>
        </div>
        <div className=" w-2/3 ml-8  p-10">
          <div className="flex flex-col">
            <div className="text-xl font-extrabold text-pink-600">ALIZE</div>
            <div className=" text-3xl font-black text-black pt-2">
              Alize Cotton Gold Hobby New Kömür Grisi 087
            </div>
            <div className="pt-2 text-gray-500">
              Ürün Kodu : CMS008755Barkod Kodu : 8697678080698Stok <br /> Durumu
              : Stoklarda Var
            </div>
            <div className=" text-3xl font-black text-black pt-2">
              430.00 TL
            </div>
            <div className="flex flex-row pt-6">
              <span className=" flex border-2 border-gray-900 w-10 h-10 items-center justify-center font-semibold text-lg mr-5 hover:bg-pink-600 hover:text-white hover:border-transparent cursor-pointer">
                S
              </span>
              <span className=" flex border-2 border-gray-900 w-10 h-10 items-center justify-center font-semibold text-lg mr-5 hover:bg-pink-600 hover:text-white hover:border-transparent cursor-pointer">
                M
              </span>
              <span className=" flex border-2 border-gray-900 w-10 h-10 items-center justify-center font-semibold text-lg mr-5 hover:bg-pink-600 hover:text-white hover:border-transparent cursor-pointer">
                L
              </span>
              <span className=" flex border-2 border-gray-900 w-10 h-10 items-center justify-center font-semibold text-lg mr-5 hover:bg-pink-600 hover:text-white hover:border-transparent cursor-pointer">
                XL
              </span>
              <span className=" flex border-2 border-gray-900 w-20 h-10 items-center justify-center font-semibold text-lg mr-5 hover:bg-pink-600 hover:text-white hover:border-transparent cursor-pointer">
                10 CM
              </span>
              <span className=" flex border-2 border-gray-900 w-20 h-10 items-center justify-center font-semibold text-lg mr-5 hover:bg-pink-600 hover:text-white hover:border-transparent cursor-pointer">
                20 CM
              </span>
              <span className=" flex border-2 border-gray-900 w-20 h-10 items-center justify-center font-semibold text-lg mr-5 hover:bg-pink-600 hover:text-white hover:border-transparent cursor-pointer">
                40 CM
              </span>
            </div>
            <div className="flex flex-col pt-6">
              <span className="text-2xl font-black text-black pt-2">
                Colors
              </span>
              <div className="flex flex-row">
                <div className="relative">
                  <Image
                    src={colorsImage}
                    alt="Bil Hayal"
                    width={75}
                    height={75}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={colorsImage2}
                    alt="Bil Hayal"
                    width={75}
                    height={75}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={colorsImage}
                    alt="Bil Hayal"
                    width={75}
                    height={75}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={colorsImage2}
                    alt="Bil Hayal"
                    width={75}
                    height={75}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className=" w-52">
                <Button>Sepete Ekle</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <h2 className=" text-2xl font-extrabold text-pink-600">
          Değerlendirmeler
        </h2>
        <div className="flex flex-col bg-gray-100  rounded-2xl p-8 mt-8">
          <div className="flex flex-row items-center">
            <div className="rounded-full w-20 h-20 bg-black text-white flex items-center justify-center font-extrabold text-2xl">
              MO
            </div>
            <div className=" ml-4 text-xl font-extrabold text-black">
              MELİH OK
              <br />
              <span className=" font-medium text-gray-400 text-base">
                12 Nisan Salı
              </span>
            </div>
          </div>
          <div className="pt-6 leading-6">
            <p>
              Fugiat tempore quibusdam error saepe quod est. Voluptates sint
              debitis beatae in illo impedit molestiae rerum suscipit. Ducimus
              asperiores sunt excepturi nulla qui nisi nemo itaque. Omnis
              aperiam quo provident similique quaerat. Aut aut est. Ut porro
              dolorum vero excepturi expedita. Voluptatibus unde eligendi
              occaecati nostrum distinctio. Velit vitae voluptas aut nesciunt.
              Vero vitae reiciendis tenetur. Eum vitae rerum. Quo quis impedit
              earum repellendus necessitatibus suscipit non. Iste ullam id modi
              repellendus omnis rem similique voluptas corporis. Officia sunt
              saepe dolores. Rerum aut et tempora vero reiciendis eligendi
              commodi. Iure quas provident error omnis. Voluptate nesciunt
              voluptas sint maiores qui.{' '}
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-gray-100  rounded-2xl p-8 mt-8">
          <div className="flex flex-row items-center">
            <div className="rounded-full w-20 h-20 bg-black text-white flex items-center justify-center font-extrabold text-2xl">
              MO
            </div>
            <div className=" ml-4 text-xl font-extrabold text-black">
              MELİH OK
              <br />
              <span className=" font-medium text-gray-400 text-base">
                12 Nisan Salı
              </span>
            </div>
          </div>
          <div className="pt-6 leading-6">
            <p>
              Fugiat tempore quibusdam error saepe quod est. Voluptates sint
              debitis beatae in illo impedit molestiae rerum suscipit. Ducimus
              asperiores sunt excepturi nulla qui nisi nemo itaque. Omnis
              aperiam quo provident similique quaerat. Aut aut est. Ut porro
              dolorum vero excepturi expedita. Voluptatibus unde eligendi
              occaecati nostrum distinctio. Velit vitae voluptas aut nesciunt.
              Vero vitae reiciendis tenetur. Eum vitae rerum. Quo quis impedit
              earum repellendus necessitatibus suscipit non. Iste ullam id modi
              repellendus omnis rem similique voluptas corporis. Officia sunt
              saepe dolores. Rerum aut et tempora vero reiciendis eligendi
              commodi. Iure quas provident error omnis. Voluptate nesciunt
              voluptas sint maiores qui.{' '}
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-gray-100  rounded-2xl p-8 mt-8">
          <div className="flex flex-row items-center">
            <div className="rounded-full w-20 h-20 bg-black text-white flex items-center justify-center font-extrabold text-2xl">
              MO
            </div>
            <div className=" ml-4 text-xl font-extrabold text-black">
              MELİH OK
              <br />
              <span className=" font-medium text-gray-400 text-base">
                12 Nisan Salı
              </span>
            </div>
          </div>
          <div className="pt-6 leading-6">
            <p>
              Fugiat tempore quibusdam error saepe quod est. Voluptates sint
              debitis beatae in illo impedit molestiae rerum suscipit. Ducimus
              asperiores sunt excepturi nulla qui nisi nemo itaque. Omnis
              aperiam quo provident similique quaerat. Aut aut est. Ut porro
              dolorum vero excepturi expedita. Voluptatibus unde eligendi
              occaecati nostrum distinctio. Velit vitae voluptas aut nesciunt.
              Vero vitae reiciendis tenetur. Eum vitae rerum. Quo quis impedit
              earum repellendus necessitatibus suscipit non. Iste ullam id modi
              repellendus omnis rem similique voluptas corporis. Officia sunt
              saepe dolores. Rerum aut et tempora vero reiciendis eligendi
              commodi. Iure quas provident error omnis. Voluptate nesciunt
              voluptas sint maiores qui.{' '}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Detail
