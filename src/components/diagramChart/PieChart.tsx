import {Pie} from "react-chartjs-2";
import 'chart.js/auto'

const PieChart = ({chartData}:any) => {
    return(
        <>
            <Pie data={chartData} />
        </>
    )
}

export default PieChart;