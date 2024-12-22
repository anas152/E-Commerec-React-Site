import img from "../assets/Picture/Console.png";

function ProductCard() {
  return (
    <>
      <div
        className="  gap-4 group flex-col relative border-2 bg-[#F5F5F5] ; w-64 h-[350] "
      >
        <div className="discount bg-primary w-14 h-6 text-white   rounded flex items-center justify-center  ">
          -40%
        </div>
        <img className="m-auto group-hover:scale-110 transition-all duration-300" src={img} alt="product img" />
      <div>
        <h3 className=" font-medium group-hover:text-primary transition-all duration-300">
          HAVIT HV-G92 Gamepad
        </h3>
        <p>
          <span>$120</span> <span>$160</span>
        </p>
        <p>Stars</p>
      </div>
      </div>
      
    </>
  );
}

export default ProductCard;
