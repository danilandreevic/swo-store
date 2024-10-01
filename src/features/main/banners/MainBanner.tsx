import React from "react";

type MainBannerProps = {
    header: string;
    images: any[];
    isCategory: boolean;
};

const MainBanner: React.FC<MainBannerProps> = ({ header, images, isCategory }) => {
    return (
        <div className="bg-white w-full rounded-xl p-8 ">
            <div className="flex justify-between">
                <h1 className="uppercase text-xl font-bold">{header}</h1>
                <button className="text-[#666666]">View All</button>
            </div>
            <div className={`grid items-center ${isCategory ? 'grid-cols-4' : 'grid-cols-5'} gap-4 mt-4`}>
                {images.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={isCategory ? item.img : item}
                            alt={`Image ${index + 1}`}
                            className="rounded-lg"
                        />
                        {isCategory && <span className="text-center mt-2">{item.title}</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainBanner;
