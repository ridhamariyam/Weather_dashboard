import ReactApexChart from "react-apexcharts";

const Chart03 = ({labels,data}) => {
    const chartThreeOptions = {
        series: data,
        chart: {
            type: "donut",
            width: 380,
        },
        colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
        labels: labels,
        legend: {
            show: false,
            position: "bottom",
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "65%",
                    background: "transparent",
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 640,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
    };

    return (
      <>
            <h1 className='h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 hover:bg-sky-100 hover:text-blue-600 hover:cursor-pointer md:flex-none md:justify-start md:p-2 md:px-3 p-2 font-semibold font-sans text-xl'> SEAT SHARE</h1>
            <div className="flex">
                <ReactApexChart
                    options={chartThreeOptions}
                    series={chartThreeOptions.series}
                    type={chartThreeOptions.chart.type}
                    width={chartThreeOptions.chart.width}
                />
                <div>
                    {
                        chartThreeOptions.labels.map((value, index) => (
                            <div className="flex p-2" key={index}>
                                <p className="w-2 h-2 mt-1.5"
                                    style={{
                                        backgroundColor: index === 1 ? "#6577F3" : index === 2 ? "#8FD0EF" : index === 3 ? "#0FADCF" : "#3C50E0",
                                    }}
                                ></p>
                                <p className="ml-2 text-sm font-bold text-gray-900">{value}</p>
                                <p className="text-sm font-bold ml-1 text-gray-900">: {chartThreeOptions.series[index]}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
      </>
    );
};

export default Chart03;
