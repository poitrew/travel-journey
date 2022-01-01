import React from 'react'
import location_icon from '../location-icon.svg'

export default function Trip(props) {
    return (
        <article className="trip">
            <div className='trip--img_container'>
                <img src={`./images/${props.img}`} />
            </div>
            <div className='trip--info'>
                <div className='trip--location_container'>
                    <img src={location_icon} />
                    <p>{props.country}</p>
                    <a href={props.location}>Views on Google Maps</a>
                </div>
                <div className='trip--content'>
                    <h2 className='trip--content_title'>
                        {props.name}
                    </h2>
                    <p className='trip--content_timeline'>
                        {props.duration}
                    </p>
                    <p className='trip--content_description'>
                        {props.description}
                    </p>
                </div>
            </div> 
        </article>
    )
}