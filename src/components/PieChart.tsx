import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BACKGROUND_COLORS = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];
const BORDER_COLORS = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

interface Props {
  data: Array<{ label: string; value: number }>;
  label?: string;
}

export const PieChart = (props: Props) => {
  const { data, label="" } = props;

  const labels = data.map((item) => item.label);
  const values = data.map((item) => item.value);
  const backgroundColors = BACKGROUND_COLORS.slice(0, data.length);
  const borderColors = BORDER_COLORS.slice(0, data.length);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: values,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
};
