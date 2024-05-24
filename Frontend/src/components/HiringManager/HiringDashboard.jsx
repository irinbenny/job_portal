import { Container, Row, Col, Card, ListGroup, Badge,Figure, Image } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import NavBar from './NavBar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const HiringDashboard = ({ userName, date }) => {
  const events = [
    {
      title: 'Waiter at Big Event order',
      start: new Date(2020, 11, 26, 9, 0),
      end: new Date(2020, 11, 26, 17, 0),
      desc: 'Dubai Branch',
    },
    {
      title: 'Big summer order',
      start: new Date(2020, 11, 26, 9, 0),
      end: new Date(2020, 11, 26, 17, 0),
      desc: 'Dubai Media City',
    },
    {
      title: 'Another order',
      start: new Date(2020, 11, 26, 9, 0),
      end: new Date(2020, 11, 26, 17, 0),
      desc: 'Palm Beach',
    },
  ];
  const currentDate = new Date().toDateString();

  return (
    <div>
        <div style={{backgroundColor:'rgb(171, 89, 89)'}}>
        <NavBar/>
        </div>
        <div style={{padding:"50px"}}>
            <div>
                <h6>{currentDate}</h6>
            </div>
            <div>
                <h3>Good Morning, {userName}</h3>
            </div>
            </div>
     {/*  <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Ogram</Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="primary" className="mx-2">New Order</Button>
        </Nav>
      </Navbar> */}

      <Container fluid>
        <Row className="mt-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Jobs Today</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Badge pill variant="primary" className="mr-2">10</Badge>
                    Runner: 6:00 AM - 3:00 PM
                  </ListGroup.Item>
                </ListGroup>
                <Card.Title className="mt-4">Upcoming Jobs</Card.Title>
                <ListGroup variant="flush">
                  {events.map((event, index) => (
                    <ListGroup.Item key={index}>
                      <Figure className="mr-3">
                        <Figure.Image
                          width={40}
                          height={40}
                          alt="171x180"
                          src="https://i.pinimg.com/564x/0c/71/4c/0c714c58a746f939ceebff0f6b4a8260.jpg"
                          roundedCircle
                        />
                      </Figure>
                      <Figure.Caption>
                        <strong>{event.title}</strong><br />
                        {moment(event.start).format('ddd, MMM D')} | {moment(event.start).format('h:mm A')} - {moment(event.end).format('h:mm A')} | {event.desc}
                      </Figure.Caption>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 300 }}
                />
                <Card.Title className="mt-4">Providers to be rated</Card.Title>
                <Row className='mt-5'>
                  {[...Array(12)].map((_, index) => (
                    <Col xs={4} key={index} className="mb-3">
                      <Image src="https://i.pinimg.com/564x/59/51/0b/59510b571158f40080fd0c913d68d61a.jpg" roundedCircle style={{width:'70px'}}/>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HiringDashboard;