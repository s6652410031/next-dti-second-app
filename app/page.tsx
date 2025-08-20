import React from "react";
import image from "next/image";
import coffee2 from "../images/coffee2.jpg";
import coffee3 from "../images/coffee3.jpg";
export default function HomePage() {
  return (
    <div className='p-10'>
      <h1 className="text-center text-4xl font-bold text-amber-800">
      SAU-Coffee Cafe
      </h1>
      <h3 className="text-center text-2xl font-bold text-amber-800">
        ยินดีต้อนรับสู่ร้านกาแฟ SAU-Coffee
      </h3>
      <hr className="my-5"/>
      <p>  
      </p>
      <hr className="my-5" />
      <image
        src="/Coffee.jpg"
        alt="First Coffee"
        width={200}
        height={200}
        />
    <div className ="flex my-5 gap-7 justify-center">
      <image
        src={coffee2}
        alt="Second Coffee"
        width={200}
        height={200}
      />
      <image
        src={coffee3}
        alt="Third Coffee"
        width={200}
        height={200}
      />
      <image
        src="https://www.istockphoto.com/photo/black-coffee-in-a-white-glass-placed-on-an-old-cement-table-with-coffee-beans-gm1552871673-526527249?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner-popular_media&utm_term=coffee"
        alt="Fourth Coffee"
        width={200}
        height={200}
        className="flex mx-auto"
      />
    </div>
    </div>
  );
}