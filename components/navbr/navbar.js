import styles from "./navbar.module.css";

const navbar = (props) => {
  const { username } = props;
  return (
    <div>
      Navbar
      <p>{username}</p>
      <ul>
        <li>Home</li>
        <li>My List</li>
      </ul>
    </div>
  );
};

export default navbar;
