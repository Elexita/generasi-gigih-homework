import SearchBar from "../SearchBar";
import Profile from "../Profile/profile";
import { LoginPage } from "../../Pages/components/LoginPage/LoginPage";



const NavBar = ({ handleSearch, isLoading}) => {
  const {isAuthen, user} = user;
  return (
    <div>
      {!isAuthen ?(
      <>
        <LoginPage></LoginPage>
        </>
      ):(
        <>
        <SearchBar isLoading={isLoading} handleSearch={handleSearch}/>
        <Profile userData={user}></Profile>
      </>
      )}
      
    </div>
  );
};

export default NavBar;
