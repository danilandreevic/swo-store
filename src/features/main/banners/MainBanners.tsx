import MainBanner from "./MainBanner.tsx";
import logo1 from '@/assets/logo1.png';
import logo2 from '@/assets/logo2.png';
import logo3 from '@/assets/logo3.png';
import logo4 from '@/assets/logo4.png';
import logo5 from '@/assets/logo5.png';
import logo6 from '@/assets/logo6.png';
import logo7 from '@/assets/logo7.png';
import logo8 from '@/assets/logo8.png';
import logo9 from '@/assets/logo9.png';
import logo10 from '@/assets/logo10.png';
import prod1 from '@/assets/prod1.png';
import prod2 from '@/assets/prod2.png';
import prod3 from '@/assets/prod3.png';
import prod4 from '@/assets/prod4.png';

const MainBanners = () => {
    const imagesFirst: string[] = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];
    const imagesSecond = [
        { img: prod1, title: 'Laptops' },
        { img: prod2, title: 'PC Gaming' },
        { img: prod3, title: 'Headphones' },
        { img: prod4, title: 'Monitors' }
    ];

    return (
        <div className="flex mt-4 gap-4">
            <MainBanner header="Featured Brands" images={imagesFirst} isCategory={false} />
            <MainBanner header="Top Categories" images={imagesSecond} isCategory={true} />
        </div>
    );
};

export default MainBanners;
