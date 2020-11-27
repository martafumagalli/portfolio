import React from 'react';
import { Row, Col } from 'reactstrap';
import Tile from './tile';
import data from '../data';

const Grid = () => {
 
  return (
    <Row className="mt-5 mb-5">
      { data.map((item) => (
        <Col lg="4" md="4" sm="6" xs="12" className="mt-3" key={item.id}>
          <Tile {...item}/>
        </Col>
        ))
      }
    </Row>    
  )
}

export default Grid;