import React from 'react'
import MainScreen from '../../Components/MainScreen'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNotes = () => {

    var data = [
        { _id: 1, title: 'Learn Mern', content: 'Learn how to create a server in node JS and my first API', category: 'Learning' },
        { _id: 2, title: 'Learn Mern', content: 'Learn how to create a server in node JS and my first API', category: 'Learning' },
        { _id: 3, title: 'Learn Mern', content: 'Learn how to create a server in node JS and my first API', category: 'Learning' },
        { _id: 4, title: 'Learn Mern', content: 'Learn how to create a server in node JS and my first API', category: 'Learning' },
        { _id: 5, title: 'Learn Mern', content: 'Learn how to create a server in node JS and my first API', category: 'Learning' },
        { _id: 6, title: 'Learn Mern', content: 'Learn how to create a server in node JS and my first API', category: 'Learning' },
        { _id: 7, title: 'Learn Mern', content: 'Learn how to create a server in node JS and my first API', category: 'Learning' },
    ]

    const deleteHandler = (id) => {
        if (window.confirm('Do you really want to Delete?')) {

        }
    }

    return (
        <MainScreen title='Welcome Back to Note Zipper' >
            <Link to='/createnote' >
                <Button style={{ marginLeft: 10, marginBottom: 5 }} size='lg' >Create New Note</Button>
            </Link>
            {
                data.map((item, index) => (
                        <Card key={index} style={{ margin: '10px' }} >
                            <Card.Header style={{ display: 'flex' }}>
                                <span style={{ color: 'black', textDecoration: 'none', flex: 1, cursor: 'pointer', alignSelf: 'center', fontSize: '18' }} >
                                    {item.title}
                                </span>
                                <div>
                                    <Button href={`/note/${item._id}`}>Edit</Button>
                                    <Button variant='danger' className='mx-2' onClick={() => { deleteHandler(item._id) }} >Delete</Button>
                                </div>
                            </Card.Header>
                            
                                <Card.Body>
                                    <h4>
                                        <Badge variant='success'>
                                            Category - {item.category}
                                        </Badge>
                                    </h4>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {item.content}
                                        </p>
                                        <footer className="blockquote-footer">
                                            Someone famous in <cite title="Source Title">Created On - date</cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                        </Card>

                ))
            }


        </MainScreen>
    )
}

export default MyNotes