import React from 'react'
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import { ServiceCard } from './ServiceCard';

const serviceData = [
  {
    imgUrl: weatherImg,
    title:'Calculate weather',
    desc:'lorem dcdcs csxsxxs aa rdsxdcdcdcd dwaxscd'
  },
  {
    imgUrl: guideImg,
    title:'Best tour guide',
    desc:'lorem dcdcs csxsxxs aa rdsxdcdcdcd dwaxscd'
  },
  {
    imgUrl: customizationImg,
    title:'Customization',
    desc:'lorem dcdcs csxsxxs aa rdsxdcdcdcd dwaxscd'
  }
]

export const ServiceList = () => {
  return(
  <>
  {
    serviceData.map((item,index)=> <Col lg='3' key={index}>
      <ServiceCard item={item} />
    </Col>)
  }
  </>
  )
}
