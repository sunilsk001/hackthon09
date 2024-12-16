import React from 'react'

const Button = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-3 md:px-[135px] py-8">

        <div className="text-white text-center md:text-left md:w-[50%] w-full">
<h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
            Don&#39;t wait make a smart & logical quote here. Its pretty easy.
          </p>
</div>
<div className="flex md:mt-0 mt-4 justify-center md:justify-start w-full">
<input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-3 md:py-[10px] md:px-[20px] mr-2 w-[80%] md:w-auto"
          />
          <button className="text-[#FF9F0D] bg-white py-2 px-4 md:py-[10px] md:px-[20px]">
            Subscribe Now
          </button>
        </div>

    </div>
    
  )
}

export default Button
