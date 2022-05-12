export default function Example() {

    let rules= [
        {
            id: 1,
            description: "Users who sign up for an account and make a first-time Express Purchase, Deposit, or P2P Trade of ≥ 200 USDT (in any approved assets) within seven (7) days can get up to $50 in BTC*."
        },
        {
            id: 2,
            description: 'Users who complete KYC Level 1 will get an additional $10 in BTC bonus.'
        },
        {
            id: 3,
            description: 'The first-time deposit needs to be made within seven (7) days of your account opening, can only be done once, and the amount cannot be accumulated.'
        },
        {
            id: 4,
            description: 'Users cannot withdraw any amount within the first 14 days after the deposit is made.'
        },
        {
            id: 5,
            description: 'The first 500 users who complete all 3 tasks will get an additional $100 cash!'
        },
        {
            id: 6,
            description: 'If any participants have been detected engaging in fraudulent activities or identified as the same person, they will be disqualified from this campaign.'
        },
        {
            id: 7,
            description: 'Each Bybit account can only participate in one deposit campaign within the same time frame, and is not allowed to participate in more than two (2) campaigns at the same time.'
        },
        {
            id: 8,
            description: 'Eligible deposits do not include bonuses or coupons of any kind, deposits from one Bybit account to another.'
        },
        {
            id: 9,
            description: 'The rewards will be credited to the qualified Bybit accounts within one (1) month after the campaign ends. Users can make withdrawals after receiving the rewards.'
        },
        {
            id: 10,
            description: 'Bybit bonuses and coupons can only be used for Perpetual and Futures contracts (Spot not included). Please refer to our Bonus Terms and Conditions page for more details.'
        },
        {
            id: 11,
            description: 'All participating users must abide by the Bybit Terms of Service.'
        },
    ]
        

  return (
    <div className="py-20 ">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
            {
                rules.map((e) => (
                    <li key={e.id}>{e.description}</li>
                ))
            }
      </div>
    </div>
  )
}