import { Link } from "react-router-dom";
import home from "../assets/home.png";

export function LayoutComponent() {
  return (
    <div>
      <header>
        <Link to={"/"}>
          <img src={home} alt="Home" />
        </Link>
      </header>
    </div>
  );
}
