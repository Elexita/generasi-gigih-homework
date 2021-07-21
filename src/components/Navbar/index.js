import { redirect } from "../../Pages/components/LoginPage/LoginPage";
import Button from "../Button";
import SearchBar from "../Search bar/index";
import Profile from "../Profile/index";

const Navbar = ({ userData, handleSearch }) => {
  const isAuth = userData?.access_token !== undefined;
  return (
    <div>
      {isAuth ? (
        <div>
          <SearchBar handleSearch={handleSearch}></SearchBar>
          <Profile userData={userData} />
        </div>
      ) : (
        <Button onClick={() => redirect()}>Search</Button>
      )}
      ;
    </div>
  );
};

export default Navbar;
