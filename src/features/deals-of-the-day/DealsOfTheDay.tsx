import Main from "./Main.tsx";
import Banner from "./Banner.tsx";
import MainHeader from "./MainHeader.tsx";


const DealsOfTheDay = () => {
    return (
        <div className="flex gap-6 mt-4">
            <div className="w-[80%]">
                <MainHeader/>
                <Main/>
            </div>
            <Banner/>
        </div>
    );
};

export default DealsOfTheDay;