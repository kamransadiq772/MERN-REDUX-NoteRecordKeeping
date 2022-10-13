import React,{useEffect,useState} from 'react'
import './LandingPage.css'
import {Button, Container, Row} from 'react-bootstrap'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()


//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if(userInfo){
//         navigate('/mynotes')
//     }
// }, [pathname]);

  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='intro-text' >
                   <div>
                     <h1 className='title' >Welcome to Note Zipper</h1>
                     <p className='subtitle' >One Safe place for all you notes.</p>
                   </div>
                   <div className='buttonContainer'>
                     <Link to='/login'>
                        <Button size='lg' className='landingbutton'>Login</Button>
                     </Link>
                     <Link to='/register'>
                        <Button size='lg' className='landingbutton' variant='outline-primary'>Register</Button>
                     </Link>
                   </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage