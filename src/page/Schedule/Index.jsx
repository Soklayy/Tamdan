import Content from './Content'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Container from '../../component/Container'

const Schedule = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/Soklayy/tamdan-api/main/schedule.json')
        .then((response)=>{
            setData(response.data)
        })
    },[])
    return (
        <Container >
            <h2 className='text-green-500 text-2xl capitalize text-center'>កាលវិភាគប្រចាំសប្តាហ៍</h2>
                <div className=' grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 ​'>
                    {
                        data?.map((data,key)=>(
                            <Content day={data.day} data={data.data} key={key}/>
                        ))
                    }
                </div>
        </Container>
    )
}

export default Schedule