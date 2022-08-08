import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Avatar
} from "@mui/material";
import { TABLE_ROWS_DATA, TABLE_CELL_DATA } from "./tableData";
import "./transactionsTable.css";

const TransactionsTable = () => {
  return (
    <Box className="transactions-table">
      <Typography style={{marginBottom: "var(--spacing)"}} variant="h5">
        Latest transactions
      </Typography>

      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {TABLE_CELL_DATA.map((el, i) => (
                  <TableCell key={i} sx={{fontWeight: 700}}>
                    {el}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          
          <TableBody>
            {TABLE_ROWS_DATA.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>
                  <Avatar
                    className="transactions-table__product-img"
                    src={row.img}
                    alt={row.product}
                  />
                </TableCell>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell
                  className={
                    `${row.status.toLowerCase() === "approved" ? "approved-transaction" : "pending-transaction"}`
                  }
                >
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TransactionsTable;