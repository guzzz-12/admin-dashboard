import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {Avatar, Box, Typography} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridLocaleText,
  GridRenderCellParams,
  GridToolbarContainer,
  GridToolbarExport
} from "@mui/x-data-grid";
import {usersTableRows} from "./usersTableData";
import {LayoutState} from "../../redux/store";
import "./usersTable.css";


const localization: Partial<GridLocaleText> = {
  toolbarExport: <Typography textTransform="capitalize">Export Data</Typography>,
}


/*------------------------------------*/
// Headers de las columnas de la tabla
/*------------------------------------*/
const usersColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    sortable: true,
    disableColumnMenu: true,
  },
  {
    field: "user",
    headerName: "User",
    flex: 2,
    sortable: false,
    disableColumnMenu: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Box style={{display: "flex", alignItems: "center", gap: "10px"}}>
          <Avatar
            style={{width: "30px", height: "30px"}}
            src={params.row.img}
            alt="avatar"
          />
          {params.row.username}
        </Box>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    flex: 2,
    sortable: true,
    disableColumnMenu: true,
  },

  {
    field: "age",
    headerName: "Age",
    flex: 1,
    sortable: true,
    filterable: true,
    disableColumnMenu: false,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    sortable: false,
    filterable: true,
    disableColumnMenu: false,
    renderCell: (params: GridRenderCellParams) => {
      const status = params.row.status as string;
      return (
        <Box
          style={{
            textTransform: "capitalize",
            color: status === "active" ? "green" : status === "pending" ? "orange" : "red"
          }}
        >
          {status}
        </Box>
      );
    },
  },
];


const UsersTable = () => {
  const {navbarHeight} = useSelector((state: LayoutState) => state.layout);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    // Consultar la siguiente página de datos
    console.log({page: page + 1});
  }, [page]);

  return (
    <Box
      style={{height: `calc(100vh - ${navbarHeight}px)`}}
      className="users__table"
    >
      <DataGrid
        rows={usersTableRows}
        columns={usersColumns}
        // components={{Toolbar: GridToolbar}}
        components={{Toolbar: () => (
          <GridToolbarContainer sx={{paddingRight: "var(--spacing)"}}>
            <GridToolbarExport sx={{marginLeft: "auto"}} />
          </GridToolbarContainer>
        )}}
        pageSize={5}
        rowsPerPageOptions={[5]}
        page={page}
        localeText={localization}
        onPageChange={(val) => setPage(val)}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

export default UsersTable