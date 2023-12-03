import React, {useState} from 'react'; 
import {Form, Col } from 'react-bootstrap'; 
import Row from 'react-bootstrap/row'; 
import Container from 'react-bootstrap/container'; 
import Button from 'react-bootstrap/button'; 

const FormPage = () => {
    const [fields, setFields] = useState([{
        id: 1, 
        task: ""
    }])

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
                <Row style={{fontWeight: "bold", marginLeft: "100px"}}>
                    Task List
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEntry">
                            {fields.map((field, i) => (
                                <div key={field.id}>
                            <Row className="mt-5">
                                <Col md>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter an errand ..." 
                                        name="firstErrand"
                                        value={field.firstErrand}
                                        onChange={e => handleChangeInput(i, e)}
                                        />

                                </Col>
                                <Col>
                                    <Button disabled={field.id == 5} onClick={() => handleAdd(i)} className="mt-4 mr-5" style={{float: "center", marginRight: "10px"}}>
                                        <i className="fas fa-plus"></i>
                                    </Button>
                                    <Button disabled={field.id == 1} onClick={() => handleSubtract(i)}className="mt-4">
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
                    </Form>
                </Row>
            </Container>
        </div>
    )
}

export default FormPage;