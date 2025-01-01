// Product car ka upper wala today and flas sale wala ha

export default function DayFlash() {
  return (
    <>
      <div className="main-div px-4 md:mx-[50px] lg:mx-[135px] bdr1">
        <div className="today rounded w-[80px] h-10 flex text-primary font-semibold  items-center flex-row-reverse gap-2 ">
          Today's
          <div className="today w-5 h-10 bg-primary rounded"> </div>
        </div>
        <div className=" ">
          <h3 className="text-3xl flex  ">Flash Sales</h3>
          <div className=" flex flex-row gap-2  ">
            <ul>Days</ul>
            <ul>Hours</ul>
            <ul>Mintues</ul>
            <ul>Second</ul>
          </div>
          <div className="flex flex-row 	">
            <ul className="flex ">
              00<span>:</span>
            </ul>
            <ul>
              00<span>:</span>
            </ul>
            <ul>
              00<span>:</span>
            </ul>
            <ul>00 </ul>
          </div>
        </div>
      </div>
    </>
  );
}
