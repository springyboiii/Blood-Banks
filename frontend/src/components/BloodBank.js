import React from 'react'
import { Card } from 'react-bootstrap'
import BloodInventory from './BloodInventory'

const BloodBank = ({ bloodbank }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/bloodbank/${bloodbank._id}`}>
        <Card.Img src={bloodbank.image} variant='top' style={{ objectFit:'cover'}} />
      </a>

      <Card.Body>
        <a  href={`/bloodbank/${bloodbank._id}`} style={{ textDecoration: 'none',color:'black' }}>
          <Card.Title as='div'>
            <strong>{bloodbank.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <div className='my-3'>
            {bloodbank.address} 
          </div>
        </Card.Text>
        <Card.Text as='div'>
          <div className='my-3'>
            <BloodInventory/>
          </div>
        </Card.Text>

        
      </Card.Body>
    </Card>
  )
}

export default BloodBank