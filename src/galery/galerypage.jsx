import axios from "axios";
import React from "react";
import styles from "./galerypage.module.css";
const Card = ({url}) => {
    const [name,setName] = React.useState(styles.card)
     const handleClick = ()=>{
        if(name == styles.card){
            setName(styles.card1)
        }
        else{
            setName(styles.card)
        }
    }
    return (
        <div onClick={handleClick} className={name}>
            <img src={url} alt="img"/>
        </div>
    )
}
const Galery = ()=>{
    const [data,setData] = React.useState(null);
    React.useEffect(()=>{
        const config = {
            method: 'GET',
            url: 'https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0'
        }
        axios(config)
        .then((res)=>{
            setData(res.data)
        })
    },[]);
    return (
        <>
        <h1>gallery Page</h1>
        <div className={styles.grid}>
            {data?.map((item)=>(
                <Card  key={item.id} url={item.urls.regular}/>
            ))}
        </div>
        </>
    )
}
export default Galery