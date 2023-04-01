import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({pics, imgStyle}) => {
  return (
    pics.map(pic => (
        <Imagem
            imgStyle={imgStyle} 
            src={pic.src.small}
            id={pic.id}
            alt={pic.alt}
        />
    ))
  )
}

export default ListaImagens