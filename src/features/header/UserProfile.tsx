import React from 'react';

type UserProfileProps = {
    profile: string;
};
const UserProfile: React.FC<UserProfileProps> = ({ profile }) => (
    <div className="flex gap-3">
        <div>
            <img src={profile} alt="Profile" />
        </div>
        <div>
            <div className="uppercase">Cart</div>
            <div className="font-bold">$1,689.00</div>
        </div>
    </div>
);

export default UserProfile;