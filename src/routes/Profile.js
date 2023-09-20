import { authService, dbService } from "fbase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ refreshUser, userObj }) => {
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onSignOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  // const getMyNweets = async () => {
  //   const data = await dbService
  //     .collection("nweets")
  //     .where("creatorId", "==", userObj.uid)
  //     .orderBy("createdAt")
  //     .get();

  //   console.log(data.docs.map((doc) => doc.data()));
  // };
  // useEffect(() => {
  //   getMyNweets();
  // }, []);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={onChange}
          placeholder="Display Name"
          value={newDisplayName}
          autoFocus
          className="formInput"
        />
        <input type="submit" value="Update Profile" className="formBtn mt10" />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onSignOutClick}>
        Sign Out
      </span>
    </div>
  );
};
export default Profile;
