import React from 'react'
import Image from 'next/image'
import MoneyShare from '@/components/MoneyShare'
import money from './images/money.png'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className='shadow-xl rounded-2xl p-8 w-full max-w-xl'>
        <h1 className='text-3xl font-bold text-center text-blue-800'>
          Money Share Calculator
        </h1>
        <h3 className='text-lg font-bold text-center text-blue-800'>
          คำนวณเงินที่ต้องการหารกัน
        </h3>
        <Image className='mx-auto mt-4'
          src={money} alt="money" width={100} height={100}/>
        <MoneyShare/>
      </div>
      <h3 className='mt-8 font-bold text-xl'>
        developed by
        <span>

          Napat DTI SAU

        </span>
      </h3>
    </div>
  )
}
