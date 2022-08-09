import {Box, Typography, IconButton} from "@mui/material";
import {BsThreeDotsVertical} from "react-icons/bs";
import {CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./charts.css";

const FeaturedChart = () => {
  return (
    <Box className="featured-chart">
      <Box className="featured-chart__header">
        <Typography className="featured-chart__title" variant="h5">
          Total Revenue
        </Typography>
        <IconButton size="small">
          <BsThreeDotsVertical />
        </IconButton>
      </Box>

      <Box className="featured-chart__progress">
        <CircularProgressbarWithChildren
          styles={buildStyles({
            pathColor: "cornflowerblue",
            strokeLinecap: "butt"
          })}
          value={70}
          strokeWidth={5}
        >
          <Typography variant="h2">
            70%
          </Typography>
        </CircularProgressbarWithChildren>
      </Box>
      <Box className="featured-chart__progress-info">
        <Typography fontWeight={700}>
          Total sales made today
        </Typography>
        <Typography variant="h4">
          $420
        </Typography>
      </Box>
      <Box className="featured-chart__progress-desc">
        <Typography variant="subtitle1" fontWeight={700} lineHeight={1.2}>
          Previous transactions are still being processed.
          <br />
          Latest payments may not be included.
        </Typography>
      </Box>

      <Box className="featured-chart__targets">
        <Box className="featured-chart__target">
          <Typography>Target</Typography>
          <Typography fontWeight={700}>$12.4k</Typography>
        </Box>
        <Box className="featured-chart__target">
          <Typography>Last Week</Typography>
          <Typography fontWeight={700}>$9.0k</Typography>
        </Box>
        <Box className="featured-chart__target">
          <Typography>Last Month</Typography>
          <Typography fontWeight={700}>$24.0k</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default FeaturedChart;