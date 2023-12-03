import React, {useState} from 'react'; 
import {Form, Col } from 'react-bootstrap'; 
import Row from 'react-bootstrap/row'; 
import Container from 'react-bootstrap/container'; 
import Button from 'react-bootstrap/button'; 

const FormPage = () => {
    const [fields, setFields] = useState([
    //     {
    //     // id: 1, 
    //     // task: ""
    // }
])

    const handleChangeInput = (i, e) => {
        console.log(e.target.value); 
        const values = [...fields]
        values[i][e.target.name] = e.target.value
        setFields(values)
    }

    const handleAdd = (id) => {
        setFields([...fields, {id: id + 2, task: ""}])
    }

    const handleSubtract = (i) => {
        const values = [...fields]
        values.splice(i, 1)
        setFields([...values])
    }

    return(
        <div>
            <Container>
                <Row>
                    {fields.length ? 
                    <Form className="no-bullet">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {fields.map((field, i) => (
                                <div key={field.id}>
                            <Row className="align-items-center mt-5">
                                <Col md>
                                    {/* <Form.Label>First Task</Form.Label> */}
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter an errand ..." 
                                        name="firstErrand"
                                        value={field.firstErrand}
                                        onChange={e => handleChangeInput(i, e)}
                                        />

                                </Col>
                                <Col md>
                                    <Button disabled={fields.length === 4} onClick={() => handleAdd(i)} className="mt-4 mr-5" style={{float: "center"}}>
                                        <i className="fas fa-plus"></i>
                                    </Button>
                                    <Button onClick={() => handleSubtract(i)}className="minus-button mt-4">
                                        <i className="fas fa-minus"></i>
                                    </Button>
                                </Col>
                            </Row>
                            </div>
                            ))}
                        </Form.Group> 
                        <div style={{float: "right", marginRight: "250px"}}>
                            <Button type="submit" variant="light">
                                Submit
                            </Button>
                        </div>
                    </Form> : <button className='glow-on-hover' onClick={() => handleAdd(0)}>
                        Describe your day
                    </button>}
                </Row>
            </Container>
        </div>
    )
}

export default FormPage;