import {Box, Typography} from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import "./charts.css";

interface Chart {
  name: string;
  total: number;
}

interface ChartProps {
  fillMode: "solid" | "gradient"
}

const CHART_DATA: Chart[] = [
  {name: "January", total: 1200},
  {name: "February", total: 2100},
  {name: "March", total: 900},
  {name: "April", total: 1500},
  {name: "May", total: 750},
  {name: "June", total: 1800},
  {name: "July", total: 1200}
];

const Chart = ({fillMode}: ChartProps) => {
  return (
    <Box className="chart">
      <Typography className="chart__title" variant="h5">
        Last 7 months revenue
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          style={{paddingTop:"var(--spacing-lg)", fontFamily: "Nunito"}}
          data={CHART_DATA}
          width={100}
          height={100}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {fillMode === "gradient" &&
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="cornflowerblue" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#fff" stopOpacity={0}/>
              </linearGradient>
            </defs>
          }
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="4 4" />
          <Tooltip
            wrapperStyle={{
              textTransform: "capitalize",
              outline: "none",
              border: "1px solid grey"
            }}
          />
          <Area
            type="monotone"
            dataKey="total"
            stroke="cornflowerblue"
            strokeWidth={2}
            fillOpacity={fillMode === "gradient" ? 1 : 0.5}
            fill={fillMode === "gradient" ? "url(#total)" : "cornflowerblue"}
            // fill="cornflowerblue"
            // fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  )
}

export default Chart;