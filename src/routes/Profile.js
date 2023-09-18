import { authService } from "fbase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const onSignOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  return (
    <>
      <button onClick={onSignOutClick}>Sign Out</button>
    </>
  );
};
export default Profile;
