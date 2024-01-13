import React from 'react'
import Table from './Table'
import { monthNames } from '../../constants/Date'
import Filter from '../../component/Filter'
import Container from '../../component/Container'

const Attendance = () => {
    return (
        <Container>
            <h2 className='text-green-500 text-2xl capitalize text-center'>វត្តមានក្នុងថ្នាក់</h2>
            
            <Table />
        </Container>

    )
}

export default Attendance