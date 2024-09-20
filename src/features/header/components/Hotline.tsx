import usa from '@/assets/usa.png';
const Hotline = () => (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
            <div className="px-4 py-2 bg-[#EBEEF6] rounded-xl">Hotline 24/7</div>
            <a className="font-bold" href="tel:+1234567890">(025) 3886 25 16</a>
        </div>
        <div className="flex items-center gap-8">
            <div className="flex gap-3">
                <a href="">Sell on Swoo</a>
                <a href="">Order Tracking</a>
            </div>
            <div className="flex gap-3">
                <div>USD</div>
                <div className="flex items-center gap-2"><img src={usa} alt=""/>ENG</div>
            </div>
        </div>
    </div>
);

export default Hotline;