import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title:"Calculate Weather",
        desc: "We have our best team to calculate weather on trips day to make tours hurdle free !"
    },
    {
        imgUrl: guideImg,
        title:"Best tour guide",
        desc: "Our Guides has at least 1 world tour, none can guide better."
    },
    {
        imgUrl: customizationImg,
        title:"Customization",
        desc: "Cancel anytime, Change date anytime, no extra charges"
    }

]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=> (<Col lg='3' md='6' sm='12' className='mb-4' key={index}>
        <ServiceCard item={item}/>
        </Col>
))}
  </>
}

export default ServiceList
