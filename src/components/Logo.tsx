import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
    <div>
      <Image className='pt-3 mx-5'  src="/Rk-white.png" alt="logo" width={50} height={50} />
    </div>
  )
}

export default Logo
