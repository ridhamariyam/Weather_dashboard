import ApexCharts from "react-apexcharts";

const RevenueChart = ({data}) => {
    const chartOptions = {
        series: data,
        legend: {
            show: false,
            position: "top",
            horizontalAlign: "left",
        },
        colors: ["#3C50E0", "#80CAEE"],
        chart: {
            fontFamily: "Satoshi, sans-serif",
            height: 335,
            type: "area",
            dropShadow: {
                enabled: true,
                color: "#623CEA14",
                top: 10,
                blur: 4,
                left: 0,
                opacity: 0.1,
            },
            toolbar: {
                show: false,
            },
        },
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        height: 300,
                    },
                },
            },
            {
                breakpoint: 1366,
                options: {
                    chart: {
                        height: 350,
                    },
                },
            },
        ],
        stroke: {
            width: [2, 2],
            curve: "straight",
        },
        markers: {
            size: 0,
        },
        labels: {
            show: false,
            position: "top",
        },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
       
        xaxis: {
            type: "category",
            categories: [
                "Sep",
                "Oct",
                "Nov",
                "Dec",
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            title: {
                style: {
                    fontSize: "0px",
                },
            },
            min: 0,
            max: 100,
        },
    };

    return <div id="chartOne">
        <h4 className='h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 hover:bg-sky-100 hover:text-blue-600 hover:cursor-pointer md:flex-none md:justify-start md:p-2 md:px-3 p-2 font-semibold font-sans text-xl'>REVENUE(Million dollar)</h4>

        <ApexCharts options={chartOptions} series={chartOptions.series} type="area" height={335} />
    </div>;
};

export default RevenueChart;
