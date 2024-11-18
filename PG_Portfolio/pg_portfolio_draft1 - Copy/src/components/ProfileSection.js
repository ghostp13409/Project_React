import { Link } from "react-router-dom";
const ProfileSection = () => {
  return (
    <>
      <Link to="/" className="logo">
        <div className="info-header">
          <img
            src="./logos/profile_logo.jpeg"
            alt="Profile"
            className="profile-picture"
          />
          <h1>Parth Gajjar</h1>
          <h2>Developer</h2>
        </div>
      </Link>
    </>
  );
};

export default ProfileSection;
