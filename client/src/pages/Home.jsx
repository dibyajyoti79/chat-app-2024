import { Link } from "@mui/material";
import AppLayout from "../components/layouts/AppLayout";

const Home = () => {
  return (
    <div>
      <Link to="/auth" variant="body2">
        Login
      </Link>
    </div>
  );
};
export default AppLayout()(Home);
