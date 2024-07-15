import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Resmenu() {
  const [menudata, setMenudata] = useState([]);
  const [resinfo, setResinfo] = useState([]);
  const [discountinfo, setDiscountinfo] = useState([]);
  const [value, setValue] = useState(0);

  const { id } = useParams();
  let mainid = id.split("-").at(-1);

  async function fetchmenu() {
    console.log("this  is res data ", menudata);
    const response = await fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${mainid}&catalog_qa=undefined&submitAction=ENTER`
        )
    );
    // const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${mainid}&catalog_qa=undefined&submitAction=ENTER")
    const result = await response.json();
    const res = JSON.parse(result.contents);
    setResinfo(res?.data?.cards[2]?.card?.card?.info);
    setDiscountinfo(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    let actualmenu =
      (res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
        (data) => data?.card?.card?.itemCards
      );
    setMenudata(actualmenu);
  }

  useEffect(() => {
    fetchmenu();
  }, []);
  function handlenext() {}
  function handleprev() {}
  return (
    <div className="w-full">
      <div className=" w-[800px] mx-auto pt-8 ">
        <p className="font-[10px] text-slate-500 ">
          <Link to={"/"}>
            <span className=" hover: text-slate-800 cursor-pointer">home</span>
          </Link>{" "}
          /{" "}
          <span className=" hover: text-slate-800  cursor-pointer">
            {resinfo.city}
          </span>
          / <span className="text-slate-700 ">{resinfo.name}</span>{" "}
        </p>
        <h1 className="mt-9 ml-4 font-bold text-2xl">{resinfo.name}</h1>
        <div className="w-full h-[206px] bg-gradient-to-t from-slate-300/70 pb-4 pl-4 pr-4    ml-4  mt-3 rounded-[32px] ">
          <div className="w-full h-full border  border-slate-300 rounded-[32px] bg-white  ">
            <div className="p-4 w-full  ">
              <div className="flex items-center gap-1 font-semibold ">
                <i class="fi  text-green-600 text-xl  fi-sr-circle-star"></i>
                <span>{resinfo.avgRatingString}</span>
                <span>({resinfo.totalRatingsString})</span>
                <span>.</span>
                <span>{resinfo.costForTwoMessage}</span>
              </div>
              <p className="cursor-pointer underline text-orange-600 font-semibold  ">
                {" "}
                {resinfo?.cuisines?.join(",")}
              </p>
              <div className="flex gap-3  ">
                <div className="mt-4 w-[7px] flex flex-col justify-center items-center ">
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-300 "></div>
                  <div className="w-[1px] h-[20px] bg-gray-300 "></div>
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-300 "></div>
                </div>
                <div className="flex  flex-col gap-1 text-sm mt-3 ">
                  <p className="font-semibold  ">
                    Outlet{" "}
                    <span className="text-[15px] text-slate-500">
                      {resinfo.areaName}
                    </span>
                  </p>
                  <p className="font-semibold">{resinfo?.sla?.slaString}</p>
                </div>
              </div>
            </div>
            <hr className="mt-2  border " />
            <div className=" w-full ">
              <div className="flex items-center pt-2 pl-5  ">
                <img
                  className="w-5  "
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${resinfo?.feeDetails?.icon}`}
                  alt=""
                />
                {/* <span>{resinfo?.expectationNotifiers[0]?.enrichedText} </span> */}
                <span>
                  {console.log(
                    resinfo?.expectationNotifiers?.[0]?.enrichedText.split(
                      "<b>"
                    )
                  )}
                </span>

                <span className="text-sm ml-4 text-slate-600 ">
                  {resinfo?.expectationNotifiers?.[0]?.enrichedText.replace(
                    /<[^>]*>/g,
                    ""
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden ">
          <div className="flex justify-between mt-8 ">
            <h1 className="font-bold text-xl  ml-8 ">Deals for you </h1>

            <div className="flex  gap-3">
              <div
                onClick={handleprev}
                className={
                  ` cursor-pointer rounded-full w-9 h-9 flex justify-center ` +
                  (value <= 0 ? "bg-gray-100" : "bg-gray-200")
                }
              >
                <i
                  class={
                    `fi text-2xl mt-1 fi-rr-arrow-small-left ` +
                    (value <= 0 ? "text-gray-400" : "text-gray-800")
                  }
                ></i>
              </div>
              <div
                onClick={handlenext}
                className={
                  ` cursor-pointer rounded-full w-9 h-9 flex justify-center ` +
                  (value <= 0 ? "bg-gray-100" : "bg-gray-200")
                }
              >
                <i
                  class={
                    `fi text-2xl mt-1 fi-rr-arrow-small-right ` +
                    (value >= 196 ? "text-gray-400" : "text-gray-800")
                  }
                ></i>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-3 ml-9  ">
            {discountinfo.map((data) => (
              <Discount data={data} />
            ))}
          </div>
        </div>
        <h2 className="text-center mt-5 text-gray-500 font-semibold"> MENU </h2>
        <div className="w-full relative  mt-5  ">
          <div className="w-full text-lg p-3 bg-slate-200 font-semibold text-center cursor-pointer  text-gray-600 rounded-2xl ">
            search for dishes{" "}
          </div>
          <i className="fi fi-br-search absolute top-3 text-lg  text-gray-600 right-4"></i>
        </div>
        <div>
          {menudata.map(
            ({
              card: {
                card: { itemCards, title },
              },
            }) => (
              <p>
                {title}({itemCards.length})
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
function Discount({
  data: {
    info: { header, offerLogo, couponCode },
  },
}) {
  console.log(couponCode);
  return (
    <div className="flex gap-2  min-w-[328px] h-[76px] border p-3 rounded-2xl ">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offerLogo} `}
        alt=""
      />
      <div>
        <h2 className="font-bold text-xl ">{header}</h2>
        <p className="text-gray-500 ">{couponCode}</p>
      </div>
    </div>
  );
}
export default Resmenu;
