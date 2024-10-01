import mainImg from '../../assets/prod5.png';

const MainSlider = () => {
    return (
        <div className="flex">
            <div className="flex flex-col gap-3 justify-center items-center">
                <img className="w-16 h-16 object-cover" src={mainImg} alt=""/>
                <img className="w-16 h-16 object-cover" src={mainImg} alt=""/>
                <img className="w-16 h-16 object-cover" src={mainImg} alt=""/>
                <img className="w-16 h-16 object-cover" src={mainImg} alt=""/>
            </div>

            <div className="mt-20 ml-4 flex flex-col justify-center items-center relative">
                <div className="absolute  ml-6  top-0 left-0 bg-[#1ABA1A] text-white  px-4 py-2 rounded-xl">
                  <p>  SAVE </p>
                    <p className="text-xl">$199.00</p>
                </div>
                <img className="w-96rem pt-10 h-auto object-cover " src={mainImg} alt=""/>
            </div>
        </div>
    );
};

export default MainSlider;
