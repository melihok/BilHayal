import * as React from 'react'
import Image from 'next/image'
import FooterImage from '../../assets/svg/footer/footer-logo.svg'
import Twitter from '../../assets/svg/footer/twitter.svg'
import Facebook from '../../assets/svg/footer/facebook.svg'
import Linkedin from '../../assets/svg/footer/linkedin.svg'

function Footer() {
  return (
    <>
      <div className="container mx-auto h-full mt-10 bg-pink-200 rounded-t-3xl p-5">
        <div className="flex flex-col">
          <div className="flex flex-row items-start">
            <div className="w-2/5 flex flex-col">
              <div className="relative">
                <Image
                  src={FooterImage}
                  alt="Bil Hayal"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-sm w-3/4 text-black">
                Cupiditate qui amet non quam sunt ex. Ad culpa eum nostrum aut
                officia voluptatem. Deleniti qui ut et ut. Adipisci voluptate
                dolores blanditiis doloribus autem sit quidem velit ut.
                Blanditiis velit similique rerum.
              </p>
              <div className="flex flex-row mt-5">
                <div className="relative mr-2">
                  <Image src={Twitter} alt="Bil Hayal" width={35} height={35} />
                </div>
                <div className="relative mr-2">
                  <Image
                    src={Facebook}
                    alt="Bil Hayal"
                    width={35}
                    height={35}
                  />
                </div>
                <div className="relative">
                  <Image
                    src={Linkedin}
                    alt="Bil Hayal"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
            <div className="w-1/5">
              <h2 className="text-base text-black font-extrabold">
                CATEGORIES
              </h2>
              <ul>
                <li className="text-sm text-black font-normal pt-1">
                  Blanditiis Illo Dolorum
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Repellat Deserunt Repellat
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Qui Eius Ut
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Saepe Porro Amet
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Qui Est Est
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Repellat Deserunt Repellat
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Saepe Porro Amet
                </li>
              </ul>
            </div>
            <div className="w-1/5">
              <h2 className="text-base text-black font-extrabold">BRANDS</h2>
              <ul>
                <li className="text-sm text-black font-normal pt-1">
                  Blanditiis Illo Dolorum
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Repellat Deserunt Repellat
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Qui Eius Ut
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Saepe Porro Amet
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Qui Est Est
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Repellat Deserunt Repellat
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Saepe Porro Amet
                </li>
              </ul>
            </div>
            <div className="w-1/5">
              <h2 className="text-base text-black font-extrabold">ACCOUNT</h2>
              <ul>
                <li className="text-sm text-black font-normal pt-1">
                  Blanditiis Illo Dolorum
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Repellat Deserunt Repellat
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Qui Eius Ut
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Saepe Porro Amet
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Qui Est Est
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Repellat Deserunt Repellat
                </li>
                <li className="text-sm text-black font-normal pt-1">
                  Saepe Porro Amet
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row items-start mt-20">
            <p className=" text-sm">
              © Copyright 2000 - 2022 Bil Hayal Mağazacılık ve Pazarlama A.Ş.
              Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
