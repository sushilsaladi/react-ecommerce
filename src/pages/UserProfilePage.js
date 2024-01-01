import NavBar from "../features/navbar/navbar";
import UserProfile from "../features/user/components/UserProfile";

function UserProfilePage() {
  return (
    <div>
      <NavBar>
        <UserProfile></UserProfile>
      </NavBar>
    </div>
  );
}

export default UserProfilePage;
