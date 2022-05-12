import React from 'react';

const cards = [
    {
      id: 1,
      step: 'Step 1',
      title: 'Sign up now',
      description: 'Fast and easy'
    },
    {
      id: 1,
      step: 'Step 2',
      title: 'Complete KYC verification',
      description: 'Complete KYC to get an additional $15 in BTC Bonus in our platform'
    },
    {
      id: 1,
      step: 'Step 3',
      title: 'Make a deposit',
      description: 'Make your first Deposit, or P2P Trade of ≥ 200 USDT to get up to $50 in BTC.'
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-slate-100">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  
          <div className="flex flex-col mb-20 justify-center items-center">
            <p className="text-3xl leading-8 font-bold tracking-tight sm:text-4xl">Start now in three simple steps</p>
            <p className="text-2xl leading-8 tracking-tight sm:text-3xl">Do not hesitate, following these you are about to begin to get awarded</p>
          </div>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {cards.map((card) => (
                <div className="shadow-lg p-6 pb-20 bg-white rounded-[16px]" key={card.id}>
                    <h3 className="mt-4 text-sm text-gray-700">{card.step}</h3>
                    <h1 className="mt-4 text-sm text-gray-700">{card.title}</h1>
                    <p className="mt-1 text-lg font-medium text-gray-900">{card.description}</p>
                    
                </div>
            ))}
          </div>

          <div className="flex justify-center my-8"><button className="px-12 py-4 mt-12  font-semibold text-2xl bg-indigo-600 text-white rounded-full shadow-sm">Sign up</button></div>
        </div>
      </div>
    )
  }