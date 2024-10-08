import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
      <Card width={"basis-1/3"} start={false} para={true} customHover={"hover:p-6"}/>
      <Card width={"basis-2/3"}  start={true} para={false} customHover={"hover:bg-violet-600 hover:p-6"}/>
    </div>
  )
}

export default Cards
