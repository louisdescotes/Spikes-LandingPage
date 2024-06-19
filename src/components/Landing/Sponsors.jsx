import React from 'react'

const Sponsors = () => {
  return (
    <section className="h-48 w-full flex justify-center items-center">
    <div className="flex flex-col items-center gap-6 text-[#FFFFFFCC] text-center w-8/12">
      <p className='text-xl'>Trusted by teams at over 1,000 of the world’s leading organizations</p>
      <div className="flex items-center gap-6">
        <img className="h-3" src="/sponsors/dell.png" alt="logo de l'entreprise" />
        <img className="h-3" src="/sponsors/zendesk.png" alt="logo de l'entreprise" />
        <img className="h-3" src="/sponsors/rakuten.png" alt="logo de l'entreprise" />
        <img className="h-3" src="/sponsors/pacific.png" alt="logo de l'entreprise" />
        <img className="h-3" src="/sponsors/ncr.png" alt="logo de l'entreprise" />
        <img className="h-3" src="/sponsors/lattice.png" alt="logo de l'entreprise" />
        <img className="h-3" src="/sponsors/ted.png" alt="logo de l'entreprise" />
      </div>
    </div>
    </section>

  )
}

export default Sponsors
