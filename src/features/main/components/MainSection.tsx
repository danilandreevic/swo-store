import slider3 from '@/assets/slider3.png';
import slider4 from '@/assets/slider4.png';
import slider5 from '@/assets/slider5.png';
import slider6 from '@/assets/slider6.png';
import slider7 from '@/assets/slider7.png';

const MainSection = () => {
    return (
        <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2 bg-white py-5 px-10 rounded-xl  shadow">
                <h2 className="text-red-600 font-bold">SALE 40% OFF</h2>
                <ul className="mt-4 space-y-2 font-medium">
                    <li><a href="#">Laptops</a></li>
                    <li><a href="#">PC & Computers</a></li>
                    <li><a href="#">Cell Phones</a></li>
                    <li><a href="#">Tablets</a></li>
                    <li><a href="#">Gaming & VR</a></li>
                    <li><a href="#">Networking</a></li>
                    <li><a href="#">Cameras</a></li>
                    <li><a href="#">Sounds</a></li>
                    <li><a href="#">Office</a></li>
                    <li><a href="#">Storage, USB</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Clearance</a></li>
                </ul>
            </div>

            <div className="col-span-4 grid gap-5 ">
                <div className=" col-span-3 p-6 rounded-xl shadow" style={{
                    backgroundImage: `url(${slider3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px'
                }}>
                    <div className="gap-4 p-16 text-white text-3xl">
                        <h2 className="font-bold">Noise Cancelling</h2>
                        <h3>Headphone</h3>
                        <div className="text-base mt-2 pl-6 py-8">
                            <p>Boso Over-Ear Headphone,</p>
                            <p>Wifi, Voice Assistant,</p>
                            <p>Low Latency Game Mode</p>
                        </div>
                        <button className="mt-4 text-xl text-black bg-white px-4 py-2 rounded-xl">BUY NOW</button>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-2 grid-rows-1  grid- w-full gap-4">
                    <div className="bg-white p-4 rounded-xl shadow" style={{
                        backgroundImage: `url(${slider4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%'
                    }}>
                        <div className="font-bold mb-5">
                            <h2>Sono Playgo 5</h2>
                            <p>from <span className="text-green-500">$569</span></p>
                        </div>
                        <button className="mt-4 underline">DISCOVER NOW</button>
                    </div>
                    <div className="p-4 rounded-xl text-white shadow" style={{
                        backgroundImage: `url(${slider5})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%'
                    }}>
                        <div className="font-bold mb-8"><h2 className="font-bold">Logitek Bluetooth </h2>
                            <p className="text-[#FFC107]">Keyboard</p></div>
                        <p>Best for all devices</p>
                    </div>
                </div>
            </div>
            <div className="col-span-2 grid grid-rows-2 gap-4">
                <div className="bg-white p-8 rounded-xl shadow flex flex-col items-end" style={{
                    backgroundImage: `url(${slider6})`,
                    backgroundSize: 'cover',
                    height: '100%'
                }}>
                    <h2 className="text-sm mb-4">XOMIA</h2>
                    <div className="font-bold text-xl mb-8">
                        <p>Sport Water</p>
                        <p>Resistance</p>
                        <p> Watch</p>
                    </div>
                    <button className="mt-4 bg-[#333333] text-white text-sm px-4 py-2 rounded-xl">SHOP NOW</button>
                </div>
                <div className="bg-white p-4 rounded-xl shadow h-full" style={{
                    backgroundImage: `url(${slider7})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%'
                }}>
                    <div className="p-4">
                        <div className="text-white mb-8 text-2xl">
                            <p className="font-bold">OKODO BLACK</p>
                            <p>HERO 11+</p>
                            <p>BLACK</p>
                        </div>
                        <p className="text-[#999999]">FROM </p>
                        <p className="text-[#1ABA1A] text-2xl">$169</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;