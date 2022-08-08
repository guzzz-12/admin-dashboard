import {Box} from "@mui/material";
import UsersTable from "../../components/usersTable";
import "./users.css";

const UsersPage = () => {
  return (
    <Box className="users">
      <UsersTable />
    </Box>
  )
}

export default UsersPage;