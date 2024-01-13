
import { useState } from 'react';

const Calendar = () => {
    
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [dayInMonth, setdayInMonth] = useState(new Date(currentYear, currentMonth + 1, 0).getDate());
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(new Date(currentYear, currentMonth, 1).getDay());

    const changeMonth = (delta) => {
        const newDate = new Date(currentYear, currentMonth + delta, 1);
        setCurrentYear(newDate.getFullYear());
        setCurrentMonth(newDate.getMonth());
        setFirstDayOfMonth(new Date(newDate.getFullYear(), newDate.getMonth(), 1).getDay());
        setdayInMonth(new Date(newDate.getFullYear(), newDate.getMonth()+1, 0).getDate())
        
    }


    // style current day (today)
    const today = (day)=>{
       const tday = new Date()
       if(currentYear === tday.getFullYear() && currentMonth === tday.getMonth() && day === tday.getDate()) return 'bg-green-500'

       return ''
    }


    const showModal = (selectedDate) => {
        // Your showModal logic
    }

    const hideModal = () => {
        // Your hideModal logic
    }

    const handleDateClick = (day) => {
        const selectedDate = new Date(currentYear, currentMonth, day);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = selectedDate.toLocaleDateString(undefined, options);
        showModal(formattedDate);
    };

    return (
        <div className="rounded-2xl overflow-hidden bg-gray-800">
            <div className="flex items-center justify-between px-6 py-3">
                <button onClick={() => changeMonth(-1)} className="text-white hover:text-slate-400">
                    Previous
                </button>
                <h2 id="currentMonth" className="text-green-500">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
                <button onClick={() => changeMonth(1)} className="text-white hover:text-slate-400">
                    Next
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2 p-4" id="calendar">
                {daysOfWeek.map((day, key) => (
                    <div className='text-center text-white font-semibold' key={key}>
                        {day}
                    </div>
                ))}

                {[...Array(firstDayOfMonth)].map((nothing, day) => (
                    <div key={day}>

                    </div>
                ))}

                {[...Array(dayInMonth)].map((nothing, day) => (
                    <div className={`text-center text-white py-2 border cursor-pointer ${today(day+1)}`} key={day}>
                        {day + 1}
                    </div>
                ))}


            </div>
            <div id="myModal" className="modal hidden fixed inset-0 items-center justify-center z-50">
                {/* Your modal content */}
            </div>
        </div>
    );
};

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


export default Calendar;


