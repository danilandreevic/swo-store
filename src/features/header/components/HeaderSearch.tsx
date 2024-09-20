import search from '@/assets/search.png';

const HeaderSearch = () => (
    <div className="flex items-center px-12 py-6 bg-[#1ABA1A] gap-20 rounded-xl">
        <div className="px-3 py-3 bg-white rounded-full w-[45%]">
            <div className="flex w-full items-center gap-8">
                <button className="font-bold whitespace-nowrap">All Categories</button>
                <div className="flex items-center relative w-full">
                    <input className="relative h-full w-full py-2 px-4" placeholder="Search anything..." type="text" />
                    <img className="absolute right-3 top-1/2 transform -translate-y-1/2" src={search} alt="Search" />
                </div>
            </div>
        </div>
        <div className="flex justify-between uppercase w-1/2 text-white font-medium">
            <p>Free shipping over $199</p>
            <p>30 days money back</p>
            <p>100% secure payment</p>
        </div>
    </div>
);

export default HeaderSearch;