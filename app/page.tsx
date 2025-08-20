import React from 'react'
import Image from 'next/image'
import coffee2 from './images/coffee2.jpg'
import coffee3 from './images/coffee3.jpg'

export default function Homepage() {
  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold text-center text-amber-900'>
        SAU-Coffee Cafe
      </h1>
      <h3 className='text-2xl font-bold text-center text-amber-900'>
        ยินดีต้อนรับสู่ร้านกาแฟสาย U
      </h3>
      <hr className='my-5 mx-10' />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis quos hic molestiae aperiam ad voluptas, in perspiciatis magnam repellendus modi natus explicabo. Quae aut beatae repellendus omnis ipsam mollitia?
      </p>
      <hr className='my-5 mx-10' />
      <Image
        src="https://cdn.pixabay.com/photo/2020/04/22/22/08/cafe-5080266_1280.jpg"
        alt="กาแฟ"
        width={200}
        height={200}
        className='flex mx-auto'
      />
      <div className='flex my-5 gap-7 justify-center'>
        <Image
          src={coffee2}
          alt='กาแฟ2'
          width={300}
          height={200}
        />
        <Image
          src={coffee3}
          alt='กาแฟ3'
          width={300}
          height={200}
        />
      </div>
    </div>
  )
}
