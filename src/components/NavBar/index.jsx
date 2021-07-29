import SearchBar from "../SearchBar";
import Profile from "../Profile/profile";
import { LoginPage } from "../../Pages/components/LoginPage/LoginPage";



const NavBar = ({ handleSearch, userData}) => {
  const {isAuthen, user} = userData;
  return (
    <div>
      {!isAuthen ?(
      <>
        <LoginPage></LoginPage>
        </>
      ):(
        <>
      <SearchBar handleSearch={handleSearch}/>
      <Profile userData={user}></Profile>
      </>
      )}
      
    </div>
  );
};

export default NavBar;
