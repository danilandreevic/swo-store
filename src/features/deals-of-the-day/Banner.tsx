import ban1 from '../../assets/ban1.png';
import ban2 from '../../assets/ban2.png';

const Banner = () => {
    return (
        <div className="flex flex-col gap-2">
            <img className="w-full  rounded-xl  " src={ban1} alt=""/>
            <img className="w-full  rounded-xl " src={ban2} alt=""/>
        </div>
    );
};

export default Banner;
