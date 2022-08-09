import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent"
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Spinner;