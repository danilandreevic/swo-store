import main from '../../../assets/main.png'
import star from '../../../assets/star.png'

const MemberBanner = () => {
    return (
        <div className="w-full h-[107px] mt-4 " style={{
            backgroundImage: `url(${main})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="flex justify-center items-center h-full text-white">
                <p className="flex items-center">
                    <img className="mr-2" src={star} alt=""/>
                    Member get <span className="uppercase text-[#FFE400]">&nbsp;free sipping*&nbsp;</span>
                    with no order minimum!&nbsp; <span className="text-medium">*Restriction apply&nbsp;</span>
                    <span className="underline text-sm">Try free 30-days trial!</span>
                </p>
            </div>
        </div>
    );
};

export default MemberBanner;