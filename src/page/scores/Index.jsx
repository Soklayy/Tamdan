import Table from './Table';
import Container from '../../component/Container';


const Scores = () => {
  return (
    <Container >
      <h2 className='text-green-500 text-2xl capitalize  text-center'>ពិន្ទុតាមមុខវិទ្យា</h2>
     
      <Table />
    </Container>
  )
}

export default Scores;

const subject = ['គណិត', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវះវិទ្យា', 'ផែនដីវិទ្យា', 'សិលធម៌', 'ប្រវត្តវិទ្យា', 'ភូមិវិទ្យា']
