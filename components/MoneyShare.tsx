"use client"
export default function MoneyShare() {
  return (
    <div>
        <h3 className="font-bold text-xl text-grey-800">    
            จำนวนเงิน:
        </h3>
        <input type="number" id="amount" min={0} placeholder="ป้อนจำนวนเงิน" 
        className="w-full border border-grey-300 p-4 focus:outline-none
                    focus:ring-2 focus:border-blue-500"/>
        
        <h3 className="font-bold text-xl text-grey-800">    
            จำนวนคน:
        </h3>
        <input type="number" id="person" min={0} placeholder="ป้อนจำนวนคน" 
        className="w-full border border-grey-300 p-4 focus:outline-none
                    focus:ring-2 focus:border-blue-500"/>
        
        <button className="w-full mt-4 bg-blue-800 text-2xl text-white p-4 rounded">
            คำนวณ
        </button>
        <button className="w-full mt-4 bg-red-800 text-2xl text-white p-4 rounded">
            ล้างข้อมูล
        </button>
        <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-grey-800">
                ผลลัพธ์
                <span className="text-red-800 text-5xl">
                    0.00
                </span>
            </h3>
        </div>
    </div>
  )
}
