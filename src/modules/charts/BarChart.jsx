import ReactApexChart from "react-apexcharts";

const BarChart = ({ attendanceData }) => {
    const chartTwoOptions = {
        series: attendanceData,
        colors: ["#3056D3", "#80CAEE"],
        chart: {
            type: "bar",
            height: 335,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        responsive: [
            {
                breakpoint: 1536,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            columnWidth: "25%",
                        },
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
                columnWidth: "25%",
                borderRadiusApplication: "end",
                borderRadiusWhenStacked: "last",
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ["M", "T", "W", "T", "F", "S", "S"],
        },
        legend: {
            position: "top",
            horizontalAlign: "left",
            fontFamily: "Satoshi",
            fontWeight: 500,
            fontSize: "14px",
            markers: {
                radius: 99,
            },
        },
        fill: {
            opacity: 1,
        },
    };

    return (
        <>
        <h1 className='h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 hover:bg-sky-100 hover:text-blue-600 hover:cursor-pointer md:flex-none md:justify-start md:p-2 md:px-3 p-2 font-semibold font-sans text-xl'>ATTENDANCE</h1>
            <ReactApexChart
                options={chartTwoOptions}
                series={chartTwoOptions.series}
                type={chartTwoOptions.chart.type}
                height={chartTwoOptions.chart.height}
            />
        </>
       
    );
};

export default BarChart;
