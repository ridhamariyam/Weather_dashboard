
import RevenueChart from './RevenueChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import GaugeChart from './GaugeChart';
import { useEffect, useState } from 'react';
import { fetchAttendance, fetchRevenueData, fetchSeatData, fetchWeatherData } from '../../lib/utils';
import Loader from '../loader/Loader';

export default function CombinedCharts () {
   const [attendanceData,setAttendanceData] = useState([]);
    const [weatherData, setWeatherData] = useState({});
    const [seatData, setSeatData] = useState({});
    const [revenueData, setRevenueData] = useState({});



   const[loader,setLoader] = useState(true)
   const getAttendeesData = async() => {
       const data = await fetchAttendance()
       setAttendanceData(data)
   };

   const getWeatherData = async() => {
       const data = await fetchWeatherData()
       setWeatherData(data)
   }

    const getSeatData = async () => {
        const data = await fetchSeatData()
        setSeatData(data)
    }

    const getRevenueData = async () => {
        const data = await fetchRevenueData()
        setRevenueData(data)
    }

    useEffect(() => {
        Promise.all([
            getAttendeesData(),
            getWeatherData(),
            getSeatData(),
            getRevenueData()
        ]).then(() => setLoader(false));
    }, []);


return(
   <>
        {
            loader ? <Loader /> :
                <main>
                    <h1 className={`mb-4 text-xl md:text-2xl`}>
                        Dashboard
                    </h1>
                    <div className='w-full lg:flex '>
                        <div className='bg--900 lg:w-2/3 w-full shadow-md'>
                            <RevenueChart  data={revenueData}/>
                        </div>
                        <div className=' lg:w-1/3 w-full ml-3 shadow-md mt-3 lg:mt-0'>
                            <BarChart attendanceData={attendanceData} />
                        </div>

                    </div>
                    <div className='w-full lg:flex mt-5'>
                        <div className='bg--900 lg:w-1/2 w-full shadow-md '>
                            <PieChart labels={seatData.labels} data={seatData.data} />
                        </div>
                        <div className=' lg:w-1/2 w-full ml-3 shadow-md mt-3 lg:mt-0'>
                            <GaugeChart data={{ rainChance: weatherData.rainChance, place: weatherData .place}} />
                        </div>

                    </div>



                </main>
        }
   </>
)
}