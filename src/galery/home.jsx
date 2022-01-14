import React from 'react';
import axios from 'axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Home = ()=>{
    const [data,setData] = React.useState(null);
    const [count,setCount] = React.useState(0);
    const increment = ()=> {
        if(count<15){
            setCount((prev)=>prev+1)
        }
        else{
            setCount(0)
        }
    }
    const decrement = ()=> {
        if(count>0){
            setCount((prev)=>prev-1)
        }
    }
    React.useEffect(()=>{
        const config = {
            method : 'get',
            url : 'https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0'
        }
        axios(config)
        .then((res)=>{
            setData(res.data);
        })
    },[])
    return (
        <div>
            {data?(
                <div>
            <ArrowBackIosNewIcon onClick={decrement}/>
            <img src={data[count].urls.regular}/>
            <ArrowForwardIosIcon onClick={increment}/>
            </div>):(
                <h1>loding</h1>
            )}
        </div>    
    )
}
export default Home;