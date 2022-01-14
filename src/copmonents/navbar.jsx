import {Link} from 'react-router-dom';
const NavBar = ()=>{
    return (
        <div style={{display: 'flex',width: '100%',height: '50px',padding: '1rem',border: '1px solid aqua',gap: '25%',position: 'fixed',overflow: 'hidden',background:'black',color:'white',fontSize:'24px',fontWeight:'bold',justifyContent:'center',top:'0'}}>
            <Link to='/'>
                Home
            </Link>
            <Link to='/galery'>
                wall Galery
            </Link>
        </div>
    )
}
export default NavBar