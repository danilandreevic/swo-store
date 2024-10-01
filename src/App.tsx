import './App.css'
import Header from "./features/header/Header.tsx";
import Main from "./features/main/Main.tsx";
import DealsOfTheDay from "./features/deals-of-the-day/DealsOfTheDay.tsx";
import MemberBanner from "./features/main/banners/MemberBanner.tsx";

function App() {

    return (
        <div  className="container mx-auto ">
            <Header/>
            <Main/>
            <DealsOfTheDay/>
            <MemberBanner />
        </div>
    )
}

export default App
