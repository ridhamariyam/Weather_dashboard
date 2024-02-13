
// mock data instead of api calls


export const fetchAttendance = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [
                {
                    name: "Women",
                    data: [44, 55, 41, 67, 22, 43, 65],
                },
                {
                    name: "Men",
                    data: [13, 23, 20, 8, 13, 27, 15],
                },
            ];

            resolve(data);
        }, 1000); 
    });
};

export const fetchWeatherData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {rainChance:76,place:"Kerala"};
            resolve(data);
        }, 1000);
    });
};



export const fetchSeatData = async() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { data: [65, 34, 45, 34], labels: ["AKF", "UDF", "MRF", "LDF"] }
            resolve(data);
        }, 1000);
    });
}


export const fetchRevenueData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data =[
                { name: "2023", data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45] },
                { name: "2022", data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51] },]
            resolve(data);
        }, 1000);
    });
}


export const verifyLogin = async(email,password) => {
    
    if ('admin@gmail.com' === email.trim()){
        if (import.meta.env.VITE_ADMIN_PASSWORD === password){
            return {ok:true,admin:true}
        }
    }
    if ('user@gmail.com' == email.trim()) {
        if (import.meta.env.VITE_USER_PASSWORD === password) {
            return { ok: true, admin: false }
        }
    }
    return {ok:false,admin:false}
}