import React from 'react'
import Card from './Card'
import HeroCard from './HeroCard'

const Services = () => {
  return (
    <>
    <section className="flex flex-col justify-center items-center mt-24">
      <div className="text-center flex justify-center items-center flex-col gap-8 relative h-56">
        <div className="relative">
        <img className="absolute w-fit h-fit top-0 object-cover -z-10" src="/blur.png" alt="" />
        <h3 className="text-bones w-full relative text-5xl">Features that <br/> work for your <br/>future.</h3>
        </div>
        <p className="text-bones w-7/12 text-lg">Check out our amazing features and experience the power of Vaultflow for yourself.</p>
      </div>
      <div className="flex justify-center items-center gap-6 mt-24 w-10/12">
        <Card
        icon= '/analytics.png'
        titre= 'Analytics Dashboard'
        description= 'Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.'
        cta= 'View dashboard'
        />

        <Card
        icon= '/digital.png'
        titre= 'Digital Credit Tokens'
        description= 'Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.'
        cta= 'View tokens'
        />
      </div>
    <div className=" mt-12 w-10/12">
      <Card
        icon= '/code.png'
        titre= 'Code collaboration'
        description= "Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable."
        cta= 'View code collaboration'
        preview= '/codeImg.png'
        />
    </div>
        <HeroCard />
    </section>
    </>
    
  )
}

export default Services
