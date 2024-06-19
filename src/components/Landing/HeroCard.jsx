import React from 'react'

const HeroCard = () => {
  return (
    <article className="text-bones rounded-[20px] p-[60px] shadow-card mt-12 w-10/12">
        <div className="flex flex-col justify-center items-center text-center gap-6">
        <h2 className="w-4/6 text-5xl"> Our powerful analytics provides invaluable insights.</h2>
      <p className="text-lg w-4/6">Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement. </p>
      <a className="text-base border border-bones rounded-[60px] py-[12px] px-[24px] hover:bg-bones hover:text-dark transition-colors duration-500" href="">Download the app</a>
    </div>

    </article>
  )
}

export default HeroCard
