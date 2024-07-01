import React from 'react';

interface ProfilePreviewProps {
  theme: { backgroundColor: string; textColor: string };
}

const ProfilePreview: React.FC<ProfilePreviewProps> = ({ theme }) => {
  console.log(theme)
  return (
    <div className={`p-4 rounded-lg ${theme.backgroundColor}`}>
      <div className="flex flex-col items-center" style={{ color: theme.textColor }}>
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
          {/* <img src="/profile.jpg" alt="Profile" /> */}
        </div>
        <h2 className="text-2xl font-bold mt-4">Mason Parker</h2>
        <p className="text-sm">Graphics & UI/UX Designer</p>
        <p className="text-sm">Denver, United States</p>
        <div className="mt-4 p-4 rounded-lg bg-white shadow-lg">
          <p>
            I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise.
            With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions,
            leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting
            pixel-perfect UIs and captivating graphics that elevate user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
