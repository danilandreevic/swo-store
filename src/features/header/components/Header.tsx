import logo from '@/assets/logo.png';
import HeaderSearch from './HeaderSearch';
import Hotline from './Hotline';
import Navigation from './Navigation';

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