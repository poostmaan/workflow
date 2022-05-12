/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
]

export default function Example() {
  return (
    <div className="py-16 bg-gradient-to-r from-indigo-500 to-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">

          <div className="lg:text-left">
            <h2 className="text-base text-indigo-100 font-semibold tracking-wide uppercase">Desde el 18 de abril de 2022 hasta el 17 de mayo de 2022</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Regístrate y Gana
            </p>
            <p className="mt-4 max-w-2xl text-xl text-indigo-200">
              ¡Obtén hasta $100 en BTC y prepárate para ganar un bono adicional de $150!
            </p>
          </div>

          <div>
            <Image
              src="https://clouddevs.com/3dbay/files/preview/960x960/11644337696pt8nteqvr3h4maoylvehxcha5jva5s66mbhwvnwur5y64tva95mpkjohch8p1xiks3qde6sh61jsxhywynep6vrxo1akngihyaga.png"
              alt="image1" 
            ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}