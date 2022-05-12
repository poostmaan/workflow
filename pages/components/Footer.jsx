export default function Example() {

    const data = {
        networks: [
            { id: 1, name: 'Facebook', href: '#', icon: ''},
            { id: 2, name: 'Instagram', href: '#', icon: ''},
            { id: 3, name: 'WhatsApp', href: '#', icon: ''},
            { id: 4, name: 'Twitter', href: '#', icon: ''},
        ],
        products: [
            { id: 1, name: 'Trade', href: '#', icon: ''},
            { id: 2, name: 'Inverse Perpetual', href: '#', icon: ''},
            { id: 3, name: 'USDT Perpetual', href: '#', icon: ''},
            { id: 4, name: 'Inverse Futures', href: '#', icon: ''},
            { id: 5, name: 'USDC Perpetual', href: '#', icon: ''},
        ],
        services: [
          { id: 1, name: 'Buy Cripto', href: '#', icon: ''},
          { id: 2, name: 'Markets', href: '#', icon: ''},
          { id: 3, name: 'Trading Fee', href: '#', icon: ''},
          { id: 4, name: 'VIP Program', href: '#', icon: ''},
          { id: 5, name: 'Institucional Services', href: '#', icon: ''},
          { id: 6, name: 'Affiliate Program', href: '#', icon: ''},
          { id: 7, name: 'Referral Program', href: '#', icon: ''},
          { id: 8, name: 'API', href: '#', icon: ''},
        ],
        learn: [
          { id: 1, name: 'Workflow learn', href: '#', icon: ''},
          { id: 2, name: 'Help Center', href: '#', icon: ''},
          { id: 3, name: 'User Feedback', href: '#', icon: ''},
          { id: 4, name: 'P2P FAQ', href: '#', icon: ''},
        ],
        about: [
          { id: 1, name: 'About Workflow', href: '#', icon: ''},
          { id: 2, name: 'Authencity Check', href: '#', icon: ''},
          { id: 3, name: 'Blog', href: '#', icon: ''},
          { id: 4, name: 'Announcements', href: '#', icon: ''},
        ],
    }

  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <div className="text-white list-none text-lg">
              <p className="mt-2 mb-4 text-sm  font-bold tracking-tight text-white sm:text-4xl">Products</p>
              {data.products.map((e) => (
                <li key={e.id}><a href={e.href}><i className={e.icon}></i>{e.name}</a></li> 
              ))}
            </div>
            <div className="text-white list-none text-lg">
              <p className="mt-2 mb-4 text-sm  font-bold tracking-tight text-white sm:text-4xl">Services</p>
              {data.services.map((e) => (
                <li key={e.id}><a href={e.href}><i className={e.icon}></i>{e.name}</a></li>
              ))}
            </div>
            <div className="text-white list-none text-lg">
              <p className="mt-2 mb-4 text-sm  font-bold tracking-tight text-white sm:text-4xl">Learn</p>
              {data.learn.map((e) => (
                <li key={e.id}><a href={e.href}><i className={e.icon}></i>{e.name}</a></li>
              ))}
            </div>
            <div className="text-white list-none text-lg">
              <p className="mt-2 mb-4 text-sm  font-bold tracking-tight text-white sm:text-4xl">About</p>
              {data.about.map((e) => (
                <li key={e.id}><a href={e.href}><i className={e.icon}></i>{e.name}</a></li>
              ))}
            </div>
        </div>

      </div>
    </div>
  )
}