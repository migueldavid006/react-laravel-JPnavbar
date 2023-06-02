import React from 'react'
import useQuiosco from '../hooks/useQuiosco'

// export default function Categoria({Categoria}) {
export default function Categoria({categoria}) {
    const {handleClickCategoria} = useQuiosco()
    const {icono, id, nombre } = categoria
    // console.log(categoria)
  return (
    <div className='flex items-center gap-4 border w-full p-3
     hover:bg-amber-400'>

    <img
    alt="logo categoria"
    src={`/img/icono_${icono}.svg`} 
    className='w-12' />

    <button
    type='button'
    className='text-lg font-bold cursor-pointer truncate'
    onClick={()=>handleClickCategoria(id)}
    >{nombre}</button>
    </div>
  )
}
