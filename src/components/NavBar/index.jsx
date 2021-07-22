import SearchBar from "../SearchBar";
import Profile from "../Profile/profile";
import { LoginPage } from "../../Pages/components/LoginPage/LoginPage";

const NavBar = ({ userData, handleSearch }) => {
  const isAuthen = userData?.access_token !== undefined;
  return (
    <div>
      {!isAuthen ?(
      <>
        <LoginPage></LoginPage>
        </>
      ):(
        <>
        <SearchBar handleSearch={handleSearch}/>
        <Profile userData={userData}></Profile>
      </>
      )}
      
    </div>
  );
};

export default NavBar;
