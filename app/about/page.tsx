import React from 'react'
import { Kanit, Charm } from "next/font/google";
import localFont from 'next/font/local';

const kanit = Kanit({
    subsets: ["latin"],
    weight: "400",
},
);
const charm = Charm({
    subsets: ["latin"],
    weight: "400",
},
);

const kartLai = localFont({
    src: "./../fonts/kartLai.ttf",
    weight: "400",
})

export default function Page() {
    return (
        <div>
            <h1>About Page</h1>
            <h3 className={kanit.className}>เกี่ยวกับเรา</h3>
            <h3 className={charm.className}>ยินดีต้อนรับสู่ร้านกาแฟ</h3>
            <hr />
            <p className={kartLai.className}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus alias perspiciatis quis commodi asperiores pariatur voluptates libero minus atque?
            </p>
        </div>
    )
}
