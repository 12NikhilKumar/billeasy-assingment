import axios from "axios";
import React from "react";
import styles from "./galerypage.module.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal({url}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>View Image</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img style={{width: '100%', height: '100%'}} src={url}/>
        </Box>
      </Modal>
    </div>
  );
}
const Card = ({url}) => {
    return (
        <div className={styles.card}>
            <img src={url} alt="img"/>
            <BasicModal url={url}/>
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
        <h1>Wall Galery</h1>
        <div className={styles.grid}>
            {data?.map((item)=>(
                <Card  key={item.id} url={item.urls.regular}/>
            ))}
        </div>
        </>
    )
}
export default Galery