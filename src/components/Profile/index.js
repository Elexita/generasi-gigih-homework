import Link from "../Link/Link";

const Profile = ({ userData }) => {
  const isLoading = userData.display_name === undefined;
  const { external_urls, display_name, images } = userData;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <img src={images[0]?.url} alt={display_name} />
      <Link href={external_urls.spotify}></Link>
    </div>
  );
};

export default Profile;
