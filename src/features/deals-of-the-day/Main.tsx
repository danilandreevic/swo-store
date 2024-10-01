import MainSlider from "./MainSlider.tsx";
import MainDescription from "./MainDescription.tsx";


const Main = () => {
    return (
        <>
            <div className="flex bg-white rounded-xl p-8">
                <MainSlider />
                <MainDescription />
            </div>
        </>
    );
};

export default Main;