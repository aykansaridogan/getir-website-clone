import React from 'react';
import { useState, useEffect } from 'react';
import Slider from "react-slick"; 
import Banners from '../api/banners.json'
import Title from './ui/Title';


export default function Campaigns() {

    const [banners, setBanners] = useState([]);



    useEffect(() => {
        setBanners(Banners);
    }, [])



      return (
        <div className="container mx-auto md:pt-8">     
            <div className='hidden md:block'>
                <Title>Kampanyalar</Title>
            </div>
            <Slider className="md:-mx-2" >
                {banners.length && banners.map((banner, index) => (
                    <div key={banner.id}>
                        <picture className="block md:px-2">
                            <img src={banner.image} className="md:rounded-lg" alt='kampanya' width="400px" />
                        </picture>  
                    </div>
                ))}
            </Slider>
        </div>
    )
}