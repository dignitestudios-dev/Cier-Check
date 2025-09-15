import React from "react";

const MeetOurBoard = () => {
    const Doctors = [
        {
            image:"/dr 1.png",
            name:"Dr. Rachel Nazarian",
            title:"MD, FAAD"
        },
        {
            image:"/dr 1.png",
            name:"Dr. Rachel Nazarian",
            title:"MD, FAAD"
        },
        {
            image:"/dr 1.png",
            name:"Dr. Rachel Nazarian",
            title:"MD, FAAD"
        },
        {
            image:"/dr 1.png",
            name:"Dr. Rachel Nazarian",
            title:"MD, FAAD"
        }
    ]
  return (
    <div className="w-full flex flex-col  gap-3 py-12 lg:py-20 horizontal-padding bg-[#F460910A]">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-center section-heading">
          Meet our Board Certified Dermatologists
        </h2>
        <button className="bg-[#E10983] w-[85px] h-[40px] rounded-[100px]  text-[#FFFFFF]  text-[16px] font-[500] ">
          View All
        </button>
      </div>
      <p className=" text-[16px] font-[400] text-[#181818B2]">
        Our scientific advisory board lends insights and strategic guidance to
        help create solutions that <br /> treat, restore & maintain healthy skin
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 ">
        {
            Doctors.map((item, i) => (
                <div
          className={`w-[300px] h-[168px] group shadow-lg
              bg-[#ffffff] flex flex-col items-center justify-center  relative rounded-[24px] hover:bg-[#E10983] hover:text-[#FFFFFF] 
            `} key={i}
        >
          {/* Circle */}
          <div
            className="
                absolute -top-14 flex  items-center justify-center 
                rounded-full   
                group-hover:border-white group-hover:border-[2.5px] group-hover:border-dashed
              "
          >
            {/* Image */}
            <img
              src={item.image}
              alt=""
              className="h-[100px] w-[100px] rounded-full"
            />
          </div>

          <h1 className="text-[16px] text-center font-[500]">
            {item.name}
          </h1>
          <p className="text-[14px] font-[400] text-[#CF1D67] group-hover:text-[#FFFFFF]">
            {item.title}
          </p>
        </div>
            ))
        }
      </div>
    </div>
  );
};

export default MeetOurBoard;
