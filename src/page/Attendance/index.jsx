import React from 'react'
import Table from '../scores/Table'

const Attendance = () => {
    return (
        <div className='flex flex-col items-center min-h-screen'>
            <div className='max-w-3xl w-full pt-5'>
                <h2 className='text-green-500 text-2xl capitalize  text-center'>វត្តមានក្នុងថ្នាក់</h2>
                <Table />
            </div>
        </div>
    )
}

export default Attendance