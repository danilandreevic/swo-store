import React from 'react';
import UserProfile from "./UserProfile.tsx";
import profile from '@/assets/profile.png';


type NavigationProps = {
    logo: string;
};
const Navigation: React.FC<NavigationProps> = ({ logo }) => (
    <div className="flex justify-between mt-10 items-center">
        <div><img src={logo} alt="Logo" /></div>
        <div className="flex gap-10 items-end uppercase font-bold">
            <a href="#">Homes</a>
            <a href="#">Pages</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
        </div>
        <UserProfile profile={profile} />
    </div>
);

export default Navigation;