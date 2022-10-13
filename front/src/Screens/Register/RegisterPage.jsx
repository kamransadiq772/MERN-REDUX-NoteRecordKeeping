import React, { useState, useEffect } from 'react'
import MainScreen from '../../Components/MainScreen'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../Components/Loading'
import ErrorMessage from '../../Components/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { registeration } from '../../Actions/userAction'

const RegisterPage = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const userRegister = useSelector(state=>state.userRegister)
    const {loading,userInfo,error} = userRegister


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [confirmpassword, setconfirm] = useState("");
    const [password, setpassword] = useState("");
    const [pic, setpic] = useState("");
    const [message, setmessage] = useState(null);
    

    const submitHandler = async (e) => {
        e.preventDefault()
        if (password !== confirmpassword) {
            setmessage('Password do not match')
        } else {
            setmessage(null)
            dispatch(registeration(name,email,password,pic))
        }
    }

    useEffect(() => {
      if(userInfo){
        navigate('/mynotes')
      }
    }, [userInfo]);

    return (
        <MainScreen title="Registeration" >
            {message && <ErrorMessage variant='danger' >{message}</ErrorMessage>}
            {error && <ErrorMessage variant='danger' >{error}</ErrorMessage>}
            {loading && <Loading />}
            <form id="form" onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} placeholder="Enter name" onChange={(e) => setname(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" value={email} placeholder="Enter email" onChange={(e) => setemail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={confirmpassword} placeholder="Confirm Password" onChange={(e) => setconfirm(e.target.value)} />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Choose Picture</Form.Label>
                    <Form.Control type="file" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            <Row className='py-3' >
                <Col>
                    Already have an account ? <Link className='btn btn-outline-primary' to='/login' >Login Here</Link>
                </Col>
            </Row>
        </MainScreen>
    )
}

export default RegisterPage