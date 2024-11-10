import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Statistics: React.FC = () => {
  const pieData = {
    labels: ["BA", "Dev Java", "Dev Java", "Mobile", "Khác"],

    datasets: [
      {
        label: "Số Lượng CV",
        data: [27, 18, 11, 33, 11],
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
        ],
        hoverBackgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
        ],
      },
    ],
  };

  const barData = {
    labels: [
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7",
      "T8",
      "T9",
      "T10",
      "T11",
      "T12",
    ],

    datasets: [
      {
        label: "Số lượng CV theo từng tháng",
        data: [3, 5, 2, 6, 0, 7, 10, 15, 22, 32, 44, 60],
        backgroundColor: "#42a5f5",
      },
    ],
  };

  return (
    <div className="flex w-[95%] p-4 space-x-4">
      <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">
          Số Lượng CV Theo Từng Vị Trí Ứng Tuyển
        </h3>
        <Pie data={pieData} />
      </div>
      <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">
          Biểu Đồ Số Lượng CV Theo Từng Tháng
        </h3>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Statistics;
