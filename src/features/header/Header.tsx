import logo from '@/assets/logo.png';
import HeaderSearch from './HeaderSearch.tsx';
import Hotline from './Hotline.tsx';
import Navigation from './Navigation.tsx';

function Header() {
    return (
        <header>
            <div className="mt-5 bg-white p-8 rounded-xl">
            <Hotline />
            <Navigation logo={logo} />
            </div>
            <HeaderSearch />

        </header>
    );
}

export default Header;