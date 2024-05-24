import { Col, Row } from 'react-bootstrap';
import SideBar from './SideBar';

function AdminDashBoard() {
  return (
    <div>
      <Row>
        <Col sm={1}>
          <SideBar />
        </Col>
        <Col sm={11}>
         

            <div className="p-4 row w-200">
              <div className="col-md-8">
                <div className="row w-80">
                  <div className="d-flex align-items-center col-md-12 w-100 rounded p-3"
                    style={{
                      height: '150px',
                      backgroundColor: 'rgb(104, 34, 128)'
                    }}>
                    <h4 className="text-light">Welcome Admin</h4>
                  </div>
                </div>

                <div className="row mt-5 w-100">
                  <div className="col-md-5">
                    <p>Calendar</p>
                  </div>
                  <div className="col-md-7">
                    <p>Pie chart</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="rounded d-flex justify-content-center align-items-center flex-column"
                  style={{
                    height: '400px',
                    backgroundColor: 'rgb(104, 34, 128)'
                  }}>
                  Profile
                </div>
                <div className="d-flex mt-4 justify-content-center align-items-center rounded text-light"
                  style={{
                    backgroundColor: 'blueviolet',
                    height: '160px'
                  }}>
                  <h3 className="ms-3">Employee count: 9</h3>
                </div>
              </div>
            </div>
   
        </Col>
      </Row>
    </div>
  );
}

export default AdminDashBoard;
