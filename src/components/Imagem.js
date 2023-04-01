import React from 'react'

const Imagem = ({src, id, alt, imgStyle}) => {
  return (
    <div id={id} className={`${imgStyle} flex justify-content-center`}>
        <img src={src} alt={alt} className="border-round"/>
    </div>
  )
}

export default Imagem