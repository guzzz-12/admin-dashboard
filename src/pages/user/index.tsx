import {Box} from "@mui/material";
import UserCard from "../../components/user/UserCard";
import UserChart from "../../components/user/UserChart";
import UserTable from "../../components/user/UserTable";
import "./user.css";

const UserPage = () => {
  return (
    <Box className="user">
      <Box className="user__top">
        <UserCard />
        <UserChart />
      </Box>
      <UserTable />
    </Box>
  )
}

export default UserPage;