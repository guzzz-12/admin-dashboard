import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Avatar, Box, Button, Typography, IconButton, Tooltip, Stack} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridLocaleText,
  GridRenderCellParams,
  GridSelectionModel,
  GridToolbarContainer,
  GridToolbarExport
} from "@mui/x-data-grid";
import {FaTrash} from "react-icons/fa";
import {UserData, usersTableRows} from "./usersTableData";
import {LayoutState} from "../../redux/store";
import "./usersTable.css";


/*-------------------------------------------------------------------------------------*/
// Prop para modificar el texto de los componentes de la tabla
// Ir a https://github.com/mui/mui-x/blob/HEAD/packages/grid/x-data-grid/src/constants/localeTextConstants.ts para referenciar los nombres de los componentes
/*-------------------------------------------------------------------------------------*/
const localization: Partial<GridLocaleText> = {
  toolbarExport: <Typography textTransform="capitalize">Export Data</Typography>,
}


const UsersTable = () => {
  const navigate = useNavigate();
  const {navbarHeight} = useSelector((state: LayoutState) => state.layout);
  const [page, setPage] = useState<number>(0);

  const [rowsData, setRowsData] = useState<UserData[]>(usersTableRows)
  const [selectedRows, setSelectedRows] = useState<GridSelectionModel>([]);


  /*---------------------------------------*/
  // Consultar la siguiente página de datos
  /*---------------------------------------*/
  useEffect(() => {
    console.log({page: page + 1});
  }, [page]);


  /*-------------------------------*/
  // Borrar un usuario de la tabla
  /*-------------------------------*/
  const deleteUserHandler = (userId: string) => {
    setRowsData(prev => {
      const filtered = prev.filter(user => user.id !== userId);
      return filtered;
    });
  }


  /*--------------------------------*/
  // Borrar los items seleccionados
  /*--------------------------------*/
  const deleteSelectedHandler = () => {
    setRowsData(prev => {
      const filtered: UserData[] = [];
      prev.forEach(item => {
        if(!selectedRows.includes(item.id)) {
          filtered.push(item);
        }
      });
      return filtered;
    });
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
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    align: "center",
    renderCell: (params: GridRenderCellParams) => {
      const userId = params.row.id as string;
      return (
        <Stack direction="row">
          <Button color="success" onClick={() => navigate(`/users/${userId}`)}>
            <Typography variant="subtitle1" fontWeight={700}>View</Typography>    
          </Button>
          <Button color="error" onClick={() => deleteUserHandler(userId)}>
            <Typography variant="subtitle1" fontWeight={700}>Delete</Typography>
          </Button>
        </Stack>
      )
    }
  }
];


  return (
    <Box
      style={{height: `calc(100vh - ${navbarHeight}px)`}}
      className="users__table"
    >
      <DataGrid
        className="users__table-datagrid"
        rows={rowsData}
        columns={usersColumns}
        // components={{Toolbar: GridToolbar}}
        components={{Toolbar: () => (
          <GridToolbarContainer sx={{paddingRight: "var(--spacing)"}}>
            <GridToolbarExport
              className="users__table-export-btn"
              sx={{marginLeft: "auto", marginRight: "var(--spacing)"}} 
            />
            {selectedRows.length > 0 &&
              <Tooltip
                title={
                  <Typography variant="subtitle1">
                    Delete seleted
                  </Typography>
                }
              >
                <span>
                  <IconButton
                    color="error"
                    size="small"
                    disabled={selectedRows.length === 0}
                    onClick={deleteSelectedHandler}
                  >
                    <FaTrash />
                  </IconButton>
                </span>
              </Tooltip>
            }
          </GridToolbarContainer>
        )}}
        pageSize={10}
        rowsPerPageOptions={[10]}
        page={page}
        localeText={localization}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(selection) => setSelectedRows(selection)}
        selectionModel={selectedRows}
        onPageChange={(val) => setPage(val)}
      />
    </Box>
  );
}

export default UsersTable