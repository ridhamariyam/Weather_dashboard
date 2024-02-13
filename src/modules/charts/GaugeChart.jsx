import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

const GaugeChart = ({data}) => {
    const chartOptions ={
        chart: {
            type: 'radialBar',
            height: 350,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                },
            },
        },
        labels: [data?.place],
    };

    return (
        <div>
            <h1 className='h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 hover:bg-sky-100 hover:text-blue-600 hover:cursor-pointer md:flex-none md:justify-start md:p-2 md:px-3 p-2 font-semibold font-sans text-xl'>RAIN CHANCE</h1>
            <Chart options={chartOptions} series={[data?.rainChance]} type="radialBar" height={350} />
        </div>
    );
};

GaugeChart.propTypes = {
    rainChance: PropTypes.number,
};

export default GaugeChart;
