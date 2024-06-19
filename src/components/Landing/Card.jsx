import React from 'react'

const Card = ({icon, titre, description, cta, preview} ) => {
  return (
    <article className={`flex rounded-[20px] gap-12 p-[60px] shadow-card ${preview ? 'flex-row' : 'flex-col'}`}>
    <div className={`flex flex-col ${preview ? 'w-3/6' : 'w-full'}`}>
    <img className="shadow-icon w-[50px] h-[50px]" src={icon} alt="icon"/>
    <div className="flex flex-col gap-3 mt-4">
        <h5 className="text-bones text-[32px]">{titre}</h5>
        <p className={`text-bones text-sm ${preview ? 'w-5/6' : 'w-full'}`}>{description}</p>
        <a  className="text-bones underline text-base" href="">{cta}</a>
    </div>
    </div>
    
      {preview && (
        <div className="flex-1">
          <img className="w-full h-full object-contain rounded-[20px] gap-4 shadow-card " src={preview} alt="Image de prévisualisation" />
        </div>
      )}
     </article>
  )
}

export default Card
