import SearchBar from "../SearchBar";
import Profile from "../Profile/profile";
import { LoginPage } from "../../Pages/components/LoginPage/LoginPage";
import { useSelector } from "react-redux";



const NavBar = ({ handleSearch}) => {
  const {isAuth, user} = useSelector(state => state.user);
  return (
    <div>
      {!isAuth ?(
      <div>
        <LoginPage></LoginPage>
        </div>
      ):(
        <div>
      <SearchBar handleSearch={handleSearch}/>
      <Profile userData={user}></Profile>
      </div>
      )}
      
    </div>
  );
};

export default NavBar;
