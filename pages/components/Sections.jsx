/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Image from 'next/image' 

export default function Example() {
  return (
    <div className="py-20 bg-gradient-to-r from-indigo-500 to-indigo-800">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-center">

            <div><Image src="https://clouddevs.com/3dbay/files/preview/1280x1067/11644337264qnnyn6mxx6gnexiuhjy9e18xkgubrswt5nukxazdsjprdlfjbpogozaikt6iyqpdnfqeneyemyofnxmd0xaxqpzsy8hlavr61odx.png" width="600" alt="" /></div>
            <div className="lg:text-left">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Win an extra $100 in cash
            </p>
            <p className="mt-4 max-w-2xl text-xl text-indigo-300">
                Be the first 500 to finish all three (3) steps above to win an extra $100 in cash!
            </p>
            </div>
        </div>
      </div>
    </div>
  )
}