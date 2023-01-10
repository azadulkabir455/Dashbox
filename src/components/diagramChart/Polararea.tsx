import {PolarArea} from "react-chartjs-2";
import 'chart.js/auto'

const Polararea = ({chartData}:any) => {
    return(
        <>
            <PolarArea data={chartData} />
        </>
    )
}

export default Polararea;