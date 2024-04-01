import Card from 'react-bootstrap/Card';
import Container  from 'react-bootstrap/Container';

const About = () => {
    return(
        <div className="About">
            <img style={{ width: 700, height: 500 }} src="/images/logo.jpg" alt="big logo" className="bigLogo"/>
            <Container className="AboutBodyCard">
                    <div>
                        <h1 style={{fontWeight: "bolder" }}> About Us</h1>
                        <p style={{fontSize: "25px"}}>Thank you for trying Ease! We are excited that you are trying our new App. We hope you are able to find more time in your 
                        day by optimizing the amount of time you spend on the road. With our app, you can let us know your to do list and we will map your optimal route and times. 
                        </p>
                    </div>

            </Container> 
        </div>
        )
}

export default About;