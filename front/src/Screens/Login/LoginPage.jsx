import React, { useState, useEffect } from 'react'
import MainScreen from '../../Components/MainScreen'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../Components/Loading'
import ErrorMessage from '../../Components/ErrorMessage'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Actions/userAction'

const LoginPage = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    // const [error, seterror] = useState();
    // const [loading, setloading] = useState(false);
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const submitHandler = async (e) => {
        e.preventDefault()

        dispatch(login(email,password))

        // try {
        //     setloading(true)
        //     const config = {headers : {"Content-type":"application/json"}};
        //     const { data } = await axios.post('/api/users/login',{email,password},config);
        //     localStorage.setItem('userInfo',JSON.stringify(data));
        //     setloading(false)            
        //     seterror()
        // } catch (error) {
        //     seterror(error.response.data.message)
        //     setloading(false)
        // }
    }

    useEffect(() => {
        if(userInfo){
            navigate('/mynotes')
        }
    }, [userInfo]);

    return (
        <MainScreen title='Login' >
            {error && <ErrorMessage variant='danger' >{error}</ErrorMessage>}
            {loading && <Loading />}
            <Form onSubmit={submitHandler}>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Row className='py-3' >
                <Col>
                    New Customer ? <Link className='btn btn-outline-primary' to='/register' >Register Here</Link>
                </Col>
            </Row>
        </MainScreen>
    )
}

export default LoginPage