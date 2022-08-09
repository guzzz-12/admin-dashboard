import {Box} from "@mui/material";
import TransactionsTable from "../transactionsTable";
import "./userComponentsStyles.css";

const UserTable = () => {
  return (
    <Box className="user__table">
      <TransactionsTable />
    </Box>
  )
}

export default UserTable;