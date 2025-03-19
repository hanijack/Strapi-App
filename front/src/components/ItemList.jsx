import React from 'react'

const ListItems =async ({blocks}) => {
  console.log(blocks)
  return (
    <div className='flex py-3 px-4'>
      <h1>{blocks.title}</h1>
      <div className='flex sm:flex-col justify-between items-center '>
        {blocks}
      </div>
      </div>
  )
}

export default ListItems