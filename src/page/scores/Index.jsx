import React from 'react'
import Table from './Table';
import Filter from '../../component/Filter';
import { monthNames } from '../../constants/Date';
import Container from '../../component/Container';


const Scores = () => {
  const onChangeHandler = (e) => {

  }
  return (
    <Container >
      <h2 className='text-green-500 text-2xl capitalize  text-center'>ពិន្ទុតាមមុខវិទ្យា</h2>
      <div className='space-x-3'>
        <Filter titleOption='មុខវិទ្យា' options={subject} onChangeHandler={onChangeHandler} />
        <Filter titleOption='ខែ' options={monthNames} onChangeHandler={onChangeHandler} />
      </div>
      <Table />
    </Container>
  )
}

export default Scores;

const subject = ['គណិត', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវះវិទ្យា', 'ផែនដីវិទ្យា', 'សិលធម៌', 'ប្រវត្តវិទ្យា', 'ភូមិវិទ្យា']
